import { Print,AlertDialog, ApplyState, Column, CreateNode, FutureCreator, ListenForEvent, RemoveClass, render, renderBody, RenderInner, Row, SetChild, Style, SwitchBar, Text, Timer, UseSpriteSheet, Vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { setCurrentPageIndex } from "../../../hooks/routestate";
import { createText2 } from "../../homepage/home";

export const explainFuture = () => {
    const div = CreateNode('div');
    const header = CreateNode('h3');
    SetChild(div, header);
    Text(header, 'FutureCreator()');
    SetChild(div, header);

    const explain = createText2('Handles async operations with loading states and error handling.');
    SetChild(div, explain);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself'
    });
    SetChild(div, tryIt);
    const example = exambleBar({name:'FutureCreator()',guideText:`const fetchData = () => fetch('/api/data').then(res => res.json());

FutureCreator({
    future: fetchData,
    suspense: () => CreateNode('div').textContent = 'Loading...',
    output: (data) => {
        const div = CreateNode('div');
        Text(div, \`Data: \${JSON.stringify(data)}\`);
        return div;
    },
    target: document.body
});`,functions:{
        CreateNode,
        Text,
        SetChild,
        Vanilla,
        Style,
        print,
        Watch,
        Button,
        renderBody,
        Row,
        Column,
        SwitchBar,
        useFontAwesomeIcon,
        UseSpriteSheet,
        render,
        FutureCreator,
        RenderInner,
        RemoveClass,
        Timer,
        ApplyState,
        ListenForEvent,AlertDialog
    }});
    tryIt.onclick = () => {
        setIsOn(!isOn());
        document.body.appendChild(Overlay());
        document.body.appendChild(example);
    }

    return div;
}

export const _futureExample = () => {
    const div = CreateNode('div');
    const text = createText2(`
const fetchData = () => fetch('/api/data').then(res => res.json());

FutureCreator({
    future: fetchData,
    suspense: () => CreateNode('div').textContent = 'Loading...',
    output: (data) => {
        const div = CreateNode('div');
        Text(div, \`Data: \${JSON.stringify(data)}\`);
        return div;
    },
    target: document.body
});
    `);
    SetChild(div, text);

    const example = createText2('Example: Async data fetching');
    SetChild(div, example);

    const button = Button({
        variant:'contained',
        text:'Playground'
    });
    button.onclick = () => {
        setCurrentPageIndex(3)
        
    }
    SetChild(div, button);

    return div;
}