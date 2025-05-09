import {print, createNode, setChild, Text, applyState, AlertDialog, Column, FutureCreator, listenForEvent, removeClass, render, renderBody, renderInner, Row, Style, SwitchBar, Timer, useSpriteSheet, vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { createText2 } from "../../homepage/home";

export const explainApplyState = () => {
    const div = createNode('div');
    const header = createNode('h3');
    setChild(div, header);
    Text(header, 'applyState()');
    setChild(div, header);

    const explain = createText2('Manages component state similar to React\'s useState hook.');
    setChild(div, explain);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself'
    });
    setChild(div, tryIt);
    const example = exambleBar({name:'applyState()',guideText:`const [count, setCount] = applyState(0);
const button = createNode('button');
Text(button, \`Count: \${count}\`);
button.addEventListener('click', () => setCount(count + 1));
    `,functions:{
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

export const _applyStateExample = () => {
    const div = createNode('div');
    const text = createText2(`
const [count, setCount] = applyState(0);
const button = createNode('button');
Text(button, \`Count: \${count}\`);
button.addEventListener('click', () => setCount(count + 1));
    `);
    setChild(div, text);

    const example = createText2('Example');
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