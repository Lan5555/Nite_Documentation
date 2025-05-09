import { print,AlertDialog, applyState, Column, createNode, FutureCreator, listenForEvent, removeClass, render, renderBody, renderInner, Row, setChild,Style,SwitchBar,Text, Timer, useSpriteSheet, vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { createText2 } from "../../homepage/home";

export const explianButton = () => {
    const div = createNode('div');
    const header = createNode('h3');
    setChild(div, header);
    Text(header, 'Button()');
    setChild(div, header);

    const explain = createText2('Creates a button element with specified options.');
    setChild(div, explain);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself'
    });
    const example = exambleBar({name:'Button()',guideText:`const button = Button({\n
        variant:'contained',
        text:'This  is just a test'
        });\nreturn button`,functions:{
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

export const _ButtonExample = () => {
    const div = createNode('div');
    const text = createText2(`
const button = Button({ variant: 'contained', text: 'Click me' });
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
