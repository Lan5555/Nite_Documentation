import { CreateNode, SetChild, Style, Text, Vanilla, Watch } from "../../lib/state";
import { MediaQuery } from "../hooks/mediaquery";
import { useFontAwesomeIcon } from "./icons";
import bg from '../../public/nite.png';
import { WatchFunction } from "../hooks/watch";
import { isMenuClicked, setMenuClicked } from "../hooks/menuState";
import { back, setIndex } from "../hooks/dropdownstate";
import { Toast } from "./toast";
import { darkShadow, prefersDark } from "../hooks/theme";
import { isOn, setIsOn } from "../hooks/overlayState";

interface Props{
    title:string,
    actions?: string[],
    leading?:string
    navigationclick:(index:number) => void
    sidebarPass?:(val:boolean) => void
    
}
export const AppBar = ({title,actions = [],leading, navigationclick,sidebarPass}: Props):HTMLElement => {
    const appBar:HTMLElement = CreateNode('div');
    const desktop = window.matchMedia('(min-width:1024px)');
    const tablet = window.matchMedia('(min-width:542px) and (max-width:1024px)');
    const mobile = window.matchMedia('(max-width:600px)');
    const [mediaQuery,setMedia,observe]:any = Watch('desktop');
            MediaQuery({output:(media):any => {
                setMedia(media);
    }});
           
    Style(appBar,`fixed top-0 shadow-dynamic w-100 flex items-center ${desktop.matches ? 'justify-around':'justify-between'} z-20 bg-white`);
    const styles = {
        paddingLeft:'30px',
        paddingRight:'20px',
        zIndex:50,
        backgroundColor: prefersDark ? '#121212':'',
        boxShadow:prefersDark ? darkShadow : ''
    }
    Vanilla(appBar,{...styles});
    const leadingTitleHolder = CreateNode('div');
    Style(leadingTitleHolder,'flex gap-3 justify-center items-center');
    let menuIcon = useFontAwesomeIcon({iconStyle:leading});
    const [visible2, setVisible, observer] = WatchFunction(false);
    
    menuIcon.addEventListener('click',() => {
    //    setVisible(!visible2());
    //    if(sidebarPass){
    //     sidebarPass(visible2());
    //    }
    setIsOn(!isOn());
        setMenuClicked(!isMenuClicked());
    });
    
    let iconHolder = desktop.matches ? CreateNode('div') : menuIcon;
    SetChild(leadingTitleHolder,iconHolder);

    const navigationClick = (index: number) => {
        navigationclick(index);
    }
    

    const _text = CreateNode('img') as HTMLImageElement;
    _text.src = bg;
    Vanilla(_text,{
        width:'100px',
        height:'60px'
    })
    
    SetChild(leadingTitleHolder,_text);
    SetChild(appBar,leadingTitleHolder);

    const actionsHolder:HTMLElement = CreateNode('div');
    Style(actionsHolder,'flex justify-center gap-2 items-center mr-6');

    const runFunc = (index: number):void => {
        if(index == 0){
            const theme = localStorage.getItem('theme');
           localStorage.setItem('theme', theme == 'dark' ? 'light' : 'dark');
           window.location.reload();
        }else if(index == 1){
             Toast({text:'No notifications',type:'success',page:document.body})
        }else if(index == 2){
            Toast({text:'Current user',type:'success',page:document.body})
        }
    }
    actions.forEach((element,index:number) => {
        const icon = useFontAwesomeIcon({iconStyle:element});
        SetChild(actionsHolder,icon);
        icon.addEventListener('click',() => {
            runFunc(index);
        });
    });
    const centeredItems = CreateNode('div') as HTMLInputElement;
    Style(centeredItems,'flex justify-center gap-2');
    const icons =['fa fa-home','fa fa-book','fa fa-download','fa fa-code','fa fa-info-circle'];
    ['Home','Documentation','Installation','Playground','About'].forEach((element:string,index:number) => {
        const anchor = CreateNode('a');
        Vanilla(anchor,{
            color: prefersDark ? 'white' : ''
        });
        const anchorHolder = CreateNode('div');
        Style(anchorHolder,'flex justify-center items-center gap-1');
        Text(anchor,element);
        Style(anchorHolder,'cursor-pointer btn-hover');
        const icon = useFontAwesomeIcon({iconStyle:icons[index]});
        icon.style.color = prefersDark ? 'white' : ''
        SetChild(anchorHolder,icon);
        SetChild(anchorHolder,anchor);
        anchorHolder.addEventListener('click',() => {
            navigationClick(index);
            if(index != 1){
                setIndex(1);
                back.click();
            }
        });
        SetChild(centeredItems,anchorHolder);
    });
    observe(() => {
        Vanilla(appBar,{
         justifyContent: mediaQuery() == 'desktop' ? 'space-around' : 'space-between'
        });
         if(mediaQuery() == 'desktop' || mediaQuery() == 'tablet') {
             menuIcon.remove();
             actionsHolder.remove();
             SetChild(appBar,centeredItems);
             SetChild(appBar,actionsHolder);
         }else{
             _text.remove()
             SetChild(leadingTitleHolder,menuIcon)
             SetChild(leadingTitleHolder,_text);
             centeredItems.remove()
         }
       });
       if(desktop.matches || tablet.matches) {
        menuIcon.remove();
        actionsHolder.remove();
        SetChild(appBar,centeredItems);
        SetChild(appBar,actionsHolder);
        }else{
        _text.remove()
        SetChild(leadingTitleHolder,menuIcon)
        SetChild(leadingTitleHolder,_text);
        centeredItems.remove()
        }

    SetChild(appBar,actionsHolder);

    return appBar;
}