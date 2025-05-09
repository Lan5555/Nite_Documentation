import { createNode, setChild, Style, Text, vanilla, Watch } from "../../lib/state";
import { MediaQuery } from "../hooks/mediaquery";
import { useFontAwesomeIcon } from "./icons";
import bg from '../../public/nite.jpg';
import { WatchFunction } from "../hooks/watch";
import { isMenuClicked, setMenuClicked } from "../hooks/menuState";
import { back, setIndex } from "../hooks/dropdownstate";
import { Toast } from "./toast";

interface Props{
    title:string,
    actions?: string[],
    leading?:string
    navigationclick:(index:number) => void
    sidebarPass?:(val:boolean) => void
    
}
export const AppBar = ({title,actions = [],leading, navigationclick,sidebarPass}: Props):HTMLElement => {
    const appBar:HTMLElement = createNode('div');
    const desktop = window.matchMedia('(min-width:1024px)');
    const tablet = window.matchMedia('(min-width:542px) and (max-width:1024px)');
    const mobile = window.matchMedia('(max-width:600px)');
    const [mediaQuery,setMedia,observe]:any = Watch('desktop');
            MediaQuery({output:(media):any => {
                setMedia(media);
    }});
           
    Style(appBar,`fixed top-0 shadowXl w-100 flex items-center ${desktop.matches ? 'justify-around':'justify-between'} z-20 bg-white`);
    const styles = {
        paddingLeft:'30px',
        paddingRight:'20px',
        zIndex:50
    }
    vanilla(appBar,{...styles});
    const leadingTitleHolder = createNode('div');
    Style(leadingTitleHolder,'flex gap-3 justify-center items-center');
    let menuIcon = useFontAwesomeIcon({iconStyle:leading});
    const [visible2, setVisible, observer] = WatchFunction(false);
    
    menuIcon.addEventListener('click',() => {
    //    setVisible(!visible2());
    //    if(sidebarPass){
    //     sidebarPass(visible2());
    //    }
        setMenuClicked(!isMenuClicked());
    });
    
    let iconHolder = desktop.matches ? createNode('div') : menuIcon;
    setChild(leadingTitleHolder,iconHolder);

    const navigationClick = (index: number) => {
        navigationclick(index);
    }
    

    const _text = createNode('img') as HTMLImageElement;
    _text.src = bg;
    vanilla(_text,{
        width:'100px',
        height:'60px'
    })
    
    setChild(leadingTitleHolder,_text);
    setChild(appBar,leadingTitleHolder);

    const actionsHolder:HTMLElement = createNode('div');
    Style(actionsHolder,'flex justify-center gap-2 items-center mr-6');

    const runFunc = (index: number):void => {
        if(index == 0){
            Toast({text:'No notifications',type:'success',page:document.body})
        }else{
            Toast({text:'Current user',type:'success',page:document.body})
        }
    }
    actions.forEach((element,index:number) => {
        const icon = useFontAwesomeIcon({iconStyle:element});
        setChild(actionsHolder,icon);
        icon.addEventListener('click',() => {
            runFunc(index);
        });
    });
    const centeredItems = createNode('div') as HTMLInputElement;
    Style(centeredItems,'flex justify-center gap-2');
    ['Home','Documentation','Installation','Playground','About'].forEach((element:string,index:number) => {
        const anchor = createNode('a');
        Text(anchor,element);
        Style(anchor,'cursor-pointer btn-hover')
        anchor.addEventListener('click',() => {
            navigationClick(index);
            if(index != 1){
                setIndex(1);
                back.click();
            }
        });
        setChild(centeredItems,anchor);
    });
    observe(() => {
        vanilla(appBar,{
         justifyContent: mediaQuery() == 'desktop' ? 'space-around' : 'space-between'
        });
         if(mediaQuery() == 'desktop' || mediaQuery() == 'tablet') {
             menuIcon.remove();
             actionsHolder.remove();
             setChild(appBar,centeredItems);
             setChild(appBar,actionsHolder);
         }else{
             _text.remove()
             setChild(leadingTitleHolder,menuIcon)
             setChild(leadingTitleHolder,_text);
             centeredItems.remove()
         }
       });
       if(desktop.matches || tablet.matches) {
        menuIcon.remove();
        actionsHolder.remove();
        setChild(appBar,centeredItems);
        setChild(appBar,actionsHolder);
        }else{
        _text.remove()
        setChild(leadingTitleHolder,menuIcon)
        setChild(leadingTitleHolder,_text);
        centeredItems.remove()
        }

    setChild(appBar,actionsHolder);

    return appBar;
}