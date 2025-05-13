import { CreateNode } from "../../lib/state";
import { Button } from "../components/button";
import { WatchFunction } from "./watch";

const [open,setOpen,observer3] = WatchFunction(false);
export {open,setOpen,observer3};

const [index, setIndex] = WatchFunction(0);
export {index,setIndex};
export const searchInput = CreateNode('input') as HTMLInputElement;


export const back = Button({
        variant:'contained',
        text:'Back',
        icon:'arrow-left'
    });
    
    export const next = Button({
        variant:'contained',
        text:'Next',
        icon:'arrow-right'
});