import { CreateNode, Print, renderBody, SetChild, Style, Text, Vanilla, Watch } from "../../../../lib/state"
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { Overlay } from "../../../components/overlay";
import { darkMode, observeMode } from "../../../hooks/mode";
import { isOn, setIsOn } from "../../../hooks/overlayState";
import { setCurrentPageIndex } from "../../../hooks/routestate";
import { prefersDark } from "../../../hooks/theme";
import { createText2 } from "../../homepage/home";
import { example } from "../docs";

export const explianCreateNode = () => {
    
    const div = CreateNode('div');
    const header = CreateNode('h3');
    Style(div,'ml-3');
    const head = CreateNode('h4');
    Text(head,'Function:');
    Vanilla(head,{
        fontSize:'12pt',
        color:prefersDark ? 'white':''
    })
    SetChild(div,head);
    Text(header,'CreateNode()');
    Style(header,'text-green font-bold');
    SetChild(div,header);

    const explain = createText2('Creates a new HTML element and returns type => HTMLElement');
    SetChild(div,explain);


    const tryIt = Button({
        variant:'contained',
        text:'Try it yourself',
        icon:'code'
    });
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

         Vanilla(head,{
        fontSize:'12pt',
        color:darkMode() == 'dark' ? 'white':''
        })
    })
    SetChild(div,tryIt);
    // const helpers = {
    //     createNode : (name:string) => HTMLElement
    // }
    const example = exambleBar({name:'CreateNode()',guideText:`const node = CreateNode('div');`,functions:{
        CreateNode,
        Text,
        SetChild,
        Vanilla,
        Style,
        print,
        Watch,
        Button,
        renderBody
    }});
    tryIt.onclick = () => {
        setIsOn(!isOn());
        document.body.appendChild(Overlay());
        document.body.appendChild(example);
        
    }
    return div
}
export const _CreateNodeExample = () => {
    const div = CreateNode('div');
    const text = createText2(`\nconst node = CreateNode('div');\n
        //If you're using typescript\n
        const node = CreateNode('div') as HTMLElement;\n
    `);
    Vanilla(text,{
        color:'darkred'
    });
    const example = createText2('Example');
    Vanilla(example,{
        fontSize:'14pt'
    });
    SetChild(div,example);
    SetChild(div,text);
    const button = Button({
        variant:'contained',
        text:'Playground',
        icon:'code'
    });
    button.onclick = () => {
        setCurrentPageIndex(3)
        
    }
    SetChild(div,button);
    return div;
}