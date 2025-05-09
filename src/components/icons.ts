import { createNode, Style } from "../../lib/state"
interface Props{
    iconStyle?:string
}
export const useFontAwesomeIcon = ({iconStyle}:Props):HTMLElement => {
    const icon = createNode('i');
    Style(icon,iconStyle ?? 'fa fa-user');
    return icon;
}