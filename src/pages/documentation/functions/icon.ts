import { Print,CreateNode, Text, SetChild, AlertDialog, ApplyState, Column, FutureCreator, ListenForEvent, RemoveClass, render, renderBody, RenderInner, Row, Style, SwitchBar, Timer, UseSpriteSheet, Vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { setCurrentPageIndex } from "../../../hooks/routestate";
import { prefersDark } from "../../../hooks/theme";
import { createText2} from "../../homepage/home";

export const explianUseFontAwesomeIcon = () => {
    const div = CreateNode('div');
    const header = CreateNode('h3');
    SetChild(div, header);
    Text(header, 'UseFontAwesomeIcon()');
    SetChild(div, header);

    const explain = createText2('Returns a Font Awesome icon component with specified classes.');
    SetChild(div, explain);

    
         Vanilla(header,{
            color:prefersDark ? 'white' : 'dark'
        })
         Vanilla(explain,{
                 color:prefersDark ? 'white':''
        });

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself',
        icon:'code'
    });
    SetChild(div, tryIt);
    const example = exambleBar({name:'UseFontAwesomeIcon()',guideText:`const icon = UseFontAwesomeIcon('fa fa-user');\n`,functions:{
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

export const _UseFontAwesomeIconExample = () => {
    const div = CreateNode('div');
    const text = createText2(`
const icon = UseFontAwesomeIcon({ iconStyle: 'fa fa-home' });
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
