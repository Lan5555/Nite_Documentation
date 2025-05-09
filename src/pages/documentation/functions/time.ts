import { print,AlertDialog, applyState, Column, createNode, FutureCreator, listenForEvent, removeClass, render, renderBody, renderInner, Row, setChild, Style, SwitchBar, Text, Timer, useSpriteSheet, vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { createText2 } from "../../homepage/home";

export const explainTimer = () => {
    const div = createNode('div');
    const header = createNode('h3');
    setChild(div, header);
    Text(header, 'Timer()');
    setChild(div, header);

    const explain = createText2('Creates timers (timeout or interval) with automatic cleanup.');
    setChild(div, explain);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself'
    });
    setChild(div, tryIt);
    const example = exambleBar({name:'Timer()',guideText:`Timer({ Duration: 1000 }, "single", () => {
    console.log("This runs after 1 second");
});`,functions:{
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

export const _TimerExample = () => {
    const div = createNode('div');
    const text = createText2(`
// One-time timeout
Timer({ Duration: 1000 }, "single", () => {
    console.log("This runs after 1 second");
});

// Repeating interval
const stopInterval = Timer({ Duration: 2000 }, "constant", () => {
    console.log("This runs every 2 seconds");
});

// Later stop the interval:
stopInterval();
    `);
    setChild(div, text);

    const example = createText2('Example: Timers');
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