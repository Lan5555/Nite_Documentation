import { CreateNode, SetChild, Style } from "../../lib/state"

export const Holder = ({items}:any):HTMLElement => {
    const node = CreateNode('div') as HTMLElement;
    Style(node,'flex justify-center gap-2');
    SetChild(node,...items);
    return node;
}