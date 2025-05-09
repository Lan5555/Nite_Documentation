import { print,createNode, listenForEvent, removeClass, setChild, Style, Text, vanilla } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { createClass } from "../../../components/class";
import { createText2 } from "../../homepage/home";

export const explainRemoveClass = () => {
    const div = createNode('div');
    const header = createNode('h3');
    setChild(div, header);
    Text(header, 'removeClass()');
    setChild(div, header);

    const explain = createText2('Removes CSS class(es) from a DOM element. Opposite of Style().');
    setChild(div, explain);

    const comparison = createNode('div');
    const compareHeader = createNode('h4');
    Text(compareHeader, 'Related Methods:');
    setChild(comparison, compareHeader);
    
    const methodList = createNode('ul');
    const method1 = createNode('li');
    Text(method1, 'Style() - Adds classes');
    const method2 = createNode('li');
    Text(method2, 'vanilla() - Inline styles');
    setChild(methodList, method1);
    setChild(methodList, method2);
    setChild(comparison, methodList);
    setChild(div, comparison);

    return div;
}

export const _removeClassExample = () => {
    const div = createNode('div');
    createClass('bordered',['border:3px solid black']);
    const code = createText2(`
const box = createNode('div');
Style(box, 'active highlighted');

// Later remove a class
removeClass(box, 'active');
    `);
    setChild(div, code);

    const interactiveDemo = createNode('div');
    const demoBox = createNode('div');
    vanilla(demoBox, {
        width: '100px',
        height: '50px',
        marginBottom:'10px',
        backgroundColor: 'blue'
    });
    Style(demoBox, 'demo-box');
    
    const toggleBtn = Button({
        variant: 'outlined',
        text: 'Toggle Border Class'
    });
    
    listenForEvent(toggleBtn, 'click', () => {
        if (demoBox.classList.contains('bordered')) {
            removeClass(demoBox, 'bordered');
        } else {
            Style(demoBox, 'bordered');
        }
    });
    
    setChild(interactiveDemo, demoBox);
    setChild(interactiveDemo, toggleBtn);
    setChild(div, interactiveDemo);

    return div;
}