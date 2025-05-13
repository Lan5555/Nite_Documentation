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
import { darkMode, observeMode, setDarkMode } from "../hooks/mode";

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
    observeMode(() => {
        Vanilla(appBar,{
            backgroundColor: darkMode() == 'dark' ? '#121212':'',   
            boxShadow: darkMode() == 'dark' ? darkShadow : ''
        });
    })
    Vanilla(appBar,{...styles});
    const leadingTitleHolder = CreateNode('div');
    Style(leadingTitleHolder,'flex gap-3 justify-center items-center');
    let menuIcon = useFontAwesomeIcon({iconStyle:leading});

    observeMode(() => {
        menuIcon.style.color = darkMode() == 'dark' ? 'white':'black';
    })
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
         if (index === 0) {
        const currentTheme = darkMode();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setDarkMode(newTheme);
       
        }else if(index == 1){
             Toast({text:'No notifications',type:'success',page:document.body})
        }else if(index == 2){
            Toast({text:'Current user',type:'success',page:document.body})
        }
    }
    const secondIconBar = [
  'fa fa-sun cursor-pointer btn-hover',
  'fa fa-bell cursor-pointer btn-hover',
  'fa fa-user cursor-pointer btn-hover'
];

actions.forEach((element, index: number) => {
  const icon = useFontAwesomeIcon({ iconStyle: element });
  const icon2 = useFontAwesomeIcon({ iconStyle: secondIconBar[index] });

  // Attach event listeners to both icons
  icon.addEventListener('click', () => runFunc(index));
  icon2.addEventListener('click', () => runFunc(index));

  // Add both icons to DOM but only one will be visible
  SetChild(actionsHolder, icon);
  SetChild(actionsHolder, icon2);

  // Initial visibility
  const updateIcons = () => {
    const isDark = darkMode() === 'dark';
    icon2.style.display = isDark ? 'none' : 'inline-block';
    icon.style.display = isDark ? 'inline-block' : 'none';
    
    // Optional: set color based on mode
    const color = isDark ? 'white' : 'black';
    icon.style.color = color;
    icon2.style.color = color;
    };

    observeMode(updateIcons); // Run on theme change
    updateIcons(); // Run once at start
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
        observeMode(() => {
            anchor.style.color = darkMode() == 'dark' ? 'white':'black';
            icon.style.color = darkMode() == 'dark' ? 'white':'black';
        })
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