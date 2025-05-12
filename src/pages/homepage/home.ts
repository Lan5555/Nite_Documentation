import { animate, CreateNode, Print, route, SetChild, SetInner, Style, Text, Vanilla, Watch } from "../../../lib/state";
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
import { FormBar } from "../../components/form";
import { Ai } from "../../components/Ai";


export const HomePage = (): HTMLElement => {

    const page = CreateNode('div');
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
    
    SetChild(page, appBar);

    //storeindexes
    function storeIndex(index:number){
        setCurrentPageIndex(index);
    }

    //sidebar
        const sidebar = CreateNode('div');
        Vanilla(sidebar,{
            position:'fixed',
            top:'0',
            right: isMenuClicked() ? '0' : '-400px',
            width:'60%',
            height:'100vh',
            zIndex:'200',
            backgroundColor:'white'
        });
        Style(sidebar,'shadow-dynamic transition relative flex justify-start gap-2 p-1 flex-col hide-bar');
        const title = CreateNode('h4');
        Text(title,'Navigation');
       const _title = wrap({node:title});
        Style(title,'opacity-half');
        SetChild(sidebar,_title);
        const sideIcons = ['fa fa-home opacity-half', 'fa fa-book opacity-half', 'fa fa-wallet opacity-half', 'fa fa-robot opacity-half','fa fa-person opacity-half'];
        ['Home','Documentation','Installation','Playground','About'].forEach((element:string,index:number) => {
            const div = CreateNode('div');
            Style(div,'flex justify-between w-100 btn-hover cursor-pointer');
            Vanilla(div,{
                alignItems:'center'
            })
            const anchor = CreateNode('a');
            Text(anchor,element);
            const icon = useFontAwesomeIcon({iconStyle:sideIcons[index]});
            
            SetChild(div,anchor);
            SetChild(div,icon);
            SetChild(sidebar,div);

            div.addEventListener('click',()=>{
                setCurrentPageIndex(index);
                if(index != 1){
                    setIndex(1);
                    back.click();
                }
                setMenuClicked(!isMenuClicked());
            });
            
        });
       
        const title2 = CreateNode('h4');
        Style(title2,'opacity-half');
        Text(title2,'Installation');
        const _title2 = wrap({node:title2});
        SetChild(sidebar,_title2);

        const items = ['Installing', 'Setting Up', 'Configuration', 'Finishing up'];
        const icons2 = ['fa fa-computer opacity-half', 'fa fa-gear opacity-half', 'fa fa-dashboard opacity-half', 'fa fa-check opacity-half'];
        items.forEach((element,index) => {
            const div = CreateNode('div');
            Style(div,'flex justify-between w-100 btn-hover cursor-pointer');
            Vanilla(div,{
                alignItems:'center'
            })
            const anchor = CreateNode('a');
            Text(anchor,element);
            const icon = useFontAwesomeIcon({iconStyle:icons2[index]});
            
            SetChild(div,anchor);
            SetChild(div,icon);
            SetChild(sidebar,div);
            
           //remember
            div.addEventListener('click',()=>{
                setCurrentPageIndex(2);
                setMenuClicked(!isMenuClicked());
            })
        });
       

            const overlay = CreateNode('div');
            createClass('hide',['display:none;']);
            createClass('show',['display:block;']);
            Vanilla(overlay,{
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
           
            Vanilla(sidebar,{
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
        SetChild(page,overlay);
        SetChild(page,sidebar);
        }else{
        }
    //sidebar

    const container = CreateNode('div');
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

    Vanilla(container, {
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

    SetChild(page,container);
    
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
    const section1 = CreateNode('div');
    Style(section1,'flex-container flex-col w-100');
    const logo = CreateNode('img') as HTMLImageElement;
    logo.src = bg;
    SetChild(section1,logo);
    Vanilla(logo,{
        width:'50%',
    });
    



    const introJet = CreateNode('img') as HTMLImageElement;
    introJet.src = jetImage;
    Vanilla(introJet, { width: '30px', height: '30px' });

    const Intro = CreateNode('h1');
    Text(Intro, `Reimagine Development.\nUnlock Limitless Functionality with Minimal Code.`);
    Style(Intro, 'font');
    observe(() => {
        Vanilla(Intro, {
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
            SetChild(page,sidebar);
        }
    });

    const introHolder = Holder({ items: [introJet, Intro] });
    Style(introHolder, 'mb-4 flex items-center gap-2');
    SetChild(section1, introHolder);

    const actionRow = CreateNode('div');
    Style(actionRow, 'flex justify-center gap-2 items-center w-100 mt-2');
    SetChild(section1, actionRow);

    //Get started button
    const button = Button({ variant: 'contained', text: 'Get Started' });
    SetChild(actionRow, button);

    button.addEventListener('click',()=>{
        setCurrentPageIndex(2);
    })
    
    const button2 = Button({variant:'outlined',text:'Playground'});
    SetChild(actionRow,button2);
    button2.addEventListener('click',()=>{
        setCurrentPageIndex(3);
    })

    const owner = CreateNode('h3');
    Text(owner, 'NICHOLAS JOHNSON');
    animate.fadeIn(owner, 7, true);
    Vanilla(owner, {
        marginTop: '20px',
        textAlign: 'center',
        textShadow: '1px 1px 1px #ccc',
        fontSize: mobile.matches ? '10pt' :'',
    });
    SetChild(section1, owner);
    SetChild(container,section1);

    // Section 2 - Description
    const section2 = CreateNode('div');
    Style(section2, 'w-100 max-w-5xl flex flex-col gap-4 items-center text-center px-2');
    SetChild(container, section2);

    const secondText = CreateNode('h2');
    Text(secondText, 'Nite is a custom-built framework designed to simplify and accelerate web development.');
    Vanilla(secondText, {
        fontSize: mobile.matches ? '12pt' :'18pt',
        lineHeight: '1.4',
    });
    SetChild(section2, secondText);

    const subSecondText = CreateNode('p');
    const sub = Center(subSecondText,false);
    Text(subSecondText, 'It eliminates the need to write traditional HTML and CSS. It provides a powerful set of built-in CSS styles and predefined functions that let developers structure and style web interfaces using simplified, expressive commands.');
    Vanilla(subSecondText, {
        fontSize: mobile.matches ? '11pt' :'14pt',
     });
    SetChild(section2, sub);

    // Search Bar
    const centeredSearchBar = CreateNode('div');
    Style(centeredSearchBar,'flex justify-center items-center flex-col relative');
    const searchBar = CreateNode('div');
    Vanilla(searchBar, {
        width: '90%',
        maxWidth: '500px',
        padding: '10px 20px',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    });
    Style(searchBar, 'flex items-center gap-2 relative');
    SetChild(centeredSearchBar,searchBar);
    
    //Dropdown
    const functions: Record<string, string> = {
        'CreateNode()': 'create-node',
        'SetChild()': 'set-child',
        'FutureCreator()': 'future-creator',
        'animate':'animate',
        'Watch()': 'watch',
        'RenderInner()': 'render-inner',
        'route': 'router',
        'renderBody()':'render-body',
        'Timer()': 'timer',
        'UseSpriteSheet()': 'use-sprite-sheet',
        'Print()': 'print',
        'Vanilla()': 'vanilla',
        'Text()': 'text',
        'SwitchBar()': 'switch-bar',
        'Render()': 'render',
        'Style()': 'style',
        'RemoveClass()': 'remove-class',
        'Row()': 'row',
        'Column()': 'Column',
        'UseFontAwesomeIcon()': 'use-fontawesome-icon',
        'Button()': 'button',
        'ApplyState()': 'apply-state',
        'ListenForEvent()': 'listen-for-event',
        'SetInner()': 'set-inner',
      };
      
    const [dropItems,setItems] = WatchFunction<Record<string,string>>({});
    


    //
    SetChild(section2, centeredSearchBar);

    const searchIcon = useFontAwesomeIcon({ iconStyle: 'fa fa-search text-blue absolute top-2 left-1' });
    SetChild(searchBar, searchIcon);

    Vanilla(searchInput, {
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
    SetChild(searchBar, searchInput);
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
            SetChild(centeredSearchBar, dropDown);
            
        }else{
            setOpen(false);
        }
    });

    const searchButton = Button({ variant: 'contained', text: 'Search' });
    Vanilla(searchButton,{position:'absolute',right:'10px'});
    SetChild(searchBar, searchButton);

    // Works With Section
    const worksWith = createText('Works With');
    Style(worksWith, 'text-lg font-bold mt-6');
    SetChild(container, worksWith);

    const gridHolder = CreateNode('div');
    Style(gridHolder, 'w-100 max-w-5xl grid gap-4');
    Vanilla(gridHolder, {
        display: 'grid',
        gridTemplateColumns: mobile.matches ? '' : 'repeat(4, 1fr)',
        padding: '20px'
    });
    SetChild(container, gridHolder);

    const icons = [java, js, code, speed];
    const labels = ['JAVA', 'JavaScript', 'Editor Friendly', 'Fast and Reliable'];

    icons.forEach((src, index) => {
        const div = CreateNode('div');
        Style(div, 'flex flex-col items-center bg-white shadowXl p-4 rounded slide-in-right');
        Vanilla(div,{
            borderLeft: index == 0? '5px solid green' : index == 1 ? '5px solid black' : index == 2 ? '5px solid blue' : index == 3 ? '5px solid red':'',
            
        });

        const icon = CreateNode('img') as HTMLImageElement;
        icon.src = src;
        Vanilla(icon, {
            width: '50px',
            height: '50px',
            marginBottom: '10px'
        });

        const label = CreateNode('p');
        Text(label, labels[index]);
        Vanilla(label, { fontSize: '12pt', textAlign: 'center' });

        SetChild(div, icon);
        SetChild(div, label);
    
        SetChild(gridHolder, div);
    });

    // document.querySelectorAll('.slide-in-a').forEach(el => {
    //     observerMovement.observe(el);
    //   });
    

    // Final Paragraph
    const finalText = createText2(`Rather than relying on verbose HTML tags and CSS rules,\n Nite introduces a more streamlined syntax where components,\n layouts, and styles are handled programmatically — bringing\n logic and presentation closer together.`);
    const finalText2 = createText(`Rather than relying on verbose HTML tags and CSS rules,\n Nite introduces a more streamlined syntax where components,\n layouts, and styles are handled programmatically — bringing\n logic and presentation closer together.`);

    const finalTextCentered = Center(mobile.matches ?finalText2:finalText, true);
    Vanilla(finalTextCentered, {
        maxWidth: '800px',
        marginTop: '40px',
        textAlign: 'center',
        fontSize: mobile.matches ? '10pt' :'15pt',
    });
    SetChild(container, finalTextCentered);
    const support = FormBar();
    SetChild(container,support);

    const benefits = CreateNode('ul');
    [`No More HTML Hassles: User Predefined functions to generate elements, sections, buttons, and more.`,'Built-in Styling: Say goodbye to writing raw CSS, Nite includes default styles and themes.',
        `Fast Development:With resuable utilities and minimal boilerplate, projects are built in record time.`,
        `Clean Codebase: Your frontend code is easier to read, debug, and maintain.`
    ].forEach(element => {
        const li = CreateNode('li');
        Text(li,element);
        SetChild(benefits,li);
        Vanilla(li,{
        fontSize: mobile.matches ? '10pt' :'15pt',
        });
    });
    Vanilla(benefits,{
        fontSize: desktop.matches ? '20pt' : ''
    })
    SetChild(container,benefits);

    const code1 = `const [count, setCount, observe] = Watch(0);\n
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
    renderBody(value);\n
    `;
    const p = createText2(code1);
    // vanilla(p,{
    //     whiteSpace:'pre-line',
    //    color:'white'
    // })
    const codespace = CreateNode('div');
    Style(codespace,'rounded p-2 shadow-dynamic w-30');
    Vanilla(codespace,{
        boxShadow:'7px 4px 8px black',
        //backgroundColor:'rgb(32, 29, 29)',
        fontSize:mobile.matches ? '9pt':'',
        width:mobile.matches ? '90%' : '30%'
    })
    
    SetChild(codespace,p);
    

    const tryIt = Button({
        variant:'contained',
        text:'Try it your self',
        
    });
    tryIt.addEventListener('click',()=> setCurrentPageIndex(3))

    const watchText = CreateNode('div');
    const _text3 = createText(
        'Utilize the power of the Watch() function\n' +
        'This function allows you to observe changes to a specific variable or expression and run a callback whenever a change occurs. ' +
        'It is especially useful in reactive programming environments, where you want your application to respond dynamically to state updates or user interactions.\n\n' +
        'By using Watch(), you can monitor values in real-time without the need for manual checks or polling. ' +
        'When the observed data changes, the provided callback function is executed automatically, making it ideal for tasks such as form validation, UI updates, or syncing data with external sources.\n\n' +
        'Overall, Watch() helps create cleaner, more maintainable code by separating side-effect logic from core functionality, promoting better modularity and responsiveness in your application.'
      );
      
      
    Vanilla(_text3,{
        whiteSpace:'pre-line',
        textAlign:'center',
        fontSize:mobile.matches ? '11pt':''
    });
    
    SetChild(watchText,_text3);
    SetChild(watchText,tryIt);
    Style(watchText,'p-1 shadowXl rounded')

    const section4 = CreateNode('div');
    Vanilla(section4,{
        display:'flex',
        flexDirection:mobile.matches ? 'column':''
    });
    Style(section4,`justify-center items-center gap-4 w-100`);
    SetChild(section4,codespace);
    SetChild(section4,watchText);
    SetChild(container,section4);

    const videoHolder = CreateNode('div');
    Style(videoHolder,'relative w-100');
    const shortVideo = CreateNode('img') as HTMLImageElement;
    shortVideo.src = logoVideo;
    SetChild(videoHolder,shortVideo);
    Vanilla(shortVideo,{
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
    SetChild(videoHolder,docButton);
    SetChild(container,videoHolder);

    const footer = CreateNode('footer');
    Style(footer,'w-100 flex-container flex-col');
    Vanilla(footer,{
         backgroundColor:'rgb(234, 238, 243)'
    });
    const footerItems = CreateNode('div');
    Style(footerItems,`flex justify-between w-100 ${mobile.matches ? 'gap-1':'gap-10'}`);
    SetChild(footer,footerItems);
    const leftItem = CreateNode('div');
    const list = CreateNode('ul');
    ['Home','Docs','Installation','Playground','About'].forEach((element,index:number) => {
        const li = CreateNode('li');
        Text(li,element);
        Vanilla(li,{
            fontSize: mobile.matches ? '10pt' :'15pt',
            whiteSpace:'pre-line',
            marginTop:'20px',
            cursor:'pointer'
        });
        Style(li,'btn-hover');
        SetChild(list,li);
        li.onclick = () =>{
            setCurrentPageIndex(index);
        }
    });
    SetChild(leftItem,list);
    SetChild(footerItems,leftItem);
    const RightItems = CreateNode('div');
    const summary = createText('Nite consists of alot of reusable components and also you can create yours too.\nRedefining your development by redusing the stress faced through local method\nSpeed:100%\n\nAccuracy: 100%\nEditor Friendly: true\nIntellisense: Check out Nite Intellisense at vs-code market place.');
    Vanilla(RightItems,{
        width:'100%',
        height:'200px',
        borderRadius:'20px',
        border:'1px solid white',
        padding:'10px'
    });
    Vanilla(summary,{
        fontSize:mobile.matches ? '7pt' : ''
    });
    SetChild(RightItems,summary);
    SetChild(footerItems,RightItems);
    const footerText = CreateNode(`p`);
    SetInner(footerText,'&copy; Nicholas Johnson all rights reserved');
    SetChild(footer,footerText);
    Vanilla(footerText,{
    fontSize: mobile.matches ? '10pt' :'',
    });
    SetChild(container,footer);
    const askAI = Ai();
    SetChild(container,askAI);
    
    return page;
};

export function createText2(text?: string) {
    const pre = CreateNode('pre');
    const code = CreateNode('code');
    Style(code,'language-javascript');
    Text(code,text);
    SetChild(pre,code);
    if (typeof Prism !== 'undefined' && Prism.highlightElement) {
        Prism.highlightElement(code);
    }
    return pre;
}
export function createText(text?:string){
    const p = CreateNode('p');
    Vanilla(p,{
        whiteSpace:'pre-line',
    });
    Text(p,text);
    return p
}

function Center(item?: HTMLElement, full = true) {
    const node = CreateNode('div');
    if (full) {
        Style(node, 'flex justify-center p-1 rounded shadowXl bg-white');
        Vanilla(node,{
            borderLeft: '3px solid blue',
            borderRight: '5px solid blue',
        })
    } else {
        Style(node, 'flex justify-center p-1 rounded');
        Vanilla(node,{
            backgroundColor:'rgb(234, 238, 243)',
            wifth:'95%'
        });
    }
    SetChild(node, item ?? CreateNode('div'));

    
    return node;
}

export function wrap({node}:any){
    const div = CreateNode('div');
    Vanilla(div,{
        borderBottom:'0.3px solid grey'
    });
    SetChild(div,node);
    return div;
}
