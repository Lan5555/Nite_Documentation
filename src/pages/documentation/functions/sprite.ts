import { Print,CreateNode, SetChild, Text, Vanilla } from "../../../../lib/state";
import { Button } from "../../../components/button";
import { prefersDark } from "../../../hooks/theme";
import { createText2 } from "../../homepage/home";

export const explainUseSpriteSheet = () => {
    const div = CreateNode('div');
    const header = CreateNode('h3');
    SetChild(div, header);
    Text(header, 'UseSpriteSheet()');
    SetChild(div, header);

    const explain = createText2('Creates animated sprite sheets for game development.');
    SetChild(div, explain);

    
         Vanilla(header,{
            color:prefersDark ? 'white' : 'dark'
        })
         Vanilla(explain,{
                 color:prefersDark ? 'white':''
        });

    const params = CreateNode('div');
    const paramHeader = CreateNode('h4');
    Text(paramHeader, 'Parameters:');
    SetChild(params, paramHeader);
    
    const paramList = CreateNode('ul');
    const param1 = CreateNode('li');
    Text(param1, 'spriteSrc: Image source URL');
    const param2 = CreateNode('li');
    Text(param2, 'placement: {width, height, columns, rows}');
    SetChild(paramList, param1);
    SetChild(paramList, param2);
    SetChild(params, paramList);
    SetChild(div, params);

    
     Vanilla(param1,{
       
        color:prefersDark ? 'white':''
    })
     Vanilla(param2,{
        color:prefersDark ? 'white' : 'dark'
    })
     

    const tryIt = Button({
        variant: 'contained',
        text: 'Try it yourself',
        icon:'code'
    });
    SetChild(div, tryIt);
    tryIt.onclick = () => {
        alert('Cant be rendered without actual sprite');
    }

    return div;
}

export const _useSpriteSheetExample = () => {
    const div = CreateNode('div');
    const code = createText2(`
const { canvas, createSprite } = UseSpriteSheet();

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
    SetChild(div, code);

    const demoLink = CreateNode('a');
    Text(demoLink, 'View Sprite Demo');
    Vanilla(demoLink, {
        display: 'block',
        marginTop: '10px',
        color: 'blue',
        textDecoration: 'underline'
    });
    SetChild(div, demoLink);

    return div;
}