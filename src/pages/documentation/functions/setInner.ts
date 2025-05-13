import { Print,AlertDialog, ApplyState, Column, CreateNode, FutureCreator, ListenForEvent, RemoveClass, render, renderBody, RenderInner, Row, SetChild, Style, SwitchBar, Text, Timer, UseSpriteSheet, Vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { setCurrentPageIndex } from "../../../hooks/routestate";
import { prefersDark } from "../../../hooks/theme";
import { createText2 } from "../../homepage/home";

export const explainSetInner = () => {
    const div = CreateNode('div');
    const header = CreateNode('h3');
    SetChild(div, header);
    Text(header, 'SetInner()');
    SetChild(div, header);

    const explain = createText2('Sets HTML content of an element (unlike Text() which escapes content).');
    SetChild(div, explain);

    
         Vanilla(header,{
            color:prefersDark ? 'white' : 'dark'
        })
         Vanilla(explain,{
                 color:prefersDark ? 'white':''
        });

    const warning = CreateNode('div');
    Style(warning, 'warning-box');
    Text(warning, '⚠️ Warning: Potential XSS risk with user-provided content');
    SetChild(div, warning);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself',
        icon:'code'
    });
    SetChild(div, tryIt);
    const example = exambleBar({name:'SetInner()',guideText:`const node = CreateNode('p');\nSetInner(p,'Hi');`,functions:{
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

export const _setInnerExample = () => {
    const div = CreateNode('div');
    const text = createText2(`
const container = CreateNode('div');
SetInner(container, '<strong>Bold HTML</strong>');
    `);
    SetChild(div, text);

    const example = createText2('Example: HTML injection');
    SetChild(div, example);

    const button = Button({
        variant:'contained',
        text:'Playground',
        icon:'code'
    });
    button.onclick = () => {
        setCurrentPageIndex(3)
        
    }
    SetChild(div, button);

    return div;
}