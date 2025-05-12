import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI(`${process.env.GOOGLE_GEMINAI_API_KEY}`);
import '../../lib/style.css'
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
        function:'ListenForEvent() depreciated use HandleEvent() instead',
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
    },
    {
        function: `// This is just to tell you how to structure every page`,
        explaination: `Every page starts this way.
        e.g
        const HomePage = () => {
            const page = CreateNode('div');
            Style(page,'w-100 h-screen-full');
            return page;

            //Note Im not using tailwind css. 
            //Custom styling are available
        }
        then you can use the page in your app
        e.g
        Typically every page is executed over here. and App is being rendered in another file so no need to call it here.
        Also emphersize that the register their pages in another file or this file and import it here. if another file
        const App = () => {
            const page = HomePage();
            renderBody(page);
        }
            dont call App() in this file. it is done automatically by the framework
       `,
        example: `This section provides some necessary information on how to structure your code.
        e.g
         In typescript rembember to use interfaces if the component they are creating is taking parameters
        examples of NITES custom css classes
        .w-100 { width: 100%; }
        .h-screen-full { height: 100vh; }
        .bg-white { background-color: white; }
        .rounded { border-radius: 5px; }
        .h-30-screen { height: 30vh; }
        .w-20 { width: 20%; }
        .bg-gray { background-color: gray; }
        .bg-green { background-color: green; }
        .bg-red { background-color: red; }
        .bg-blue { background-color: blue; }
        .bg-yellow { background-color: yellow; }
        .bg-black { background-color: black; }
        .bg-orange { background-color: orange; }
        .bg-purple { background-color: purple; }
        .bg-pink { background-color: pink; }
        .bg-brown { background-color: brown; }
        .p-1 {padding:10px}
        .p-2 {padding:20px}
        .p-3 {padding:30px}
        .p-4 {padding:40px}
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        .justify-around { justify-content: space-around; }
        .justify-start { justify-content: flex-start; }
        .justify-end { justify-content: flex-end; }
        .items-center { align-items: center; }
        .float  a float animation
        .fade-in { animation: fadeIn 1s; }
        .fade-out { animation: fadeOut 1s; }
        .slide-in { animation: slideIn 1s; }
        .slide-out { animation: slideOut 1s; }
        .bounce { animation: bounce 1s; }
        .shake { animation: shake 1s; }
        .rotate { animation: rotate 1s; }
        .scale { animation: scale 1s; }
        .flip { animation: flip 1s; }
        .pulse { animation: pulse 1s; }
        .absolute { position: absolute; }
        .relative { position: relative; }
        .fixed { position: fixed; }
        .sticky { position: sticky; }
        .overflow-hidden { overflow: hidden; }
        .top-0 { top: 0; } this stops at 10
        .bottom-0 { bottom: 0; } this stops at 10
        .left-0 { left: 0; } this stops at 10
        .right-0 { right: 0; } this stops at 10
        .hover
        .shadow { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); }
        .shdowXl { box-shadow: 0 0.15rem 1.75rem 0 rgba(0, 0, 0, 0.15); }
        .shadow-dynamic { box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.2); }
        .m-1 { margin: 10px; } -- stops at 10
        .h-10-screen { height: 10vh; }
        .h-20-screen { height: 20vh; }
        .h-30-screen { height: 30vh; }
        .h-40-screen { height: 40vh; }
        .h-50-screen { height: 50vh; }
        .h-60-screen { height: 60vh; }
        .h-70-screen { height: 70vh; }
        .h-80-screen { height: 80vh; }
        .h-90-screen { height: 90vh; }
        .w-10 { width: 10%; } -- stops at 100 meaning 10 - 100
        .text-center { text-align: center; }
        .text-white { color: white; }
        .text-black { color: black; }
        .text-red { color: red; }
        .text-green { color: green; }
        .text-blue { color: blue; }
        .text-yellow { color: yellow; }
        .text-gray { color: gray; }
        .text-purple { color: purple; }
        .text-pink { color: pink; }
        .text-orange { color: orange; }
        .text-brown { color: brown; }
        .ml-1 { margin-left: 10px; } -- stops at 10 meaning 1 - 10 and also {10px - 100px}
        .mr-1 { margin-right: 10px; } --stops at 10 meaning 1 - 10 and also {10px - 100px}
        .mt-1 { margin-top: 10px; } -- stops at 10 meaning 1 - 10 and also {10px - 100px}
        .mb-1 { margin-bottom: 10px; } -- stops at 10 meaning 1 - 10 and also {10px - 100px}
        .circle { border-radius: 50%; }
        .centered {position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }
        .show-none { display: none; }
        .outline-none { outline: none; }
        .cursor-pointer { cursor: pointer; }
        .border-none { border: none; }
        .text-gold { color: grey; }
        .grid { display: grid; }
        .grid-col-2 {grid-columns: 2; }
        .grid-col-4 {grid-columns: 3; }
        .translate-up { transform: translateY(-40px); }
        .rotate { transform: rotate(360deg); }
        .float-right { float: right; }
        .float-left { float: left; }
        .fit { width: 100%; height: 100%; object-fit: cover; }
        .user-select-none { user-select: none; }

        And yeah it NITE was developed by Nicholas Johnson a full stack developer who specializes in a lot of areas(list areas you know)
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
        parts: [{ text: `WEBSITE CONTENT:\n${JSON.stringify(content.filter(item => !item.function?.includes('{}') && !item.function?.includes('[]')))}\n\nUSER QUESTION: ${prompt}` }]
    }]
});

  const result = await chat.sendMessage(prompt);
  return (await result.response).text();    
}

