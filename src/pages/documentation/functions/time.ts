import { Print,AlertDialog, ApplyState, Column, CreateNode, FutureCreator, ListenForEvent, RemoveClass, render, renderBody, RenderInner, Row, SetChild, Style, SwitchBar, Text, Timer, UseSpriteSheet, Vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { setCurrentPageIndex } from "../../../hooks/routestate";
import { createText2 } from "../../homepage/home";

export const explainTimer = () => {
    const div = CreateNode('div');
    const header = CreateNode('h3');
    SetChild(div, header);
    Text(header, 'Timer()');
    SetChild(div, header);

    const explain = createText2('Creates timers (timeout or interval) with automatic cleanup.');
    SetChild(div, explain);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself'
    });
    SetChild(div, tryIt);
    const example = exambleBar({name:'Timer()',guideText:`Timer({ Duration: 1000 }, "single", () => {
    console.log("This runs after 1 second");
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

export const _TimerExample = () => {
    const div = CreateNode('div');
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
    SetChild(div, text);

    const example = createText2('Example: Timers');
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