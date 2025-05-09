import { print,createNode, setChild, Text, vanilla } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { createText2 } from "../../homepage/home";

export const explainUseSpriteSheet = () => {
    const div = createNode('div');
    const header = createNode('h3');
    setChild(div, header);
    Text(header, 'useSpriteSheet()');
    setChild(div, header);

    const explain = createText2('Creates animated sprite sheets for game development.');
    setChild(div, explain);

    const params = createNode('div');
    const paramHeader = createNode('h4');
    Text(paramHeader, 'Parameters:');
    setChild(params, paramHeader);
    
    const paramList = createNode('ul');
    const param1 = createNode('li');
    Text(param1, 'spriteSrc: Image source URL');
    const param2 = createNode('li');
    Text(param2, 'placement: {width, height, columns, rows}');
    setChild(paramList, param1);
    setChild(paramList, param2);
    setChild(params, paramList);
    setChild(div, params);

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself'
    });
    setChild(div, tryIt);
    tryIt.onclick = () => {
        alert('Cant be rendered without actual sprite');
    }

    return div;
}

export const _useSpriteSheetExample = () => {
    const div = createNode('div');
    const code = createText2(`
const { canvas, createSprite } = useSpriteSheet();

createSprite({
    spriteSrc: '/sprites/character.png',
    placement: {
        width: 64,
        height: 64,
        columns: 4,
        rows: 2
    },
    time: 100 // ms between frames
});

document.body.appendChild(canvas);
    `);
    setChild(div, code);

    const demoLink = createNode('a');
    Text(demoLink, 'View Sprite Demo');
    vanilla(demoLink, {
        display: 'block',
        marginTop: '10px',
        color: 'blue',
        textDecoration: 'underline'
    });
    setChild(div, demoLink);

    return div;
}