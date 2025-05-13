import { Print,CreateNode, Style, Vanilla, SetChild,Text, renderBody, Watch, Row, Column, UseSpriteSheet, render, FutureCreator, RenderInner, RemoveClass, route, Timer, ApplyState, ListenForEvent, AlertDialog } from "../../../../lib/state";
import { createText2 } from "../../homepage/home";
import { Button } from "../../../components/button"
import { exambleBar } from "../../../components/example";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { SwitchBar } from "../../../components/switch";
import { useFontAwesomeIcon } from "../../../components/icons";
import { setCurrentPageIndex } from "../../../hooks/routestate";
import { darkColor, prefersDark } from "../../../hooks/theme";
import { darkMode, observeMode } from "../../../hooks/mode";

export const explainAnimate = () => {
    const div = CreateNode('div');
    const header = CreateNode('h3');
    Style(div,'ml-5');
    const head = CreateNode('h4');
    Text(head,'class:');
    Vanilla(head,{
        fontSize:'16pt',
        color:prefersDark ? 'white':''
    })
    SetChild(div,head);
    Text(header,'Animation');
    Style(header,'text-green font-bold');
    SetChild(div,header);

    const explain = createText2('Animates HTMLElements');
    SetChild(div,explain);

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
        variant:'contained',
        text:'Try it yourself',
        icon:'code'
    });

    const example = exambleBar({name:'animate',guideText:`call the animate class\ne.g animate.fadeIn(node,duration,infinite)`,functions:{
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
    SetChild(div,tryIt);
    return div
}
export const _AnimateExample = () => {
    const div = CreateNode('div');
    const text = createText2(`\n
        const bar = CreateNode('div');
        Style(bar,'w-40 h-30-sreen rounded shadowXl') // Style is used to apply inbuit styles from NITE
        animate.slideIn(bar,1,false);
        \n//The methods in the class Animation takes in the following parameters\n
        //(node,duration,infinite) where infitite:boolean
    `);
    Vanilla(text,{
        color:'darkred'
    });
    //Style(text,'ml-6');
    const example = createText2('Example');
    SetChild(div,example);
    SetChild(div,text);
    const button = Button({
        variant:'contained',
        text:'Playground'
    });
    button.onclick = () => {
        setCurrentPageIndex(3)
    }
    SetChild(div,button);
    return div;
}