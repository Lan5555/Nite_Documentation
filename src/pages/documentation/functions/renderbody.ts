import { Print,CreateNode, SetChild, Text, render, AlertDialog, ApplyState, Column, FutureCreator, ListenForEvent, RemoveClass, renderBody, RenderInner, Row, Style, SwitchBar, Timer, UseSpriteSheet, Vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { setCurrentPageIndex } from "../../../hooks/routestate";
import { createText2 } from "../../homepage/home";

export const explainRenderBody = () => {
    const div = CreateNode('div');
    const header = CreateNode('h3');
    SetChild(div, header);
    Text(header, 'renderBody()');
    SetChild(div, header);

    const explain = createText2('Appends elements to the body');
    SetChild(div, explain);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself'
    });
    const example = exambleBar({name:'renderBody()',guideText:`No guide available;`,functions:{
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
    SetChild(div, tryIt);

    return div;
}

export const _renderBodyExample = () => {
    const div = CreateNode('div');
    const text = createText2(`
function app() {
    const div = CreateNode('div');
    Text(div, 'Hello World');
    return div;
}

renderBody(app());
    `);
    SetChild(div, text);

    const example = createText2('Example');
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