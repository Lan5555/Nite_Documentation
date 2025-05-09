import { CreateNode, Watch, Vanilla, Style, SetChild } from "../../lib/state";
import { createClass } from "./class";
import { WatchFunction } from "../hooks/watch";
interface Props{
    activeColor:string
    inactiveColor:string
    activeTrackColor?:string
    inActiveTrackColor?:string
    isClicked:(val:any) => any
}
export const SwitchBar = ({activeColor, inactiveColor, activeTrackColor, inActiveTrackColor, isClicked}:Props) => {
    const Switch1 = CreateNode('div');
    const switchTrack  = CreateNode('div');
    const [value, setValue, observe] = WatchFunction(false);
    const [condition, setCondition, observer] = WatchFunction(false);

    Vanilla(Switch1,{
    width:'40px',
    backgroundColor: inactiveColor ?? 'white'
    
    });
    createClass('rounded-sm',['border-radius:8px;']);
    Style(Switch1,'shadowXl rounded relative right-5 h-auto');
    Style(switchTrack,'circle w-60 cursor-pointer hover transition');
    Vanilla(switchTrack,{
    height:'25px',
    backgroundColor: inActiveTrackColor ?? 'plum'
    });

    observer(()=>{
      Vanilla(switchTrack,{
        height:'25px',
        backgroundColor: condition() ? activeTrackColor : inActiveTrackColor,
        marginLeft: condition() ? '20px' : ''
        });
        Vanilla(Switch1,{
          width:'40px',
          backgroundColor: condition() ? activeColor : inactiveColor
          });
    });

    switchTrack.addEventListener('click',()=>{
      setCondition(!condition());
      setValue(!value());
      isClicked(value());
    })
    SetChild(Switch1,switchTrack);
    
    return Switch1;
  }
