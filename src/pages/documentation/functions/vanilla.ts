import { Print,CreateNode, SetChild, Vanilla ,Text, AlertDialog, ApplyState, Column, FutureCreator, ListenForEvent, RemoveClass, render, renderBody, RenderInner, Row, Style, SwitchBar, Timer, UseSpriteSheet, Watch} from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { setCurrentPageIndex } from "../../../hooks/routestate";
import { createText2 } from "../../homepage/home";

export const explianVanilla = () => {
    const div = CreateNode('div');
    const header = CreateNode('h3');
    SetChild(div, header);
    Text(header, 'vanilla()');
    SetChild(div, header);

    const explain = createText2('Applies inline styles to an element.');
    SetChild(div, explain);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself'
    });
    SetChild(div, tryIt);
    const example = exambleBar({name:'Vanilla()',guideText:`const page = CreateNode('div');\nconst styles = {width:'30%',height:'100px'}\nVanilla(page,{...styles});`,functions:{
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

export const _VanillaExample = () => {
    const div = CreateNode('div');
    const text = createText2(`
const element = CreateNode('div');
Vanilla(element, { color: 'red', fontSize: '16px' });
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
