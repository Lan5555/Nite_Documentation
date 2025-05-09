import { print,createNode, Style, vanilla, setChild,Text, renderBody, Watch, Row, Column, useSpriteSheet, render, FutureCreator, renderInner, removeClass, route, Timer, applyState, listenForEvent, AlertDialog } from "../../../../lib/state";
import { createText2 } from "../../homepage/home";
import { Button } from "../../../components/button"
import { exambleBar } from "../../../components/example";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { SwitchBar } from "../../../components/switch";
import { useFontAwesomeIcon } from "../../../components/icons";

export const explainAnimate = () => {
    const div = createNode('div');
    const header = createNode('h3');
    Style(div,'ml-5');
    const head = createNode('h4');
    Text(head,'class:');
    vanilla(head,{
        fontSize:'16pt'
    })
    setChild(div,head);
    Text(header,'Animation');
    Style(header,'text-green font-bold');
    setChild(div,header);

    const explain = createText2('Animates HTMLElements');
    setChild(div,explain);

    const tryIt = Button({
        variant:'contained',
        text:'Try it yourself'
    });

    const example = exambleBar({name:'animate',guideText:`call the animate class\ne.g animate.fadeIn(node,duration,infinite)`,functions:{
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
    setChild(div,tryIt);
    return div
}
export const _AnimateExample = () => {
    const div = createNode('div');
    const text = createText2(`\n
        const bar = createNode('div');
        Style(bar,'w-40 h-30-sreen rounded shadowXl') // Style is used to apply inbuit styles from NITE
        animate.slideIn(bar,1,false);
        \n//The methods in the class Animation takes in the following parameters\n
        //(node,duration,infinite) where infitite:boolean
    `);
    vanilla(text,{
        color:'darkred'
    });
    //Style(text,'ml-6');
    const example = createText2('Example');
    vanilla(example,{
        fontSize:'14pt'
    });
    setChild(div,example);
    setChild(div,text);
    const button = Button({
        variant:'contained',
        text:'Playground'
    });
    button.onclick = () => {
        
    }
    setChild(div,button);
    return div;
}