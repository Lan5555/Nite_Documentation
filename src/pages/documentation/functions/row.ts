import { print,AlertDialog, applyState, Column, createNode, FutureCreator, listenForEvent, removeClass, render, renderBody, renderInner, Row, setChild, Style, SwitchBar, Text, Timer, useSpriteSheet, vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { createText2 } from "../../homepage/home";

export const explainRow = () => {
    const div = createNode('div');
    const header = createNode('h3');
    setChild(div, header);
    Text(header, 'Row()');
    setChild(div, header);

    const explain = createText2('Creates a flex container that arranges children horizontally.');
    setChild(div, explain);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself'
    });
    setChild(div, tryIt);
    const example = exambleBar({name:'row()',guideText:`const row = Row('space-between',{children:[]});`,functions:{
        createNode,
        Text,
        setChild,
        vanilla,
        Style,
        print,
        Watch,
        Button,
        renderBody,
        Row,
        Column,
        SwitchBar,
        useFontAwesomeIcon,
        useSpriteSheet,
        render,
        FutureCreator,
        renderInner,
        removeClass,
        Timer,
        applyState,
        listenForEvent,AlertDialog
    }});
    tryIt.onclick = () => {
        setIsOn(!isOn());
        document.body.appendChild(Overlay());
        document.body.appendChild(example);
    }

    return div;
}

export const _RowExample2 = () => {
    const div = createNode('div');
    const text = createText2(`
const buttons = [
    Button({ variant: 'contained', text: 'Button 1' }),
    Button({ variant: 'outlined', text: 'Button 2' })
];

const row = Row('space-between', { 
    children: buttons,
    callback: [() => alert(1), () => alert(2)]
});
    `);
    setChild(div, text);

    const example = createText2('Example: Horizontal layout');
    setChild(div, example);

    const button = Button({
        variant:'contained',
        text:'Playground'
    });
    button.onclick = () => {
        
    }
    setChild(div, button);

    return div;
}