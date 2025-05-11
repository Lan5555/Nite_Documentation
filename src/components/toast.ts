import { animate, CreateNode, SetChild, Style, Vanilla, Watch } from "../../lib/state"
import { createText } from "../pages/homepage/home";
import { useFontAwesomeIcon } from "./icons";

interface Props{
    text?:string,
    color?:string,
    duration?:number,
    type: 'warning' | 'success';
    page:HTMLElement
}
export const Toast = ({text,color,duration, type,page}:Props) => {
   
    let iconBar:HTMLElement; 
    const div = CreateNode('div');
    animate.slideInRight(div,0.3,false);
    Style(div,`rounded flex-container flex-col p-1 ${color != 'white' ? 'shadow':'shadowXl'} fixed top-5 right-5`);
    Vanilla(div,{
        backgroundColor: color ?? 'white',
        zIndex:1000
    });
    
    if(type == 'warning'){
        iconBar = useFontAwesomeIcon({iconStyle: 'fa fa-triangle-exclamation text-red'});
        SetChild(div,iconBar);
    }else if(type == 'success'){
        iconBar = useFontAwesomeIcon({iconStyle:'fa fa-check text-green'});
        SetChild(div,iconBar);
    }
    const textValue = createText(text);
    SetChild(div,textValue);
    setTimeout(() => {
        div.remove();
    },duration ?? 2000);
    SetChild(page,div);
   
}