import { Print,CreateNode, SetChild, Style, Text, Vanilla } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { createText2 } from "../../homepage/home";
import { SwitchBar } from "../../../components/switch";
import { Toast } from "../../../components/toast";

export const explainSwitchBar = () => {
    const div = CreateNode('div');
    const header = CreateNode('h3');
    SetChild(div, header);
    Text(header, 'SwitchBar()');
    SetChild(div, header);

    const explain = createText2('Creates customizable toggle switch component.');
    SetChild(div, explain);

    const propsTable = CreateNode('table');
    const headerRow = CreateNode('tr');
    const th1 = CreateNode('th');
    Text(th1, 'Prop');
    const th2 = CreateNode('th');
    Text(th2, 'Description');
    SetChild(headerRow, th1);
    SetChild(headerRow, th2);
    SetChild(propsTable, headerRow);

    // Add prop rows
    const addPropRow = (name: string, desc: string) => {
        const row = CreateNode('tr');
        const td1 = CreateNode('td');
        Text(td1, name);
        const td2 = CreateNode('td');
        Text(td2, desc);
        SetChild(row, td1);
        SetChild(row, td2);
        SetChild(propsTable, row);
    };

    addPropRow('activeColor', 'Color when switch is ON');
    addPropRow('inactiveColor', 'Color when switch is OFF');
    addPropRow('isClicked', 'Callback when state changes');
    addPropRow('inActiveTrackColor', 'Color when track is OFF');
    addPropRow('activeTrackColor', 'Color when track is ON');
    
    SetChild(div, propsTable);

    return div;
}

export const _SwitchBarExample = () => {
    const div = CreateNode('div');
    const code = createText2(`
const switch = SwitchBar({
    activeColor: 'green',
    inactiveColor: 'gray',
    activeTrackColor:'green',
    inActiveTrackColor:'brown',
    isClicked: (state) => {
        Toast(\`Switch is now \${state ? 'ON' : 'OFF'}\`);
    }
});
SetChild(page,switch);
    `);
    Style(div,'relative text-brown');
    SetChild(div, code);

    const liveDemo = CreateNode('div');
    Text(liveDemo, 'Live Demo:');
    SetChild(div, liveDemo);

    // Actual switch demo
    const demoSwitch = SwitchBar({
        activeColor: 'lightgrey',
        inactiveColor: 'white',
        activeTrackColor:'green',
        inActiveTrackColor:'brown',
        isClicked: (val: any) => Toast({text:`Switch is now ${val ? 'ON' : 'OFF'}`,page:document.body,type:'success'})
    });
    Vanilla(demoSwitch,{
        position:'absolute',
        bottom:'-2px'
    })
    SetChild(div, demoSwitch);

    return div;
}