import { Print,AlertDialog, ApplyState, Column, CreateNode, FutureCreator, ListenForEvent, RemoveClass, render, renderBody, RenderInner, Row, SetChild,Style,SwitchBar,Text, Timer, UseSpriteSheet, Vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { darkMode, observeMode } from "../../../hooks/mode";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { setCurrentPageIndex } from "../../../hooks/routestate";
import { prefersDark } from "../../../hooks/theme";
import { createText2 } from "../../homepage/home";

export const explianButton = () => {
    const div = CreateNode('div');
    const header = CreateNode('h3');
    SetChild(div, header);
    Text(header, 'Button()');
    SetChild(div, header);
    

    const explain = createText2('Creates a button element with specified options.');
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
    const example = exambleBar({name:'Button()',guideText:`const button = Button({\n
        variant:'contained',
        text:'This  is just a test',
        icon:'code', // icon is optional
        });\nreturn button`,functions:{
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

export const _ButtonExample = () => {
    const div = CreateNode('div');
    const text = createText2(`
const button = Button({ variant: 'contained', text: 'Click me', icon: 'code' // icon is optional});
    `);
    
    SetChild(div, text);

    const example = createText2('Example');
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
