import {print, AlertDialog, applyState, Column, createNode, FutureCreator, listenForEvent, removeClass, render, renderBody, renderInner, Row, setChild, Style, SwitchBar, Text, Timer, useSpriteSheet, vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { createText2 } from "../../homepage/home";

export const explainWatch = () => {
    const div = createNode('div');
    const header = createNode('h3');
    setChild(div, header);
    Text(header, 'Watch()');
    setChild(div, header);

    const explain = createText2('Creates reactive state with observer pattern. Returns [getter, setter, observe] tuple.');
    setChild(div, explain);

    const benefits = createNode('ul');
    const li1 = createNode('li');
    Text(li1, 'Reactive state management');
    const li2 = createNode('li');
    Text(li2, 'Automatic dependency tracking');
    setChild(benefits, li1);
    setChild(benefits, li2);
    setChild(div, benefits);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself'
    });
    setChild(div, tryIt);
    const example = exambleBar({name:'Watch()',guideText:`const [count, setCount, observe] = Watch(0);

// Observer will run when count changes
observe(() => {
    print(\`Count changed to: \${count()}\`);
});

// Update the value
setCount(5);  // Logs: "Count changed to: 5"`,functions:{
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

export const _WatchExample = () => {
    const div = createNode('div');
    const code = createText2(`
const [count, setCount, observe] = Watch(0);

// Observer will run when count changes
observe(() => {
    print(\`Count changed to: \${count()}\`);
});

// Update the value
setCount(5);  // Logs: "Count changed to: 5"
    `);
    setChild(div, code);

    const notes = createText2('Note: Works well with DOM updates in render cycles');
    setChild(div, notes);

    const button = Button({
        variant:'contained',
        text:'Playground'
    });
    button.onclick = () => {
        
    }
    setChild(div, button);

    return div;
}