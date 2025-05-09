import { animate, createNode, route, setChild, setInner, Style, Text, vanilla, Watch } from "../../../lib/state"
import { useFontAwesomeIcon } from "../../components/icons";
import { createText, createText2, HomePage } from "../homepage/home";
import bg from '../../../public/nite.jpg';
import {nJToast} from '../../../lib/main';
import { Toast } from "../../components/toast";
import { MediaQuery } from "../../hooks/mediaquery";
import { Button } from '../../components/button'

export const GetStarted = (): HTMLElement => {
    const page = createNode('div') as HTMLElement;
    const desktop = window.matchMedia('(min-width:1024px)');
    const tablet = window.matchMedia('(min-width:542px) and (max-width:1024px)');
    const mobile = window.matchMedia('(max-width:600px)');

    vanilla(page, {
        flex: '1',
        marginTop: '60px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        //overflowY: 'auto'
    });

    const image = createNode('img') as HTMLImageElement;
    image.src = bg;
    Style(image, 'absolute top-5');
    vanilla(image, {
        width: '10%',
        left:'21rem'
    });
    setChild(page, image);

    const info = createNode('h1');
    Text(info, 'Get Started by Installing NITE');
    vanilla(info,{
        fontSize: mobile.matches ? '13pt':'15pt'
    })
    setChild(page, info);

    const subSidebar = (): HTMLElement => {
        const bar = createNode('div');
        Style(bar, 'shadow-dynamic w-20 p-1 rounded h-60-screen flex flex-col gap-3');
        vanilla(bar, {
            background: 'linear-gradient(to right,lightblue,lightblue,white)'
        });

        const header = createNode('h3');
        Text(header, 'Contents');
        setChild(bar, header);

        const items = ['Installing', 'Setting Up', 'Configuration', 'Finishing'];
        const icons = ['fa fa-computer', 'fa fa-gear', 'fa fa-dashboard', 'fa fa-check'];

        items.forEach((element: string, index: number) => {
            const holder = createNode('div');
            Style(holder, 'rounded shadow-dynamic bg-white flex justify-start items-center cursor-pointer');

            const text = createNode('p');
            Text(text, element);

            const sideIcons = useFontAwesomeIcon({ iconStyle: icons[index] });
            Style(sideIcons, 'ml-3');

            const sideIconsAndText = createNode('div');
            Style(sideIconsAndText, 'flex justify-center items-center gap-2');

            setChild(sideIconsAndText, sideIcons);
            setChild(sideIconsAndText, text);
            setChild(holder, sideIconsAndText);
            setChild(bar, holder);
            holder.addEventListener('click',() => handleClick(index));
        });
        function handleClick(index:number){
           switch(index){
            case 0:
                const bar1 = getDocument({id:'config1'});
                bar1?.scrollIntoView({behavior:'smooth'});
                break;
            case 1:
                const bar2 = getDocument({id:'config2'});
                bar2?.scrollIntoView({behavior:'smooth'});
                break;
            case 2:
                const bar3 = getDocument({id:'config3'});
                bar3?.scrollIntoView({behavior:'smooth'});
                break;
            case 3:
                const bar4 = getDocument({id:'config4'});
                bar4?.scrollIntoView({behavior:'smooth'});
                break;
            default:
                break;
           }
        }

        return bar;
    }

    const installProcessHolder = createNode('div');
    Style(installProcessHolder, 'w-100 flex');
    const subBar = subSidebar();
   
    //Watch media query
    const [media,setMedia, observe] = Watch('desktop');
    MediaQuery({
        output: (media) => {
            setMedia(media);
        }
    });
    observe(() => {
        if(desktop.matches){
            container.remove();
            setChild(installProcessHolder, subBar);
            setChild(installProcessHolder,container);
        }else{
            subBar.remove();
            vanilla(container,{
                width:'100%'
            });
        }
    })
    //
    const container = createNode('div');
    Style(container, 'flex justify-start w-70 p-2 flex-col hide-scroll-bar');
    vanilla(container, {
        overflowY: 'auto',
        maxHeight: mobile.matches ? '100vh':'70vh',
        overflowX: mobile.matches ? 'hidden' : '' // ✅ Enable vertical scrolling
    });
    setChild(installProcessHolder, container);


    if(desktop.matches){
        container.remove();
        setChild(installProcessHolder, subBar);
        setChild(installProcessHolder,container);
        vanilla(container,{
            width:'70%'
        });
        }else{
            vanilla(container,{
                width:'100%'
           });
    }


    const installBar1 = installBar({ text: 'npm i nj-library',page:page });
    const installBar2 = installBar({ text: 'npm install',page:page });
    

    setChild(container, installBar1);

    const details = createText2(
        `📦 Prerequisites:
- Node.js v16 or later
- Package manager (npm or yarn)

🚀 Quick Start:
1. Initialize your project: npm init -y
2. Install NITE core: npm i nj-library

💡 Notes:
- Works with JavaScript and TypeScript.
- TypeScript users can install typings below.

`
    );
    installBar1.id = 'config1';

    vanilla(details, {
        whiteSpace: 'pre-wrap',
        marginLeft: mobile.matches ? '':'4rem',
        fontSize:mobile.matches ? '10pt':''
    });
    const finalDetails1 = WrapWithStyle(details);

    setChild(container, finalDetails1);
    setChild(container, installBar2);
    const secondText = `Run npm install to install the required dependences.`;
    const details2 = createText2(secondText);
    vanilla(details2,{
        whiteSpace: 'pre-wrap',
        marginLeft: mobile.matches ? '':'4rem',
        fontSize:mobile.matches ? '10pt':''
    });
    installBar2.id = 'config2';
    const finalDetails2 = WrapWithStyle(details2);
    setChild(container,finalDetails2);

    const details3 = createText2(
        `🛠 TypeScript Configuration:
      To make the most of TypeScript, update your tsconfig.json file like this:
      
      {
        "compilerOptions": {
          "target": "ES6",
          "module": "ESNext",
          "moduleResolution": "node",
          "esModuleInterop": true,
          "strict": true,
          "skipLibCheck": true
        }
      }
      
      Make sure to include "src" in your include array if your code is in /src.
      
      🎨 Using FontAwesome:
      NITE comes with built-in support for FontAwesome icons.
      
      Install FontAwesome packages:
      npm i @fortawesome/fontawesome-free
      
      Then, you can reference any icon with:
      const icon = useFontAwesomeIcon({ iconStyle: 'fa fa-star' });
      
      Make sure to import the CSS globally if needed:
      import '@fortawesome/fontawesome-free/css/all.min.css';
      at main.js file located at layout.
      `
      );
      vanilla(details3, {
        whiteSpace: 'pre-wrap',
        marginLeft: mobile.matches ? '':'4rem',
        fontSize:mobile.matches ? '10pt':''
      });
      details3.id = 'config3';
      const finalDetails3 = WrapWithStyle(details3)
      setChild(container, finalDetails3);

      const details4 = createText2(`
            Finally copy the nj-library folder out of node_modules in case it does not install\n in the root of your project.\nENJOY!.
        `);
        const finalDetails4 = WrapWithStyle(details4);
        setChild(container,finalDetails4);
     details4.id = 'config4';
     vanilla(details4,{
        fontSize:mobile.matches ? '10pt':''
     });


     const details5 = createText2(`Remember:\nIf youre going to utitilize an added dependancy,\nMake sure to import it at layout/main.js
        \nExample:\n In other to utilize \nuseFontAwesomeIcon()\n
        You need to import the:\n
        import '@fortawesome/fontawesome-free/css/all.min.css';\n
        For it to function globally.
        `);
    const finalDetails5 = WrapWithStyle(details5);
     setChild(container,finalDetails5);
      

    setChild(page, installProcessHolder);

    return page;
}

