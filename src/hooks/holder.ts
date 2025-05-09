import { createNode, setChild, Style } from "../../lib/state"

export const Holder = ({items}:any):HTMLElement => {
    const node = createNode('div') as HTMLElement;
    Style(node,'flex justify-center gap-2');
    setChild(node,...items);
    return node;
}