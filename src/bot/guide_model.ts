import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI(`${process.env.GOOGLE_GEMINAI_API_KEY}`);
//import { Print,CreateNode, Style, Vanilla, SetChild,Text, renderBody, Watch, Row, Column, UseSpriteSheet, render, FutureCreator, RenderInner, RemoveClass, route, Timer, ApplyState, ListenForEvent, AlertDialog } from "../../../../lib/state";

interface FunctionContent {
    function: string;
    explaination: string;   
    example: string;
}


const content:FunctionContent[] = [
    {
        function:'CreateNode()',
        explaination:'Creates a new HTML element',
        example:`const div = createNode('div')\n
        const span = createNode('span')\n
        const p = createNode('p')\n
        const h1 = createNode('h1')\nc
        onst h2 = createNode('h2')\n
        const h3 = createNode('h3')\n
        const img = createNode('img')`
    },
    {
        function:'Text()',
        explaination:'Adds text to node',
        example:`
        const node = CreateNode('div');
        Text(node, 'Hello World');
        const node2 = CreateNode('p');
        Text(node2, 'This is a paragraph');`
    },
    {
        function:'SetChild()',
        explaination:'Sets child of a node',
        example:`
        const parent = CreateNode('div');
        const child = CreateNode('span');
        SetChild(parent, child);`
    },
    {
        function:'Style()',
        explaination:'Applies classlists to a node',
        example:`
        const node = CreateNode('div');
        Style(node, 'bg-white rounded h-30-screen w-20');`
    },
    {
        function:'Vanilla()',
        explaination:'Applies styles to a node',
        example:`
        const node = CreateNode('div');
        Vanilla(node, { backgroundColor: 'red', color: 'white' });`
    },
    {
        function:'renderBody()',
        explaination:'Renders the body of the document',
        example:`
        const node = CreateNode('div');
        renderBody(node);`
    },
    {
        function:'Watch()',
        explaination:'Watches for changes in a variable',
        example:`
        const [value, setValue,observe] = Watch('myVariable');
        setValue('new value');
        
    const [count, setCount, observe] = Watch(0);\n
    const value = CreateNode('h1');\n
    Text(value,count());\n
    const button = Button({\n
    variant:'contained',\n
    text:'Increment Count'\n
    });\n
    observe(() => {\n
     Text(value, count());\n
    });\n
    button.addEventListener('click',() => {\n
    setCount(count() + 1);\n
    });\n
    renderBody(value);
    Can also be used in typescript
        `
    },
    {
        function:'Row()',
        explaination:'Creates a row layout',
        example:`
        const row = Row('space-between',{ children: [child1, child2] });`
    },
    {
        function:'Column()',
        explaination:'Creates a column layout',
        example:`
        const column = Column('center',{ children: [child1, child2] });`
    },
    {
        function:'UseSpriteSheet()',
        explaination:'Uses a sprite sheet for animations',
        example:`
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
    `
    },
    {
        function:'render()',
        explaination:'Renders an element to the DOM',
        example:`
        function App() {
        const div = CreateNode('div');
        Text(div, 'Hello World');
        return div;
        }

        Render(App, document.getElementById('root'));
    `
    },
    {
        function:'FutureCreator()',
        explaination:'Creates a future object for async operations',
        example:`
        const fetchData = () => fetch('/api/data').then(res => res.json());

        FutureCreator({
        future: fetchData,
        suspense: () => CreateNode('div').textContent = 'Loading...',
        output: (data) => {
        const div = CreateNode('div');
        Text(div, \`Data: \${JSON.stringify(data)}\`);
        return div;
        },
         target: document.body
        });`
    },
    {
        function:'RenderInner()',
        explaination:'Specialized state manager for sprite positioning. Returns [value, setter]. used for game development.',
        example:`
        const sprite = CreateNode('div');
        Vanilla(sprite, { position: 'absolute' });

        const [xPos, setXPos] = RenderInner(sprite, 0, 'x');

        // Move sprite right 10% every click
        ListenForEvent(document, 'click', () => {
        setXPos(xPos + 10);
        });`
    },
    {
        function:'RemoveClass()',
        explaination:'Removes a class from a node',
        example:`
        const node = CreateNode('div');
        Style(node, 'bg-white rounded h-30-screen w-20');
        RemoveClass(node, 'bg-white');
        `
    },
    {
        function:'Timer()',
        explaination:'Creates timers (timeout or interval) with automatic cleanup',
        example:`
        // One-time timeout
        Timer({ Duration: 1000 }, "single", () => {
    c   onsole.log("This runs after 1 second");
        });

        // Repeating interval
        const stopInterval = Timer({ Duration: 2000 }, "constant", () => {
         console.log("This runs every 2 seconds");
         });

        // Later stop the interval:
        stopInterval();
    
        `
    },
    {
        function:'ApplyState()',
        explaination:' Manages component state but depeciated use Watch() instead',
        example:`
       onst [count, setCount] = ApplyState(0);
        const button = CreateNode('button');
        Text(button, \`Count: \${count}\`);
        button.addEventListener('click', () => setCount(count + 1));
        `
    },
    {
        function:'ListenForEvent()',
        explaination:'Listens for an event on a node',
        example:`
        const button = CreateNode('button');
        Text(button, 'Click me');
        ListenForEvent(button, 'click', () => {
            console.log('Button clicked');
        });
        `
    },
    {
        function:'AlertDialog()',
        explaination:'Creates an alert dialog',
        example:`
        AlertDialog({
            icon: //Takes in a font awesome icon,
            message: 'This is an alert message',
            page: // CreateNode('div'), can be any node,
        });
        `
    },
    {
        function:'SwitchBar()',
        explaination:'Creates a switch bar for toggling between options',
        example:`
        const switch = SwitchBar({
    activeColor: 'green',
    inactiveColor: 'gray',
    activeTrackColor:'green',
    inActiveTrackColor:'brown',
    isClicked: (state) => {
        Toast(\`Switch is now \${state ? 'ON' : 'OFF'}\`);
    }
    });
    SetChild(page,switch);`
    },
    {
        function:'route()',
        explaination:'Routes to a different page',
        example:`
        const homePage = CreateNode('div');
    Text(homePage, 'Home Page');

    const aboutPage = CreateNode('div');
    Text(aboutPage, 'About Page');

    route.register('home', homePage);
    route.register('about', aboutPage);
    route.start()

    // Navigate between pages
    route.move(homePage, aboutPage, 'about');
        `
    },
    {
        function:'Print()',
        explaination:'Prints a message to the console',
        example:`
        Print('Hello World');
        `
    },{
        function:'Button()',
        explaination:'Creates a Nite button',
        example:`
        const button = Button({
            variant: 'contained',
            text: 'Click me'
        });
        `
    },
    {
        function:'UseFontAwesomeIcon()',
        explaination:'Uses Font Awesome icons',
        example:`
        const icon = UseFontAwesomeIcon('fa-solid fa-user');
        `
    },
    {
        function:'Animate',
        explaination:'Animates HTMLElements',
        example:`
        call the animate class
        e.g animate.fadeIn(node,duration,infinite)
        `
    }
    
    
]

export async function analyzeContent(prompt: any) {
  const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash-preview-04-17",
    systemInstruction: "You're a helpful assistant that answers questions about a specific website and Generates code using the functions or rules provided and also chats with the user by remembering what you said previousl, you can give prompt in typescript or javascript. Be concise and accurate."
  });

const chat = model.startChat({
    history: [{
        role: "user",
        parts: [{ text: `WEBSITE CONTENT:\n${JSON.stringify(content.filter(item => !item.function.includes('{}') && !item.function.includes('[]')))}\n\nUSER QUESTION: ${prompt}` }]
    }]
});

  const result = await chat.sendMessage(prompt);
  return (await result.response).text();    
}