interface Props {
    text?: string
    page:HTMLElement
    
}

function installBar({ text,page }: Props): HTMLElement {
    const textValue = text ?? 'some text';
    const installBar = createNode('div');
    const desktop = window.matchMedia('(min-width:1024px)');
    const tablet = window.matchMedia('(min-width:542px) and (max-width:1024px)');
    const mobile = window.matchMedia('(max-width:600px)');
    vanilla(installBar, {
        width: mobile.matches ? '100%' :'50%',
        padding: '10px',
        minHeight: '50px',
        height: 'auto',
        position: 'relative', // ensures absolute children are positioned correctly
        display: 'flex',
        alignItems: 'center',
        
    });
    
    Style(installBar, `rounded shadow-dynamic color${mobile.matches ? '':'ml-6'}`);

    const install = createNode('p');
    Text(install, text);
    setChild(installBar, install);
    Style(install, 'absolute left-7');
    vanilla(install,{
        fontSize:mobile.matches ? '10pt':''
    })

    const copyIcon = useFontAwesomeIcon({ iconStyle: 'fa fa-copy absolute top-1 right-2 cursor-pointer' });
    setChild(installBar, copyIcon);
    const bash = useFontAwesomeIcon({ iconStyle: 'fa fa-terminal absolute left-2 top-3 text-blue' });
    setChild(installBar, bash);
    copyIcon.addEventListener('click',()=>{
        navigator.clipboard.writeText(textValue).then(() => {
            Toast({text:'Copied Successfully',type:'success',page:page});
        });
    });
    return installBar;
}
function getDocument({id}:any){
    const doc = document.getElementById(id);
    return doc;
}

function WrapWithStyle(node:HTMLElement,height?:number):HTMLElement{
    const div = createNode('div');
    Style(div,'p-1 color rounded mt-2 mb-2');
    animate.fadeIn(div,0.5,false);
    setChild(div,node);
    vanilla(div,{
        height:`${height}px`
    });
    return div;
}

