import { Print,AlertDialog, ApplyState, Column, CreateNode, FutureCreator, ListenForEvent, RemoveClass, render, renderBody, RenderInner, Row, SetChild, Style, SwitchBar, Text, Timer, UseSpriteSheet, Vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { setCurrentPageIndex } from "../../../hooks/routestate";
import { prefersDark } from "../../../hooks/theme";
import { createText2 } from "../../homepage/home";

export const explainCreateClass = () => {
    const div = CreateNode('div');
    const header = CreateNode('h3');
    SetChild(div, header);
    Text(header, 'createClass()');
    SetChild(div, header);

    const explain = createText2('Dynamically generates CSS classes at runtime.');
    SetChild(div, explain);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself',
        icon:'code'
    });

    
        
         Vanilla(header,{
            color:prefersDark ? 'white' : 'dark'
        })
         Vanilla(explain,{
                 color:prefersDark ? 'white':''
        });
    
    const example = exambleBar({name:'CreateClass()',guideText:`const node = CreateNode('div');\nCreateClass('border-white',['border:white'])`,functions:{
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

export const _createClassExample = () => {
    const div = CreateNode('div');
    const text = createText2(`
CreateClass('red-text', [
    'color: red',
    'font-size: 2rem',
    'padding: 8px'
]);

const element = CreateNode('div');
Style(element, 'red-text');
    `);
    SetChild(div, text);

    const example = createText2('Example: Dynamic styling');
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