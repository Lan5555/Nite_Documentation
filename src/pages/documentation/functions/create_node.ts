import { createNode, print, renderBody, setChild, Style, Text, vanilla, Watch } from "../../../../lib/state"
import { Button } from "../../../components/button";
import { exambleBar } from "../../../components/example";
import { Overlay } from "../../../components/overlay";
import { isOn, setIsOn } from "../../../hooks/overlayState";
import { createText2 } from "../../homepage/home";
import { example } from "../docs";

export const explianCreateNode = () => {
    
    const div = createNode('div');
    const header = createNode('h3');
    Style(div,'ml-3');
    const head = createNode('h4');
    Text(head,'Function:');
    vanilla(head,{
        fontSize:'12pt'
    })
    setChild(div,head);
    Text(header,'createNode()');
    Style(header,'text-green font-bold');
    setChild(div,header);

    const explain = createText2('Creates a new HTML element and returns type => HTMLElement');
    setChild(div,explain);

    const tryIt = Button({
        variant:'contained',
        text:'Try it yourself'
    });
    setChild(div,tryIt);
    // const helpers = {
    //     createNode : (name:string) => HTMLElement
    // }
    const example = exambleBar({name:'createNode()',guideText:`const node = createNode('div');`,functions:{
        createNode,
        Text,
        setChild,
        vanilla,
        Style,
        print,
        Watch,
        Button,
        renderBody
    }});
    tryIt.onclick = () => {
        setIsOn(!isOn());
        document.body.appendChild(Overlay());
        document.body.appendChild(example);
        
    }
    return div
}
export const _CreateNodeExample = () => {
    const div = createNode('div');
    const text = createText2(`\nconst node = createNode('div');\n
        //If you're using typescript\n
        const node = createNode('div') as HTMLElement;\n
    `);
    vanilla(text,{
        color:'darkred'
    });
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