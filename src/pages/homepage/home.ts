import { animate, createNode, print, route, setChild, setInner, Style, Text, vanilla, Watch } from "../../../lib/state";
import { AppBar } from "../../components/appbar";
import { useFontAwesomeIcon } from "../../components/icons";
import { Holder } from "../../hooks/holder";
import { MediaQuery } from "../../hooks/mediaquery";
import jetImage from './assets/rocket.png';
import { Button } from "../../components/button";
import { Avatar } from "../../components/avatar";
import java from '../../../public/icons/java.png';
import js from '../../../public/icons/js.png';
import speed from '../../../public/icons/rocket.png';
import code from '../../../public/icons/code.png';
import bg from '../../../public/nite.jpg';
import logoVideo from '../../../public/logo.gif';
import { GetStarted } from "../get_started/start";
import { Toast } from "../../components/toast";
import Prism from 'prismjs'

import { WatchFunction } from "../../hooks/watch";
import { Documentation } from "../documentation/docs";
import { isMenuClicked, observeMenu, setMenuClicked } from "../../hooks/menuState";
import { createClass } from "../../components/class";
import { DropDown } from "../../components/dropdown";
import { back, open, searchInput, setIndex, setOpen } from "../../hooks/dropdownstate";
import { setCurrentPageIndex, observe1, currentPageIndex} from "../../hooks/routestate";
import { observerMovement } from "../../hooks/observer";
import { PlayGround } from "../playground/playground";
import { About } from "../about/about";


