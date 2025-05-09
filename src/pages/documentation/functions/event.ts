import { print,createNode, setChild, Text, listenForEvent, AlertDialog, applyState, Column, FutureCreator, removeClass, render, renderBody, renderInner, Row, Style, SwitchBar, Timer, useSpriteSheet, vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { createText2 } from "../../homepage/home";

export const explainListenForEvent = () => {
    const div = createNode('div');
    const header = createNode('h3');
    setChild(div, header);
    Text(header, 'listenForEvent()');
    setChild(div, header);

    const explain = createText2('Attaches event listeners to DOM elements.');
    setChild(div, explain);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself'
    });
    setChild(div, tryIt);
    const example = exambleBar({name:'listenForEvent()',guideText:`const node = createNode('div');\nlistenForEvent(node,'click',()=>alert('working'))`,functions:{
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

export const _listenForEventExample = () => {
    const div = createNode('div');
    const text = createText2(`
const button = createNode('button');
Text(button, 'Click Me');

listenForEvent(button, 'click', () => {
    alert('Button clicked!');
});
    `);
    setChild(div, text);

    const example = createText2('Example: Click handler');
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