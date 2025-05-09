import { Print,CreateNode, SetChild, Text, ListenForEvent, AlertDialog, ApplyState, Column, FutureCreator, RemoveClass, render, renderBody, RenderInner, Row, Style, SwitchBar, Timer, UseSpriteSheet, Vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { setCurrentPageIndex } from "../../../hooks/routestate";
import { createText2 } from "../../homepage/home";

export const explainListenForEvent = () => {
    const div = CreateNode('div');
    const header = CreateNode('h3');
    SetChild(div, header);
    Text(header, 'ListenForEvent()');
    SetChild(div, header);

    const explain = createText2('Attaches event listeners to DOM elements.');
    SetChild(div, explain);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself'
    });
    SetChild(div, tryIt);
    const example = exambleBar({name:'ListenForEvent()',guideText:`const node = CreateNode('div');\nListenForEvent(node,'click',()=>alert('working'))`,functions:{
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

export const _listenForEventExample = () => {
    const div = CreateNode('div');
    const text = createText2(`
const button = CreateNode('button');
Text(button, 'Click Me');

ListenForEvent(button, 'click', () => {
    alert('Button clicked!');
});
    `);
    SetChild(div, text);

    const example = createText2('Example: Click handler');
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