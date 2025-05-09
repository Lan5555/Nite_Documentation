import { Print,CreateNode, ListenForEvent, RenderInner, SetChild, Text, Vanilla } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { createText2} from "../../homepage/home";

export const explainRenderInner = () => {
    const div = CreateNode('div');
    const header = CreateNode('h3');
    SetChild(div, header);
    Text(header, 'RenderInner()');
    SetChild(div, header);

    const explain = createText2('Specialized state manager for sprite positioning. Returns [value, setter].');
    SetChild(div, explain);

    const useCases = CreateNode('div');
    const useCaseHeader = CreateNode('h4');
    Text(useCaseHeader, 'Common Use Cases:');
    SetChild(useCases, useCaseHeader);
    
    const caseList = CreateNode('ul');
    const case1 = CreateNode('li');
    Text(case1, 'Game character movement');
    const case2 = CreateNode('li');
    Text(case2, 'Animated element positioning');
    SetChild(caseList, case1);
    SetChild(caseList, case2);
    SetChild(useCases, caseList);
    SetChild(div, useCases);

    return div;
}

export const _renderInnerExample = () => {
    const div = CreateNode('div');
    const code = createText2(`
const sprite = CreateNode('div');
Vanilla(sprite, { position: 'absolute' });

const [xPos, setXPos] = RenderInner(sprite, 0, 'x');

// Move sprite right 10% every click
ListenForEvent(document, 'click', () => {
    setXPos(xPos + 10);
});
    `);
    SetChild(div, code);

    const demoArea = CreateNode('div');
    Vanilla(demoArea, {
        position: 'relative',
        height: '100px',
        border: '1px dashed gray'
    });
    
    const demoSprite = CreateNode('div');
    Vanilla(demoSprite, {
        width: '20px',
        height: '20px',
        backgroundColor: 'red',
        position: 'absolute',
        transition:'0.5s ease-in-out'
    });
    
    const [demoX, setDemoX] = RenderInner(demoSprite, 0, 'x');
    
    const moveBtn = Button({
        text: 'Move Right'
    });
    ListenForEvent(moveBtn, 'click', () => {
        setDemoX(demoX + 10);
    });
    
    SetChild(demoArea, demoSprite);
    SetChild(div, demoArea);
    SetChild(div, moveBtn);

    return div;
}