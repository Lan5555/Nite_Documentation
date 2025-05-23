import { CreateNode, SetChild, Style, Vanilla } from "../../lib/state"
import { useFontAwesomeIcon } from "./icons";

interface Props{
    page:HTMLElement,
    where:'top' | 'bottom'
}

export const flyTo = ({page,where}:Props) => {
    const div = CreateNode('div');
    Vanilla(div,{
        height:'30px',
        width:'30px',
    });
    Style(div,'flex-container bg-blue float fixed bottom-6 right-2 cursor-pointer');
    const icon = useFontAwesomeIcon({iconStyle:`${where == 'top' ? 'fa fa-arrow-up' :'fa fa-arrow-down'} text-white`});
    SetChild(div,icon);
    div.addEventListener('click',()=>{
        if(where == 'top'){
            page.scrollIntoView({behavior:"smooth"});
        }else if(where == 'bottom'){
            window?.scrollTo({
                top:page.scrollHeight,
                behavior:"smooth"
            });
        }
    });
    SetChild(page,div);
}