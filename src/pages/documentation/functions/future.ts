import { print,AlertDialog, applyState, Column, createNode, FutureCreator, listenForEvent, removeClass, render, renderBody, renderInner, Row, setChild, Style, SwitchBar, Text, Timer, useSpriteSheet, vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { createText2 } from "../../homepage/home";

export const explainFuture = () => {
    const div = createNode('div');
    const header = createNode('h3');
    setChild(div, header);
    Text(header, 'FutureCreator()');
    setChild(div, header);

    const explain = createText2('Handles async operations with loading states and error handling.');
    setChild(div, explain);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself'
    });
    setChild(div, tryIt);
    const example = exambleBar({name:'FutureCreator()',guideText:`const fetchData = () => fetch('/api/data').then(res => res.json());

FutureCreator({
    future: fetchData,
    suspense: () => createNode('div').textContent = 'Loading...',
    output: (data) => {
        const div = createNode('div');
        Text(div, \`Data: \${JSON.stringify(data)}\`);
        return div;
    },
    target: document.body
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

export const _futureExample = () => {
    const div = createNode('div');
    const text = createText2(`
const fetchData = () => fetch('/api/data').then(res => res.json());

FutureCreator({
    future: fetchData,
    suspense: () => createNode('div').textContent = 'Loading...',
    output: (data) => {
        const div = createNode('div');
        Text(div, \`Data: \${JSON.stringify(data)}\`);
        return div;
    },
    target: document.body
});
    `);
    setChild(div, text);

    const example = createText2('Example: Async data fetching');
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