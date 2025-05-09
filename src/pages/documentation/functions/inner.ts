import { print,createNode, listenForEvent, renderInner, setChild, Text, vanilla } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { createText2} from "../../homepage/home";

export const explainRenderInner = () => {
    const div = createNode('div');
    const header = createNode('h3');
    setChild(div, header);
    Text(header, 'renderInner()');
    setChild(div, header);

    const explain = createText2('Specialized state manager for sprite positioning. Returns [value, setter].');
    setChild(div, explain);

    const useCases = createNode('div');
    const useCaseHeader = createNode('h4');
    Text(useCaseHeader, 'Common Use Cases:');
    setChild(useCases, useCaseHeader);
    
    const caseList = createNode('ul');
    const case1 = createNode('li');
    Text(case1, 'Game character movement');
    const case2 = createNode('li');
    Text(case2, 'Animated element positioning');
    setChild(caseList, case1);
    setChild(caseList, case2);
    setChild(useCases, caseList);
    setChild(div, useCases);

    return div;
}

export const _renderInnerExample = () => {
    const div = createNode('div');
    const code = createText2(`
const sprite = createNode('div');
vanilla(sprite, { position: 'absolute' });

const [xPos, setXPos] = renderInner(sprite, 0, 'x');

// Move sprite right 10% every click
listenForEvent(document, 'click', () => {
    setXPos(xPos + 10);
});
    `);
    setChild(div, code);

    const demoArea = createNode('div');
    vanilla(demoArea, {
        position: 'relative',
        height: '100px',
        border: '1px dashed gray'
    });
    
    const demoSprite = createNode('div');
    vanilla(demoSprite, {
        width: '20px',
        height: '20px',
        backgroundColor: 'red',
        position: 'absolute',
        transition:'0.5s ease-in-out'
    });
    
    const [demoX, setDemoX] = renderInner(demoSprite, 0, 'x');
    
    const moveBtn = Button({
        text: 'Move Right'
    });
    listenForEvent(moveBtn, 'click', () => {
        setDemoX(demoX + 10);
    });
    
    setChild(demoArea, demoSprite);
    setChild(div, demoArea);
    setChild(div, moveBtn);

    return div;
}