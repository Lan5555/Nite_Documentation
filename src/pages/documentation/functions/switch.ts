import { print,createNode, setChild, Style, Text, vanilla } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { createText2 } from "../../homepage/home";
import { SwitchBar } from "../../../components/switch";
import { Toast } from "../../../components/toast";

export const explainSwitchBar = () => {
    const div = createNode('div');
    const header = createNode('h3');
    setChild(div, header);
    Text(header, 'SwitchBar()');
    setChild(div, header);

    const explain = createText2('Creates customizable toggle switch component.');
    setChild(div, explain);

    const propsTable = createNode('table');
    const headerRow = createNode('tr');
    const th1 = createNode('th');
    Text(th1, 'Prop');
    const th2 = createNode('th');
    Text(th2, 'Description');
    setChild(headerRow, th1);
    setChild(headerRow, th2);
    setChild(propsTable, headerRow);

    // Add prop rows
    const addPropRow = (name: string, desc: string) => {
        const row = createNode('tr');
        const td1 = createNode('td');
        Text(td1, name);
        const td2 = createNode('td');
        Text(td2, desc);
        setChild(row, td1);
        setChild(row, td2);
        setChild(propsTable, row);
    };

    addPropRow('activeColor', 'Color when switch is ON');
    addPropRow('inactiveColor', 'Color when switch is OFF');
    addPropRow('isClicked', 'Callback when state changes');
    addPropRow('inActiveTrackColor', 'Color when track is OFF');
    addPropRow('activeTrackColor', 'Color when track is ON');
    
    setChild(div, propsTable);

    return div;
}

export const _SwitchBarExample = () => {
    const div = createNode('div');
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
setChild(page,switch);
    `);
    Style(div,'relative text-brown');
    setChild(div, code);

    const liveDemo = createNode('div');
    Text(liveDemo, 'Live Demo:');
    setChild(div, liveDemo);

    // Actual switch demo
    const demoSwitch = SwitchBar({
        activeColor: 'lightgrey',
        inactiveColor: 'white',
        activeTrackColor:'green',
        inActiveTrackColor:'brown',
        isClicked: (val: any) => Toast({text:`Switch is now ${val ? 'ON' : 'OFF'}`,page:document.body,type:'success'})
    });
    vanilla(demoSwitch,{
        position:'absolute',
        bottom:'-2px'
    })
    setChild(div, demoSwitch);

    return div;
}