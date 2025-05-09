import { isOn, observeIsOn } from "../hooks/overlayState";
import { animate, createNode, Style, vanilla } from "../../lib/state";

export const Overlay = (): HTMLElement => {
    const bar = createNode('page');

    // React to isOn state
    observeIsOn(() => {
        if (!isOn()) {
            animate.fadeOut(bar,0.3,false);
            setTimeout(() => {
                bar.remove();
            },300);
            
        }
    });

    // Apply styles
    vanilla(bar, {
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    });

    Style(bar, 'fixed top-0 bottom-0 left-0 right-0 transition bg-grey');

    // Animate in
    animate.fadeIn(bar, 0.3, false);

    return bar;
};
