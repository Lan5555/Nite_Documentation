import { animate, createNode, setChild, Style, vanilla, Watch } from "../../lib/state"
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
    const div = createNode('div');
    animate.slideInRight(div,0.3,false);
    Style(div,`rounded flex-container flex-col p-1 ${color != 'white' ? 'shadow':'shadowXl'} fixed top-5 right-5`);
    vanilla(div,{
        backgroundColor: color ?? 'white',
        zIndex:100
    });
    
    if(type == 'warning'){
        iconBar = useFontAwesomeIcon({iconStyle: 'fa fa-triangle-exclamation text-red'});
        setChild(div,iconBar);
    }else if(type == 'success'){
        iconBar = useFontAwesomeIcon({iconStyle:'fa fa-check text-green'});
        setChild(div,iconBar);
    }
    const textValue = createText(text);
    setChild(div,textValue);
    setTimeout(() => {
        div.remove();
    },duration ?? 2000);
    setChild(page,div);
   
}