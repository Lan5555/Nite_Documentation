import { animate, CreateNode, SetChild, Style, Vanilla } from "../../lib/state"
import { back, next, observer3, open, searchInput, setOpen } from "../hooks/dropdownstate";
import { iden } from "../hooks/identification";
import { setCurrentPageIndex } from "../hooks/routestate";
import { WatchFunction } from "../hooks/watch";
import { createText2 } from "../pages/homepage/home";

interface props{
    items?:Record<string,string>
}
export const DropDown = ({items = {}}:props) => {
    const desktop = window.matchMedia('(min-width:1024px)');
    const tablet = window.matchMedia('(min-width:542px) and (max-width:1024px)');
    const mobile = window.matchMedia('(max-width:600px)');
    const div = CreateNode('div');
    Style(div,`p-1 shadow transition ${desktop.matches ? 'w-30':'w-90'} tran absolute top-7 bg-white z-20`);
    Vanilla(div,{
        borderRadius:'5px',
        display: open() ? 'block' : 'none',
        zIndex:'200',
        maxHeight:'30vh',
        overflowY:'auto',
        overflowX:'hidden'
    });
    observer3(() => {
        Vanilla(div,{
            borderRadius:'5px',
            display: open() ? 'block' : 'none',
        })
    });
    const values = Object.keys(items);
    const id = Object.values(items);
    
    values.forEach((element,index) => {
        const subdiv = CreateNode('div');
        const text = createText2(element);
        SetChild(subdiv,text);
        SetChild(div,subdiv);
        Style(subdiv,'cursor-pointer btn-hover')
        subdiv.addEventListener('click',()=> handleClick(index));
    });
    async function handleClick(index:number){
       await holdOn(index);
    }
    
    async function holdOn(index: number) {
    return new Promise((resolve, reject) => {
        setCurrentPageIndex(1);
        const interval = setInterval(async() => {
            const updatedElement = document.getElementById(id[index]);
            if (updatedElement) {
                clearInterval(interval);
                updatedElement.scrollIntoView({ behavior: 'smooth' });
                resolve('');
               setOpen(false);
               searchInput.value = '';
            }else{
                next.click();
                const updatedElement1 = document.getElementById(id[index]);
                if(updatedElement1){
                clearInterval(interval);
                updatedElement1.scrollIntoView({ behavior: 'smooth' });
                resolve('');
                setOpen(false);
                searchInput.value = '';
                }
            }
        }, 500);
    });
}

    async function clikBtn(){
        next.click();
    }
    return div;
}