import { Print,CreateNode, ListenForEvent, RemoveClass, SetChild, Style, Text, Vanilla } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { createClass } from "../../../components/class";
import { darkMode, observeMode } from "../../../hooks/mode";
import { prefersDark } from "../../../hooks/theme";
import { createText2 } from "../../homepage/home";

export const explainRemoveClass = () => {
    const div = CreateNode('div');
    const header = CreateNode('h3');
    SetChild(div, header);
    Text(header, 'removeClass()');
    SetChild(div, header);

    const explain = createText2('Removes CSS class(es) from a DOM element. Opposite of Style().');
    SetChild(div, explain);

    
         
         Vanilla(header,{
            color:prefersDark ? 'white' : 'black'
        })
         Vanilla(explain,{
                 color:prefersDark ? 'white':''
        });

        observeMode(() => {
        Vanilla(header,{
        color:darkMode() == 'dark' ? 'white' : 'black'
    })
     Vanilla(explain,{
             color:darkMode() == 'dark' ? 'white':''
    });
    })

    const comparison = CreateNode('div');
    const compareHeader = CreateNode('h4');
    Text(compareHeader, 'Related Methods:');
    SetChild(comparison, compareHeader);
    
    const methodList = CreateNode('ul');
    const method1 = CreateNode('li');
    Text(method1, 'Style() - Adds classes');
    const method2 = CreateNode('li');
    Text(method2, 'vanilla() - Inline styles');
    SetChild(methodList, method1);
    SetChild(methodList, method2);
    SetChild(comparison, methodList);
    SetChild(div, comparison);

    Vanilla(compareHeader,{
        color:prefersDark ? 'white' : 'black'
    });

    Vanilla(method1,{
         color:prefersDark ? 'white' : 'black'
    })

    Vanilla(method2,{
         color:prefersDark ? 'white' : 'black'
    });

    observeMode(() => {
        Vanilla(compareHeader,{
        color:darkMode() == 'dark' ? 'white' : 'black'
    });

    Vanilla(method1,{
         color:darkMode() == 'dark' ? 'white' : 'black'
    })

    Vanilla(method2,{
         color:darkMode() == 'dark' ? 'white' : 'black'
    });
    })

    return div;
}

export const _removeClassExample = () => {
    const div = CreateNode('div');
    createClass('bordered',['border:3px solid black']);
    const code = createText2(`
const box = CreateNode('div');
Style(box, 'active highlighted');

// Later remove a class
RemoveClass(box, 'active');
    `);
    SetChild(div, code);

    const interactiveDemo = CreateNode('div');
    const demoBox = CreateNode('div');
    Vanilla(demoBox, {
        width: '100px',
        height: '50px',
        marginBottom:'10px',
        backgroundColor: 'blue'
    });
    Style(demoBox, 'demo-box');
    
    const toggleBtn = Button({
        variant: 'outlined',
        text: 'Toggle Border Class',
        icon: 'sync'
    });
    
    ListenForEvent(toggleBtn, 'click', () => {
        if (demoBox.classList.contains('bordered')) {
            RemoveClass(demoBox, 'bordered');
        } else {
            Style(demoBox, 'bordered');
        }
    });
    
    SetChild(interactiveDemo, demoBox);
    SetChild(interactiveDemo, toggleBtn);
    SetChild(div, interactiveDemo);

    return div;
}