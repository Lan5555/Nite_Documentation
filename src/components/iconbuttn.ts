import { CreateNode, SetChild, Style, Text, Vanilla} from "../../lib/state"
import { useFontAwesomeIcon } from "./icons"

interface Props{
    icon:string
    onPressed:() => void
    label:string
    style?:string
}
export const iconButton = ({icon,onPressed,label,style}:Props) => {
    const div = CreateNode('div');
    Style(div,'flex justify-center items-center gap-2 shadow p-1 bg-black cursor-pointer');    
    Vanilla(div,{
       borderRadius:'3px',      
    });
    const labelValue = CreateNode('p');
    Style(labelValue,style ?? 'text-white');
    Text(labelValue,label);
    const iconValue = useFontAwesomeIcon({iconStyle:icon});
    SetChild(div,iconValue);
    SetChild(div,labelValue);
    Vanilla(div,{
        height:'20px',
    })
    div.addEventListener('click',()=>{
        onPressed()
    });
    return div;

}