import { isOn, observeIsOn } from "../hooks/overlayState";
import { animate, createNode, Style, vanilla } from "../../lib/state";

export const Overlay = (): HTMLElement => {
    const bar = createNode('page');

    // React to isOn state
    observeIsOn(() => {
        if (!isOn()) {
            setTimeout(() => {
                bar.remove();
                if(document.body.contains(bar)){
                    document.body.removeChild(bar);
                }
            },300);
            
        }
        if(isOn()){
            document.body.appendChild(bar);
        }
        if(bar.classList.contains('fade')){
            bar.classList.remove('fade');
            bar.classList.add('hide');
        }else if(bar.classList.contains('hide')){
            bar.classList.remove('hide');
            bar.classList.add('fade');
        }
        
    });

    // Apply styles
    vanilla(bar, {
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    });

    Style(bar, 'fixed top-0 bottom-0 left-0 right-0 transition bg-grey hide');

    // Animate in
    animate.fadeIn(bar, 0.3, false);

    return bar;
};

Overlay();
