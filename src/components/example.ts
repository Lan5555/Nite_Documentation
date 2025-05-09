import { animate, CreateNode, SetChild, Style, Text, Vanilla } from "../../lib/state";
import { setupAutoPairs } from "../hooks/code";
import { isOn, setIsOn } from "../hooks/overlayState";
import { WatchFunction } from "../hooks/watch";
import { createText, createText2, wrap } from "../pages/homepage/home";
import { Button } from "./button";
import { useFontAwesomeIcon } from "./icons";
import { Overlay } from "./overlay";
import { Toast } from "./toast";

interface Props {
    name: string;
    guideText?: string;
    logic?: HTMLElement;
    functions?: Record<string, Function>; // Your exposed helper functions
}

export const exambleBar = ({ name, guideText, logic, functions = {} }: Props) => {
    const barHolder = CreateNode('div');
    Style(barHolder, 'flex-container');

    const desktop = window.matchMedia('(min-width:1024px)');
    const mobile = window.matchMedia('(max-width:600px)');

    const bar = CreateNode('div');
    Style(bar, `${desktop.matches ? 'w-60' : 'w-100'} p-1 rounded shadowXl flex justify-center flex-col ${mobile.matches ? 'h-80-screen' : 'h-70-screen'} fixed top-10 bg-white gap-2`);
    Vanilla(bar, {
        borderLeft: '4px solid blue',
        borderRight: '4px solid blue',
        maxHeight: mobile.matches ? '90vh' : '70vh',
        overflowY: 'auto'
    });

    SetChild(barHolder, bar);

    const backbutton = useFontAwesomeIcon({ iconStyle: 'fa fa-close absolute top-3 right-2 cursor-pointer' });
    SetChild(bar, backbutton);
    backbutton.onclick = () => {
        setIsOn(!isOn());
        document.body.removeChild(barHolder);
    };

    const methodName = createText2( `${name}\nYour code must be relative\n to the function you are experimenting.`);
    Vanilla(methodName, {
        whiteSpace: 'pre-line',
        textAlign: 'center',
        fontSize: mobile.matches ? '10pt' : ''
    });
    SetChild(bar, wrap({ node: methodName }));

    const divHolder = CreateNode('div');
    Style(divHolder, `flex justify-center items-center gap-4 w-90 ${mobile.matches ? 'flex-col' : ''}`);

    const guide = CreateNode('div');
    Style(guide, 'w-50 h-20-screen rounded shadow-dynamic p-1');
    const guideTextValue = createText2(guideText ?? 'Nothing to see here');
    Vanilla(guide, {
        maxHeight: '30vh',
        overflow: 'auto',
        width: mobile.matches ? '90%' : '50%',
        height: mobile.matches ? '10vh' : '20vh'
    });
    SetChild(guide, guideTextValue);

    const textarea = CreateNode('textarea') as HTMLTextAreaElement;
    Style(textarea, 'w-70 outline-none border-none p-1 h-20-screen shadow-dynamic');
    Vanilla(textarea, {
        border: '3px solid white',
        backgroundColor: '#1e1e1e',
        color: 'white',
        maxHeight: '30vh',
        overflow: 'auto',
        width: mobile.matches ? '90%' : '70%',
        spellcheck: false,
        autocorrect: 'off',
        autocomplete: 'off',
        autocapitalize: 'off'
    });

    textarea.setAttribute('spellcheck', 'false');
    textarea.setAttribute('autocorrect', 'off');
    textarea.setAttribute('autocomplete', 'off');
    textarea.setAttribute('autocapitalize', 'off');

    SetChild(divHolder, guide);
    const trueText = setupAutoPairs(textarea);

    const listIcons = CreateNode('div');
    Style(listIcons, 'flex justify-center flex-col gap-2');
    const outputContent = CreateNode('div');

    const [clip,setCliboard] = WatchFunction<string>('');
    ['fa fa-paste', 'fa fa-copy', 'fa fa-redo'].forEach((element,index) => {
        const div = CreateNode('div');
        Style(div, 'bg-white shadowXl cursor-pointer');
        const icons = useFontAwesomeIcon({ iconStyle: element });
        SetChild(div, icons);
        SetChild(listIcons, div);
    
        div.addEventListener('click',()=>{
            if(index == 0){
                navigator.clipboard.readText().then((text) => {
                    setCliboard(text);
                });
                textarea.value = clip();
            }else if(index == 1){
                navigator.clipboard.writeText(textarea.value).then(()=>{
                    Toast({text:'Copied successfully',type:'success',page:document.body});
                });
            }else if(index == 2){
                textarea.value = '';
                outputContent.textContent = ''
            }
        })
    });

    const toolkit = CreateNode('div');
    Style(toolkit, 'flex gap-1 w-100');
    SetChild(toolkit, trueText);
    SetChild(toolkit, listIcons);
    SetChild(divHolder, toolkit);
    SetChild(bar, divHolder);

    const execute = Button({
        variant: 'contained',
        text: 'Execute'
    });
    SetChild(bar, execute);

    const [outputValue, setOutput, observe] = WatchFunction('');

    const outputSection = CreateNode('div');
    Style(outputSection, 'shadow w-100 h-20-screen overflow-y relative bottom-0 flex justify-center items-center flex-col');
    SetChild(bar, outputSection);

    const outputHeader = CreateNode('h5');
    Text(outputHeader, 'Output:');
    Style(outputHeader, 'absolute left-2 top-1');
    SetChild(outputSection, outputHeader);

    Style(outputContent, '');
    SetChild(outputSection, outputContent);

    observe(() => {
        outputContent.innerHTML = ''; // Clear previous
        const val:any = outputValue();
        if (val instanceof HTMLElement) {
            outputContent.appendChild(val);
        } else {
            const p = CreateNode('p');
            Text(p, val);
            Style(p, 'text-gray');
            outputContent.appendChild(p);
        }
    });

    execute.onclick = () => {
        const userCode = textarea.value;

        try {
            const context = { ...functions };
            const contextKeys = Object.keys(context);
            const contextValues = Object.values(context);

            const func = new Function(...contextKeys, `"use strict";\n${userCode}`);
            const result = func(...contextValues);

            setOutput(result ?? 'Code executed successfully, but returned nothing.');
        } catch (err) {
            setOutput(`Error: ${(err as Error).message}`);
        }
    };

    animate.slideInRight(bar, 0.5, false);

    return barHolder;
};