export const HomePage = (): HTMLElement => {

    const page = createNode('div');
    const desktop = window.matchMedia('(min-width:1024px)');
    const tablet = window.matchMedia('(min-width:542px) and (max-width:1024px)');
    const mobile = window.matchMedia('(max-width:600px)');
    const [mediaQuery, setMedia, observe]: any = Watch('desktop');
    const [prevIndex, setPrevIndex, observe2] = WatchFunction<string>('Homepage');
    

    MediaQuery({
        output: (media) => {
            setMedia(media);
        }
    });

    Style(page, 'w-100 flex flex-col overflow-hidden');
    
   
    const appBar = AppBar({
        title: 'NITE',
        leading: isMenuClicked() ? 'fa fa-close':'fa fa-bars cursor-pointer btn-hover',
        actions: ['fa fa-bell cursor-pointer btn-hover', 'fa fa-user cursor-pointer btn-hover'],
        navigationclick:(index) => storeIndex(index),
        
    });
    
    setChild(page, appBar);

    //storeindexes
    function storeIndex(index:number){
        setCurrentPageIndex(index);
    }

    //sidebar
        const sidebar = createNode('div');
        vanilla(sidebar,{
            position:'fixed',
            top:'0',
            right: isMenuClicked() ? '0' : '-400px',
            width:'60%',
            height:'100vh',
            zIndex:'200',
            backgroundColor:'white'
        });
        Style(sidebar,'shadow-dynamic transition relative flex justify-start gap-2 p-1 flex-col hide-bar');
        const title = createNode('h4');
        Text(title,'Navigation');
       const _title = wrap({node:title});
        Style(title,'opacity-half');
        setChild(sidebar,_title);
        const sideIcons = ['fa fa-home opacity-half', 'fa fa-book opacity-half', 'fa fa-wallet opacity-half', 'fa fa-user opacity-half'];
        ['Home','Documentation','Installation','Playground','About'].forEach((element:string,index:number) => {
            const div = createNode('div');
            Style(div,'flex justify-between w-100 btn-hover cursor-pointer');
            vanilla(div,{
                alignItems:'center'
            })
            const anchor = createNode('a');
            Text(anchor,element);
            const icon = useFontAwesomeIcon({iconStyle:sideIcons[index]});
            
            setChild(div,anchor);
            setChild(div,icon);
            setChild(sidebar,div);

            div.addEventListener('click',()=>{
                setCurrentPageIndex(index);
                if(index != 1){
                    setIndex(1);
                    back.click();
                }
                setMenuClicked(!isMenuClicked());
            });
            
        });
       
        const title2 = createNode('h4');
        Style(title2,'opacity-half');
        Text(title2,'Installation');
        const _title2 = wrap({node:title2});
        setChild(sidebar,_title2);

        const items = ['Installing', 'Setting Up', 'Configuration', 'Finishing up'];
        const icons2 = ['fa fa-computer opacity-half', 'fa fa-gear opacity-half', 'fa fa-dashboard opacity-half', 'fa fa-check opacity-half'];
        items.forEach((element,index) => {
            const div = createNode('div');
            Style(div,'flex justify-between w-100 btn-hover cursor-pointer');
            vanilla(div,{
                alignItems:'center'
            })
            const anchor = createNode('a');
            Text(anchor,element);
            const icon = useFontAwesomeIcon({iconStyle:icons2[index]});
            
            setChild(div,anchor);
            setChild(div,icon);
            setChild(sidebar,div);
            
           //remember
            div.addEventListener('click',()=>{
                setCurrentPageIndex(2);
                setMenuClicked(!isMenuClicked());
            })
        });
       

            const overlay = createNode('div');
            createClass('hide',['display:none;']);
            createClass('show',['display:block;']);
            vanilla(overlay,{
                width:'100%',
                height:'100vh',
                position:'fixed',
                top:'0',
                right:'0',
                left:'0',
                bottom:'0',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
               
            });
            Style(overlay,'overlay hide fade');
        observeMenu(() => {
           
            vanilla(sidebar,{
                position:'fixed',
                top:'0',
                right: isMenuClicked()  ? '0' : !isMenuClicked() && mediaQuery() != 'mobile' ? '-400%' :'-400px',
                width:'60%',
                height:'100vh',
                 zIndex:'200',
                 backgroundColor:'white'
            });
            if(isMenuClicked()){
                if(overlay.classList.contains('hide')){
                    overlay.classList.remove('hide');
                    overlay.classList.add('show');
                }
            }else{
                if(overlay.classList.contains('show')){
                    overlay.classList.remove('show');
                    overlay.classList.add('hide');
                }
            }
            
        });       
        if(mobile.matches){
        setChild(page,overlay);
        setChild(page,sidebar);
        }else{
        }
    //sidebar

    const container = createNode('div');
    const getStarted = GetStarted();
    const documentation = Documentation();
    const playground = PlayGround();
    const about = About();
    const pages:any = {
       'Homepage' :container,
       'Documentation': documentation,
       'Get-Started':getStarted,
       'Playground':playground,
       'About':about
    };
    
    const pageKeys = ['Homepage', 'Documentation', 'Get-Started','Playground','About'];

    vanilla(container, {
        flex: '1',
        marginTop: '60px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        overflowY: 'auto',
        overflowX:'hidden'
    });

    setChild(page,container);
    
    observe1(() => {
        const currentKey = pageKeys[currentPageIndex()];
        const prevKey = prevIndex();
        if (pages[currentKey] && pages[prevKey]) {
            route.move(pages[prevKey], pages[currentKey], currentKey);
            page.scrollIntoView({behavior:'smooth'});
            setPrevIndex(currentKey);
        }
    });

    // Hero Section
    const section1 = createNode('div');
    Style(section1,'flex-container flex-col w-100');
    const logo = createNode('img') as HTMLImageElement;
    logo.src = bg;
    setChild(section1,logo);
    vanilla(logo,{
        width:'50%',
    });
    



    const introJet = createNode('img') as HTMLImageElement;
    introJet.src = jetImage;
    vanilla(introJet, { width: '30px', height: '30px' });

    const Intro = createNode('h1');
    Text(Intro, `Reimagine Development.\nUnlock Limitless Functionality with Minimal Code.`);
    Style(Intro, 'font');
    observe(() => {
        vanilla(Intro, {
            fontSize:
                mediaQuery() === 'tablet'
                    ? '20px'
                    : mediaQuery() === 'desktop'
                        ? '25px'
                        : '14px',
            whiteSpace: 'pre-line'
        });

        if(mediaQuery() != 'mobile'){
            sidebar.remove();
        }else{
            setChild(page,sidebar);
        }
    });

    const introHolder = Holder({ items: [introJet, Intro] });
    Style(introHolder, 'mb-4 flex items-center gap-2');
    setChild(section1, introHolder);

    const actionRow = createNode('div');
    Style(actionRow, 'flex justify-center gap-2 items-center w-100 mt-2');
    setChild(section1, actionRow);

    //Get started button
    const button = Button({ variant: 'contained', text: 'Get Started' });
    setChild(actionRow, button);

    button.addEventListener('click',()=>{
        setCurrentPageIndex(2);
    })
    
    const button2 = Button({variant:'outlined',text:'Learn More'});
    setChild(actionRow,button2);

    const owner = createNode('h3');
    Text(owner, 'NICHOLAS JOHNSON');
    animate.fadeIn(owner, 7, true);
    vanilla(owner, {
        marginTop: '20px',
        textAlign: 'center',
        textShadow: '1px 1px 1px #ccc',
        fontSize: mobile.matches ? '10pt' :'',
    });
    setChild(section1, owner);
    setChild(container,section1);

    // Section 2 - Description
    const section2 = createNode('div');
    Style(section2, 'w-100 max-w-5xl flex flex-col gap-4 items-center text-center px-2');
    setChild(container, section2);

    const secondText = createNode('h2');
    Text(secondText, 'Nite is a custom-built framework designed to simplify and accelerate web development.');
    vanilla(secondText, {
        fontSize: mobile.matches ? '12pt' :'18pt',
        lineHeight: '1.4',
    });
    setChild(section2, secondText);

    const subSecondText = createNode('p');
    const sub = Center(subSecondText,false);
    Text(subSecondText, 'It eliminates the need to write traditional HTML and CSS. It provides a powerful set of built-in CSS styles and predefined functions that let developers structure and style web interfaces using simplified, expressive commands.');
    vanilla(subSecondText, {
        fontSize: mobile.matches ? '11pt' :'14pt',
     });
    setChild(section2, sub);

    // Search Bar
    const centeredSearchBar = createNode('div');
    Style(centeredSearchBar,'flex justify-center items-center flex-col relative');
    const searchBar = createNode('div');
    vanilla(searchBar, {
        width: '90%',
        maxWidth: '500px',
        padding: '10px 20px',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    });
    Style(searchBar, 'flex items-center gap-2 relative');
    setChild(centeredSearchBar,searchBar);
    
    //Dropdown
    const functions: Record<string, string> = {
        'createNode()': 'create-node',
        'setChild()': 'set-child',
        'FutureCreator()': 'future-creator',
        'animate':'animate',
        'Watch()': 'watch',
        'renderInner()': 'render-inner',
        'route': 'router',
        'Timer()': 'timer',
        'useSpriteSheet()': 'use-sprite-sheet',
        'print()': 'print',
        'vanilla()': 'vanilla',
        'Text()': 'text',
        'switchBar()': 'switch-bar',
        'render()': 'render',
        'Style()': 'style',
        'removeClass()': 'remove-class',
        'Row()': 'row',
        'Column()': 'Column',
        'useFontAwesomeIcon()': 'use-fontawesome-icon',
        'Button()': 'button',
        'applyState()': 'apply-state',
        'listenForEvent()': 'listen-for-event',
        'setInner()': 'set-inner',
      };
      
    const [dropItems,setItems] = WatchFunction<Record<string,string>>({});
    


    //
    setChild(section2, centeredSearchBar);

    const searchIcon = useFontAwesomeIcon({ iconStyle: 'fa fa-search text-blue absolute top-2 left-1' });
    setChild(searchBar, searchIcon);

    vanilla(searchInput, {
        padding: '10px',
        border: 'none',
        outline: 'none',
        flex: '1',
        backgroundColor: 'transparent',
        paddingLeft:'20px',
        paddingRight:'40px'
    });
    searchInput.placeholder = 'Search...';
    Style(searchInput, 'input');
    setChild(searchBar, searchInput);
    searchInput.setAttribute('spellcheck', 'false');
    searchInput.setAttribute('autocorrect', 'off');
    searchInput.setAttribute('autocomplete', 'on');
    searchInput.setAttribute('autocapitalize', 'off');
    //listener
    searchInput.addEventListener('input',(e:any) => {
        if(e.target.value != ''){
            setOpen(true);
            const typed = e.target.value;
            const keys = Object.keys(functions).filter(item => item.toLocaleLowerCase().includes(typed.toLocaleLowerCase()));
            
            const filteredItems = keys.reduce((acc:any, key:any) => {
                acc[key] = functions[key];
                return acc;
              }, {} as Record<string, string>);
              
              setItems(filteredItems);
              
              
            const existingDropdown = centeredSearchBar.querySelector('.search-dropdown');
            if (existingDropdown) {
                centeredSearchBar.removeChild(existingDropdown);
            }
            
            const dropDown = DropDown({ items:dropItems() });
            dropDown.classList.add('search-dropdown'); // Add a class to identify later
            setChild(centeredSearchBar, dropDown);
            
        }else{
            setOpen(false);
        }
    });

    const searchButton = Button({ variant: 'contained', text: 'Search' });
    vanilla(searchButton,{position:'absolute',right:'10px'});
    setChild(searchBar, searchButton);

    // Works With Section
    const worksWith = createText('Works With');
    Style(worksWith, 'text-lg font-bold mt-6');
    setChild(container, worksWith);

    const gridHolder = createNode('div');
    Style(gridHolder, 'w-100 max-w-5xl grid gap-4');
    vanilla(gridHolder, {
        display: 'grid',
        gridTemplateColumns: mobile.matches ? '' : 'repeat(4, 1fr)',
        padding: '20px'
    });
    setChild(container, gridHolder);

    const icons = [java, js, code, speed];
    const labels = ['JAVA', 'JavaScript', 'Editor Friendly', 'Fast and Reliable'];

    icons.forEach((src, index) => {
        const div = createNode('div');
        Style(div, 'flex flex-col items-center bg-white shadowXl p-4 rounded slide-in-right');
        vanilla(div,{
            borderLeft: index == 0? '5px solid green' : index == 1 ? '5px solid black' : index == 2 ? '5px solid blue' : index == 3 ? '5px solid red':'',
            
        });

        const icon = createNode('img') as HTMLImageElement;
        icon.src = src;
        vanilla(icon, {
            width: '50px',
            height: '50px',
            marginBottom: '10px'
        });

        const label = createNode('p');
        Text(label, labels[index]);
        vanilla(label, { fontSize: '12pt', textAlign: 'center' });

        setChild(div, icon);
        setChild(div, label);
    
        setChild(gridHolder, div);
    });

    // document.querySelectorAll('.slide-in-a').forEach(el => {
    //     observerMovement.observe(el);
    //   });
    

    // Final Paragraph
    const finalText = createText2(`Rather than relying on verbose HTML tags and CSS rules,\n Nite introduces a more streamlined syntax where components,\n layouts, and styles are handled programmatically — bringing\n logic and presentation closer together.`);
    const finalText2 = createText(`Rather than relying on verbose HTML tags and CSS rules,\n Nite introduces a more streamlined syntax where components,\n layouts, and styles are handled programmatically — bringing\n logic and presentation closer together.`);

    const finalTextCentered = Center(mobile.matches ?finalText2:finalText, true);
    vanilla(finalTextCentered, {
        maxWidth: '800px',
        marginTop: '40px',
        textAlign: 'center',
        fontSize: mobile.matches ? '10pt' :'15pt',
    });
    setChild(container, finalTextCentered);

    const benefits = createNode('ul');
    [`No More HTML Hassles: User Predefined functions to generate elements, sections, buttons, and more.`,'Built-in Styling: Say goodbye to writing raw CSS, Nite includes default styles and themes.',
        `Fast Development:With resuable utilities and minimal boilerplate, projects are built in record time.`,
        `Clean Codebase: Your frontend code is easier to read, debug, and maintain.`
    ].forEach(element => {
        const li = createNode('li');
        Text(li,element);
        setChild(benefits,li);
        vanilla(li,{
        fontSize: mobile.matches ? '10pt' :'15pt',
        });
    });
    vanilla(benefits,{
        fontSize: desktop.matches ? '20pt' : ''
    })
    setChild(container,benefits);

    const code1 = `const [count, setCount, observe] = Watch(0);\n
    const value = createNode('h1');\n
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
    renderBody(value);\n
    `;
    const p = createText2(code1);
    // vanilla(p,{
    //     whiteSpace:'pre-line',
    //    color:'white'
    // })
    const codespace = createNode('div');
    Style(codespace,'rounded p-2 shadow-dynamic w-30');
    vanilla(codespace,{
        boxShadow:'7px 4px 8px black',
        //backgroundColor:'rgb(32, 29, 29)',
        fontSize:mobile.matches ? '9pt':'',
        width:mobile.matches ? '90%' : '30%'
    })
    
    setChild(codespace,p);
    

    const tryIt = Button({
        variant:'contained',
        text:'Try it your self',
        
    });

    const watchText = createNode('div');
    const _text3 = createText(
        'Utilize the power of the Watch() function\n' +
        'This function allows you to observe changes to a specific variable or expression and run a callback whenever a change occurs. ' +
        'It is especially useful in reactive programming environments, where you want your application to respond dynamically to state updates or user interactions.\n\n' +
        'By using Watch(), you can monitor values in real-time without the need for manual checks or polling. ' +
        'When the observed data changes, the provided callback function is executed automatically, making it ideal for tasks such as form validation, UI updates, or syncing data with external sources.\n\n' +
        'Overall, Watch() helps create cleaner, more maintainable code by separating side-effect logic from core functionality, promoting better modularity and responsiveness in your application.'
      );
      
      
    vanilla(_text3,{
        whiteSpace:'pre-line',
        textAlign:'center',
        fontSize:mobile.matches ? '11pt':''
    });
    
    setChild(watchText,_text3);
    setChild(watchText,tryIt);
    Style(watchText,'p-1 shadowXl rounded')

    const section4 = createNode('div');
    vanilla(section4,{
        display:'flex',
        flexDirection:mobile.matches ? 'column':''
    });
    Style(section4,`justify-center items-center gap-4 w-100`);
    setChild(section4,codespace);
    setChild(section4,watchText);
    setChild(container,section4);

    const videoHolder = createNode('div');
    Style(videoHolder,'relative w-100');
    const shortVideo = createNode('img') as HTMLImageElement;
    shortVideo.src = logoVideo;
    setChild(videoHolder,shortVideo);
    vanilla(shortVideo,{
        width:'100%',
        borderRadius:'15px',
        
    });
    Style(shortVideo,'shadow-dynamic');
    const docButton = Button({
        variant:'contained',
        text:'Go to Docs'
    });
    Style(docButton,'absolute bottom-2 right-1');
    docButton.onclick = () => {
        setCurrentPageIndex(1);
    }
    setChild(videoHolder,docButton);
    setChild(container,videoHolder);

    const footer = createNode('footer');
    Style(footer,'w-100 flex-container flex-col');
    vanilla(footer,{
         backgroundColor:'rgb(234, 238, 243)'
    });
    const footerItems = createNode('div');
    Style(footerItems,`flex justify-between w-100 ${mobile.matches ? 'gap-1':'gap-10'}`);
    setChild(footer,footerItems);
    const leftItem = createNode('div');
    const list = createNode('ul');
    ['Home','Docs','Installation','Playground','About'].forEach((element,index:number) => {
        const li = createNode('li');
        Text(li,element);
        vanilla(li,{
            fontSize: mobile.matches ? '10pt' :'15pt',
            whiteSpace:'pre-line',
            marginTop:'20px',
            cursor:'pointer'
        });
        Style(li,'btn-hover');
        setChild(list,li);
        li.onclick = () =>{
            setCurrentPageIndex(index);
        }
    });
    setChild(leftItem,list);
    setChild(footerItems,leftItem);
    const RightItems = createNode('div');
    const summary = createText('Nite consists of alot of reusable components and also you can create yours too.\nRedefining your development by redusing the stress faced through local method\nSpeed:100%\n\nAccuracy: 100%\nEditor Friendly: true\nIntellisense: Check out Nite Intellisense at vs-code market place.');
    vanilla(RightItems,{
        width:'100%',
        height:'200px',
        borderRadius:'20px',
        border:'1px solid white',
        padding:'10px'
    });
    vanilla(summary,{
        fontSize:mobile.matches ? '7pt' : ''
    });
    setChild(RightItems,summary);
    setChild(footerItems,RightItems);
    const footerText = createNode(`p`);
    setInner(footerText,'&copy; Nicholas Johnson all rights reserved');
    setChild(footer,footerText);
    vanilla(footerText,{
    fontSize: mobile.matches ? '10pt' :'',
    });
    setChild(container,footer);
    return page;
};

export function createText2(text?: string) {
    const pre = createNode('pre');
    const code = createNode('code');
    Style(code,'language-javascript');
    Text(code,text);
    setChild(pre,code);
    if (typeof Prism !== 'undefined' && Prism.highlightElement) {
        Prism.highlightElement(code);
    }
    return pre;
}
export function createText(text?:string){
    const p = createNode('p');
    vanilla(p,{
        whiteSpace:'pre-line',
    });
    Text(p,text);
    return p
}

function Center(item?: HTMLElement, full = true) {
    const node = createNode('div');
    if (full) {
        Style(node, 'flex justify-center p-1 rounded shadowXl bg-white');
        vanilla(node,{
            borderLeft: '3px solid blue',
            borderRight: '5px solid blue',
        })
    } else {
        Style(node, 'flex justify-center p-1 rounded');
        vanilla(node,{
            backgroundColor:'rgb(234, 238, 243)',
            wifth:'95%'
        });
    }
    setChild(node, item ?? createNode('div'));

    
    return node;
}

export function wrap({node}:any){
    const div = createNode('div');
    vanilla(div,{
        borderBottom:'0.3px solid grey'
    });
    setChild(div,node);
    return div;
}
