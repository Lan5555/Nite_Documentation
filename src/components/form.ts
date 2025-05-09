import { CreateNode, SetChild, Style, Vanilla } from "../../lib/state";
import { makePayment } from "../hooks/flutterwave";
import { MediaQuery } from "../hooks/mediaquery";
import { isOn, setIsOn } from "../hooks/overlayState";
import { WatchFunction } from "../hooks/watch";
import { createText2 } from "../pages/homepage/home";
import { Button } from "./button";
import { useFontAwesomeIcon } from "./icons";


export const FormBar = ():HTMLButtonElement => {
    const [formState,setFormState,observe] = WatchFunction<string>('');
    const desktop = window.matchMedia('(min-width:1024px)');
    const tablet = window.matchMedia('(min-width:542px) and (max-width:1024px)');
    const mobile = window.matchMedia('(max-width:600px)');
    MediaQuery({
        output:(media) => setFormState(media)
    });
    const support = Button({
        variant:'contained',
        text:'Buy developer a cup of coffee☕'
    }) as HTMLButtonElement;
    const [amountText,setAmountText,observe1] = WatchFunction<string>('Buy coffee for');
    const [details,setDetails,observer] = WatchFunction<Record<any,any>>({});

    const formHolder = CreateNode('div');
    Style(formHolder,`h-50-screen flex justify-center`);
    Vanilla(formHolder,{
        position:'fixed',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        width: mobile.matches ? '90%' : tablet.matches ? '70%' : '30%'
    });
    observe(()=>{
        Vanilla(formHolder,{
        width: mobile.matches ? '90%' : tablet.matches ? '70%' : '30%'
        });
    });
    const form = CreateNode('form') as HTMLFormElement;
    const text = createText2('Kindly fill in the details');
    SetChild(form,text);
    Style(form,`w-100 h-60-screen rounded p-3 flex justify-center flex-col gap-2 relative shadowXl bg-white z-20 fade-in`);
    const icons = ['fa fa-user absolute top-2 left-1 text-red','fa fa-envelope absolute top-2 left-1 text-yellow','fa fa-phone absolute top-2 left-1 text-blue','fa fa-wallet absolute top-2 left-1 text-green'];
    ['Name','Email','Phone number','Amount'].forEach((element,index) => {
        const input = CreateNode('input') as HTMLInputElement;
        const inputHolder = CreateNode('div');
        Style(inputHolder,'shadow-dynamic p-1 w-100 rounded flex justify-start items-center relative');
        Vanilla(inputHolder,{
            height:'50px'
        });
        Style(input,'outline-none border-none w-90');
        Vanilla(input,{
            paddingLeft:'30px'
        });
        input.placeholder = element;
        input.required = true;
        const icons1 = useFontAwesomeIcon({iconStyle:icons[index]});
        SetChild(inputHolder,icons1);
        SetChild(inputHolder,input);
        
        input.addEventListener('input',(e:any)=>{
            if(index == 0){
                input.type = 'text'
                setDetails({...details(),name:e.target.value.toString()});
            }else if(index == 1){
                input.type = 'email'
                setDetails({...details(),email:e.target.value.toString()});
            }else if(index == 2){
                input.type = 'number'
                setDetails({...details(),phone:e.target.value.toString()});
            }else if(index == 3){
                input.type = 'number'
                setDetails({...details(),price:parseInt(e.target.value)});
                setAmountText(`Buy coffee for ₦${e.target.value}`);
            }
        });
        SetChild(form,inputHolder);
    })
    const button = Button({
        variant:'contained',
        text:amountText()
    });
    button.type = 'submit';
    
    
    
    observe1(()=>{
        button.innerHTML = amountText();
    });
    
    SetChild(form,button);
    form.addEventListener('submit',(e) => {
        e.preventDefault();
        makePayment({
           price:details()['price'],
           phone:details()['phone'],
           name:details()['name'],
           email:details()['email']
        });
        document.body.removeChild(formHolder);
        setIsOn(!isOn);
    });
    const cancel = useFontAwesomeIcon({iconStyle:'fa fa-close absolute top-2 right-2 cursor-pointer'});
    SetChild(form,cancel);
    SetChild(formHolder,form);
    cancel.onclick = () =>{
        setIsOn(!isOn);
        document.body.removeChild(formHolder);
    }
    support.onclick = () => {
        setIsOn(!isOn());
        document.body.appendChild(formHolder);
    }
    return support;
}