import { Print,AlertDialog, ApplyState, Column, CreateNode, FutureCreator, ListenForEvent, RemoveClass, render, renderBody, RenderInner, Row, SetChild, Style, SwitchBar, Text, Timer, UseSpriteSheet, Vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { darkMode, observeMode } from "../../../hooks/mode";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { setCurrentPageIndex } from "../../../hooks/routestate";
import { prefersDark } from "../../../hooks/theme";
import { createText2 } from "../../homepage/home";

export const explianSetChild = () => {
    const div = CreateNode('div');
    const header = CreateNode('h3');
    SetChild(div, header);
    Text(header, 'SetChild()');
    SetChild(div, header);

    const explain = createText2('Appends one or more child nodes to a parent element with validation.');
    SetChild(div, explain);

    
         Vanilla(header,{
            color:prefersDark ? 'white' : 'black'
        })
         Vanilla(explain,{
                 color:prefersDark ? 'white':''
        });

        observeMode(() => {
        Vanilla(header,{
        color:darkMode() == 'dark' ? 'white' : 'black'
    })
     Vanilla(explain,{
             color:darkMode() == 'dark' ? 'white':''
    });
    })

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself',
        icon:'code'
    });
    SetChild(div, tryIt);
    const example = exambleBar({name:'SetChild()',guideText:`const container = CreateNode('div);\nconst p = CreateNode('p');\nText(p,'Sample Text');\nSetChild(container,p);`,functions:{
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

export const _SetChildExample = () => {
    const div = CreateNode('div');
    const text = createText2(`
const parent = CreateNode('div');
const child1 = CreateNode('span');
const child2 = CreateNode('span');

SetChild(parent, child1, child2); // Adds both children
    `);
    SetChild(div, text);

    const example = createText2('Example: Multiple child append');
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
