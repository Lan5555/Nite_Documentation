import {Print, AlertDialog, ApplyState, Column, CreateNode, FutureCreator, ListenForEvent, RemoveClass, render, renderBody, RenderInner, Row, SetChild, Style, SwitchBar, Text, Timer, UseSpriteSheet, Vanilla, Watch } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { useFontAwesomeIcon } from "../../../components/icons";
import { Overlay } from "../../../components/overlay";
import { setIsOn, isOn } from "../../../hooks/overlayState";
import { setCurrentPageIndex } from "../../../hooks/routestate";
import { prefersDark } from "../../../hooks/theme";
import { createText2 } from "../../homepage/home";

export const explainWatch = () => {
    const div = CreateNode('div');
    const header = CreateNode('h3');
    SetChild(div, header);
    Text(header, 'Watch()');
    SetChild(div, header);

    const explain = createText2('Creates reactive state with observer pattern. Returns [getter, setter, observe] tuple.');
    SetChild(div, explain);

    
        
         Vanilla(header,{
            color:prefersDark ? 'white' : 'dark'
        })
         Vanilla(explain,{
                 color:prefersDark ? 'white':''
        });

    const benefits = CreateNode('ul');
    const li1 = CreateNode('li');
    Text(li1, 'Reactive state management');
    const li2 = CreateNode('li');
    Text(li2, 'Automatic dependency tracking');
    SetChild(benefits, li1);
    SetChild(benefits, li2);
    SetChild(div, benefits);

    
     Vanilla(li1,{
       
        color:prefersDark ? 'white':''
    })
     Vanilla(li2,{
        color:prefersDark ? 'white' : 'dark'
    })
    

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself',
        icon:'code'
    });
    SetChild(div, tryIt);
    const example = exambleBar({name:'Watch()',guideText:`const [count, setCount, observe] = Watch(0);

// Observer will run when count changes
observe(() => {
    print(\`Count changed to: \${count()}\`);
});

// Update the value
setCount(5);  // Logs: "Count changed to: 5"`,functions:{
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

export const _WatchExample = () => {
    const div = CreateNode('div');
    const code = createText2(`
const [count, setCount, observe] = Watch(0);

// Observer will run when count changes
observe(() => {
    print(\`Count changed to: \${count()}\`);
});

// Update the value
setCount(5);  // Logs: "Count changed to: 5"
    `);
    SetChild(div, code);

    const notes = createText2('Note: Works well with DOM updates in render cycles');
    SetChild(div, notes);

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