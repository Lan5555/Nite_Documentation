import { print,AlertDialog, applyState, Column, createNode, FutureCreator, listenForEvent, removeClass, render, renderBody, renderInner, Row, setChild, Style, SwitchBar, Text, Timer, useSpriteSheet, vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { createText2 } from "../../homepage/home";

export const explainColumn = () => {
    const div = createNode('div');
    const header = createNode('h3');
    setChild(div, header);
    Text(header, 'Column()');
    setChild(div, header);

    const explain = createText2('Creates a vertical flex container for stacking elements.');
    setChild(div, explain);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself'
    });

    const example = exambleBar({name:'Column()',guideText:`const column = Column('center',{children:[]});`,functions:{
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
    setChild(div, tryIt);

    return div;
}

export const _ColumnExample = () => {
    const div = createNode('div');
    const text = createText2(`
const buttons = [
    Button({ text: 'Top' }),
    Button({ text: 'Middle' }),
    Button({ text: 'Bottom' })
];

const col = Column('center', {
    children: buttons,
    callback: [() => alert(1), () => alert(2), () => alert(3)]
});
    `);
    setChild(div, text);

    const example = createText2('Example: Vertical layout');
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