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

export const explainColumn = () => {
    const div = CreateNode('div');
    const header = CreateNode('h3');
    SetChild(div, header);
    Text(header, 'Column()');
    SetChild(div, header);

    const explain = createText2('Creates a vertical flex container for stacking elements.');
    SetChild(div, explain);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself',
        icon:'code'
    });

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
    const example = exambleBar({name:'Column()',guideText:`const column = Column('center',{children:[]});`,functions:{
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

export const _ColumnExample = () => {
    const div = CreateNode('div');
    const text = createText2(`
const buttons = [
    Button({ text: 'Top' }),
    Button({ text: 'Middle' }),
    Button({ text: 'Bottom' })
];

const col = Column('center', {
    children: buttons,
    callback: [() => alert(1), () => alert(2), () => alert(3)]
});
    `);
    SetChild(div, text);

    const example = createText2('Example: Vertical layout');
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