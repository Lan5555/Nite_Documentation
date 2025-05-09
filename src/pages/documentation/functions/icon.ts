import { print,createNode, Text, setChild, AlertDialog, applyState, Column, FutureCreator, listenForEvent, removeClass, render, renderBody, renderInner, Row, Style, SwitchBar, Timer, useSpriteSheet, vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { createText2} from "../../homepage/home";

export const explianUseFontAwesomeIcon = () => {
    const div = createNode('div');
    const header = createNode('h3');
    setChild(div, header);
    Text(header, 'useFontAwesomeIcon()');
    setChild(div, header);

    const explain = createText2('Returns a Font Awesome icon component with specified classes.');
    setChild(div, explain);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself'
    });
    setChild(div, tryIt);
    const example = exambleBar({name:'useFontAwesomeIcon()',guideText:`const icon = useFontAwesomeIcon('fa fa-user');\n`,functions:{
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

    return div;
}

export const _UseFontAwesomeIconExample = () => {
    const div = createNode('div');
    const text = createText2(`
const icon = useFontAwesomeIcon({ iconStyle: 'fa fa-home' });
    `);
    setChild(div, text);

    const example = createText2('Example');
    setChild(div, example);

    const button = Button({
        variant:'contained',
        text:'Playground'
    });
    button.onclick = () => {
        
    }
    setChild(div, button);

    return div;
}
