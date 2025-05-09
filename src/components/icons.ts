import { CreateNode, Style } from "../../lib/state"
interface Props{
    iconStyle?:string
}
export const useFontAwesomeIcon = ({iconStyle}:Props):HTMLElement => {
    const icon = CreateNode('i');
    Style(icon,iconStyle ?? 'fa fa-user');
    return icon;
}