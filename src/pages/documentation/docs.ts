import { CreateNode, SetChild, Style, Text, Vanilla } from "../../../lib/state"
import { Button } from "../../components/button";
import { useFontAwesomeIcon } from "../../components/icons";
import { flyTo } from "../../components/scroll";
import { WatchFunction } from "../../hooks/watch";
import { createText, createText2 } from "../homepage/home";
import { _AnimateExample, explainAnimate } from "./functions/animate";
import { _applyStateExample, explainApplyState } from "./functions/applystate";
import { _ButtonExample, explianButton } from "./functions/button";
import { _ColumnExample, explainColumn } from "./functions/column";
import { _CreateNodeExample, explianCreateNode } from "./functions/create_node";
import { _listenForEventExample, explainListenForEvent } from "./functions/event";
import { _futureExample, explainFuture } from "./functions/future";
import { _UseFontAwesomeIconExample, explianUseFontAwesomeIcon } from "./functions/icon";
import { _renderInnerExample, explainRenderInner } from "./functions/inner";
import { _PrintErrExample, explainPrintErr } from "./functions/print";
import { _removeClassExample, explainRemoveClass } from "./functions/remove";
import { _renderExample, explainRender } from "./functions/render";
import { _routeExample, explainRoute } from "./functions/route";
import {  _RowExample2, explainRow } from "./functions/row";
import { _SetChildExample, explianSetChild } from "./functions/setchild";
import { _setInnerExample, explainSetInner } from "./functions/setInner";
import { _useSpriteSheetExample, explainUseSpriteSheet } from "./functions/sprite";
import { _StyleExample, explianStyle } from "./functions/style";
import { _SwitchBarExample, explainSwitchBar } from "./functions/switch";
import { _TextExample, explianText } from "./functions/text";
import { _TimerExample, explainTimer } from "./functions/time";
import { _VanillaExample, explianVanilla } from "./functions/vanilla";
import { _WatchExample, explainWatch } from "./functions/watch";
import bg2 from '../../../public/bg2.jpg'
import { Toast } from "../../components/toast";
import { setId } from "../../hooks/identification";
import { back, index, next, setIndex } from "../../hooks/dropdownstate";
import { _renderBodyExample, explainRenderBody } from "./functions/renderbody";

export const Documentation = ():HTMLElement => {
    const page = CreateNode('div');
    Vanilla(page, {
        flex: '1',
        marginTop: '60px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2px',
    });
    Style(page,'relative');

    const header = createText2(`NITE's official documentation\nTypescript | Javascript | Java`);
    //Text(header,'Documentation');
    SetChild(page,header);

    const contentWrapper = CreateNode('div'); // container for dynamic content
    Style(contentWrapper, 'flex flex-col gap-5 w-100 justify-center items-center');
    SetChild(page, contentWrapper);

    const navigationButtons = CreateNode('div');
    Style(navigationButtons,'w-90 p-1 flex justify-around');
    

    SetChild(navigationButtons, back);
    
    SetChild(page, navigationButtons);

    // Watch index

    const clearContent = () => {
        contentWrapper.textContent = '';
    }

    

    // Modified batch1 to accept parent node
    const batch1 = (parent:any) => {
        const _node1 = explianCreateNode();
        _node1.id = 'create-node';
        
        

        const _createNode = explainer({node:_node1});
        SetChild(parent,_createNode);
        example({page:parent,large:true,textVal:`Typescript:\n
        function CreateNode<K extends keyof HTMLElementTagNameMap>(
        tag: K
        ): HTMLElementTagNameMap[K] {
         return document.createElement(tag);
        }\n
        🔒 Benefits
        Prevents invalid tag names at compile time.

        Strongly typed DOM manipulation without casting.

        Easily extensible to support more arguments later (e.g., attributes or children).
        `});
        const _createNodeText = _CreateNodeExample();
        const _createNodeExample = explainerExample({node:_createNodeText,text:_createNodeText.textContent});
        SetChild(parent,_createNodeExample);
        example({page:_createNodeExample,textVal:'This creates an HTMLElement and assigns it to the variable at the left'});

        const _node2 = explianSetChild();
        _node2.id = 'set-child';
        const _setChild = explainer({node:_node2});
        SetChild(parent,_setChild);
        const _setChildText = _SetChildExample();
        const _setChildExample = explainerExample({node:_setChildText,text:_setChildText.textContent});
        SetChild(parent,_setChildExample);
        example({page:_setChildExample,textVal:`This creates a div and a paragraph element,\nSets the text 'Hello world' to the paragraph element\nthen finally,\nAppends it to the div.`});

        const _node3 = explainFuture();
        _node3.id = 'future-creator';
        const _future = explainer({node:_node3,color:'white'});
        SetChild(parent,_future);
        const _futureText = _futureExample();
        const _setFutureExample = explainerExample({node:_futureText,text:_futureText.textContent});
        SetChild(parent,_setFutureExample);
        example({page:_setFutureExample,textVal:`This handles asynchronous operations\nIf there's a suspense,\nA loader would be displayed.`});

        const _node4 = explainAnimate();
        _node4.id = 'animate';
        const _animate = explainer({node:_node4});
        SetChild(parent,_animate);
        const _animateText = _AnimateExample();
        const _setAnimateExample = explainerExample({node:_animateText,text:_animateText.textContent});
        SetChild(parent,_setAnimateExample);
        example({page:_setAnimateExample,textVal:`This adds a slideIn animation effect to the div`});
    }

    const batch2 = (parent:any) => {
        const _node1 = explainWatch();
        _node1.id = 'watch';
        const _createNode = explainer({node:_node1});
        SetChild(parent,_createNode);
        example({page:parent,large:true});
        const _watch = _WatchExample();
        const _watchExample = explainerExample({node:_watch,text:_watch.textContent});
        SetChild(parent,_watchExample);
        example({page:_watchExample,textVal:'This watches for state changes'});

        const _node2 = explainRenderInner();
        _node2.id = 'render-inner';
        const _renderInner = explainer({node:_node2});
        SetChild(parent,_renderInner);
        example({page:parent,large:true});
        const _renderInnerText = _renderInnerExample();
        const _renderInnerexample = explainerExample({node:_renderInnerText,text:_renderInnerText.textContent});
        SetChild(parent,_renderInnerexample);
        example({page:_renderInnerexample,textVal:'Usually used in game development or so.'});

        const _node3 = explainRoute();
        _node3.id = 'router';
        const _route = explainer({node:_node3});
        SetChild(parent,_route);
        example({page:parent,large:true});
        const _routeText = _routeExample();
        const _routeTextExample = explainerExample({node:_routeText,text:_routeText.textContent});
        SetChild(parent,_routeTextExample);
        example({page:_routeTextExample,textVal:'This handles routing between pages'});

        const _node4 = explainTimer();
        _node4.id = 'timer';
        const _Timer = explainer({node:_node4});
        SetChild(parent,_Timer);
        example({page:parent,large:true});
        const _TimerText = _TimerExample();
        const _TimerTextExample = explainerExample({node:_TimerText,text:_TimerText.textContent});
        SetChild(parent,_TimerTextExample);
        example({page:_TimerTextExample,textVal:'This is handles time operations'});
    }

    const batch3 = (parent:any) => {
        const _node1 = explainUseSpriteSheet();
        _node1.id = 'use-sprite-sheet';
        const _useSprite = explainer({node:_node1});
        SetChild(parent,_useSprite);
        example({page:parent,large:true});
        const _sprite = _useSpriteSheetExample();
        const _spriteExample = explainerExample({node:_sprite,text:_sprite.textContent});
        SetChild(parent,_spriteExample);
        example({page:_spriteExample,textVal:'This watches for state changes'});

        const _node2 = explainPrintErr();
        _node2.id = 'print';
        const _print = explainer({node:_node2});
        SetChild(parent,_print);
        example({page:parent,large:true});
        const _Print = _PrintErrExample();
        const _PrintExample = explainerExample({node:_Print,text:_Print.textContent});
        SetChild(parent,_PrintExample);
        example({page:_PrintExample,textVal:'Logs to console'});

        const _node3 = explianVanilla();
        _node3.id = 'vanilla';
        const _vanilla = explainer({node:_node3});
        SetChild(parent,_vanilla);
        example({page:parent,large:true});
        const _vanillaText = _VanillaExample();
        const _vanillaTextExample = explainerExample({node:_vanillaText,text:_vanillaText.textContent});
        SetChild(parent,_vanillaTextExample);
        example({page:_vanillaTextExample,textVal:'This is used to apply inline styling'});

        const _node4 = explianText();
        _node4.id = 'text';
        const _text = explainer({node:_node4});
        SetChild(parent,_text);
        example({page:parent,large:true});
        const _Text = _TextExample();
        const _TextE = explainerExample({node:_Text,text:_Text.textContent});
        SetChild(parent,_TextE);
        example({page:_TextE,textVal:'This is used to add text to text supported html elements.'});
    }
    const batch4 = (parent:any) => {
        const _node1 = explainSwitchBar();
        _node1.id = 'switch-bar';
        const _switch = explainer({node:_node1});
        SetChild(parent,_switch);
        example({page:parent,large:true});
        const _switchBar = _SwitchBarExample();
        const _switchBarExample = explainerExample({node:_switchBar,text:_switchBar.textContent});
        SetChild(parent,_switchBarExample);
        example({page:_switchBarExample,textVal:'A Switch bar'});

        const _node2 = explainRenderBody();
        _node2.id = 'render-body';
        const _renderBody = explainer({node:_node2});
        SetChild(parent,_renderBody);
        example({page:parent,large:true});
        const _renderBodyText = _renderBodyExample();
        const _RenderBodyExample = explainerExample({node:_renderBodyText,text:_renderBodyText.textContent});
        SetChild(parent,_RenderBodyExample);
        example({page:_RenderBodyExample,textVal:'This is usually called just once at the layout of the app'});

        const _node3 = explianStyle();
        _node3.id = 'style';
        const _style = explainer({node:_node3});
        SetChild(parent,_style);
        example({page:parent,large:true});
        const _styleText = _StyleExample();
        const _styleTextExample = explainerExample({node:_styleText,text:_styleText.textContent});
        SetChild(parent,_styleTextExample);
        example({page:_styleTextExample,textVal:'This applies custom NITE styles'});

        const _node4 = explainRemoveClass();
        _node4.id = 'remove-class'
        const _remove = explainer({node:_node4});
        SetChild(parent,_remove);
        example({page:parent,large:true});
        const _RemoveClassExample = _removeClassExample();
        const _RemoveClassExampleExample = explainerExample({node:_RemoveClassExample,text:_RemoveClassExample.textContent});
        SetChild(parent,_RemoveClassExampleExample);
        example({page:_RemoveClassExampleExample,textVal:'This removes a class'});
    }

    
    const batch5 = (parent:any) => {
        const _node1 = explainRow();
        _node1.id = 'row';
        const _row = explainer({node:_node1});
        SetChild(parent,_row);
        example({page:parent,large:true});
        const _Row = _RowExample2();
        const _RowExample = explainerExample({node:_Row,text:_Row.textContent});
        SetChild(parent,_RowExample);
        example({page:_RowExample,textVal:'Aligns elements in a row'});

        const _node2 = explainColumn();
        _node2.id = 'column';
        const _column = explainer({node:_node2});
        SetChild(parent,_column);
        example({page:parent,large:true});
        const _columnExample = _ColumnExample();
        const _columnTextExample = explainerExample({node:_columnExample,text:_columnExample.textContent});
        SetChild(parent,_columnTextExample);
        example({page:_columnTextExample,textVal:'Aligns elements in a column'});

        const _node3 = explianUseFontAwesomeIcon();
        _node3.id = 'use-fontawesome-icon';
        const _icon = explainer({node:_node3});
        SetChild(parent,_icon);
        example({page:parent,large:true});
        const _iconClass = _UseFontAwesomeIconExample();
        const _IconClassExample = explainerExample({node:_iconClass,text:_iconClass.textContent});
        SetChild(parent,_IconClassExample);
        example({page:_IconClassExample,textVal:'This adds fontawesome icons if available.'});

        const _node4 = explianButton();
        _node4.id = 'button';
        const _button = explainer({node:_node4});
        SetChild(parent,_button);
        example({page:parent,large:true});
        const _buttonComponent = _ButtonExample();
        const _buttonComponentExample = explainerExample({node:_buttonComponent,text:_buttonComponent.textContent});
        SetChild(parent,_buttonComponentExample);
        example({page:_buttonComponentExample,textVal:'This adds a custom NITE button to your app.'});
    }

    const batch6 = (parent:any) => {
        const _node1 = explainApplyState();
        _node1.id = 'apply-state';
        const _applyState = explainer({node:_node1});
        SetChild(parent,_applyState);
        example({page:parent,large:true});
        const _state = _applyStateExample();
        const _stateExample = explainerExample({node:_state,text:_state.textContent});
        SetChild(parent,_stateExample);
        example({page:_stateExample,textVal:'Handles reactive states'});

        const _node2 = explainListenForEvent();
        _node2.id = 'listen-for-event';
        const _event = explainer({node:_node2});
        SetChild(parent,_event);
        example({page:parent,large:true});
        const _eventListener = _listenForEventExample();
        const _eventListenerExample = explainerExample({node:_eventListener,text:_eventListener.textContent});
        SetChild(parent,_eventListenerExample);
        example({page:_eventListenerExample,textVal:'This handles event listeners'});

        const _node3 = explainRender();
        _node3.id = 'render';
        const _render = explainer({node:_node3});
        SetChild(parent,_render);
        example({page:parent,large:true});
        const _renderComponent = _renderExample();
        const _RenderComponent = explainerExample({node:_renderComponent,text:_renderComponent.textContent});
        SetChild(parent,_RenderComponent);
        example({page:_RenderComponent,textVal:''});

        const _node4 = explainSetInner();
        _node4.id = 'set-inner';
        const _inner = explainer({node:_node4});
        SetChild(parent,_inner);
        example({page:parent,large:true});
        const _setInner = _setInnerExample();
        const _SetInnerExample = explainerExample({node:_setInner,text:_setInner.textContent});
        SetChild(parent,_SetInnerExample);
        example({page:_SetInnerExample,textVal:'Sets HTML content of an element (unlike Text() which escapes content).'});

    }
    
    const batchFunctions = [batch1,batch2,batch3,batch4,batch5,batch6 /*, batch2, batch3 etc if needed */];
    const [currentIndex,setCurrentIndex, observe] = WatchFunction<number>(0);

    const renderBatch = (i: number) => {
        clearContent();
        if (batchFunctions[i]) {
            batchFunctions[i](contentWrapper);
        }
    }

    next.onclick = () => {
        const newIndex = index() + 1;
        if (newIndex < batchFunctions.length) {
            setIndex(newIndex);
            renderBatch(newIndex);
            setCurrentIndex(newIndex);
            page.scrollIntoView({behavior:"smooth"});
        }
    }

    back.onclick = () => {
        const newIndex = index() - 1;
        if (newIndex >= 0) {
            setIndex(newIndex);
            renderBatch(newIndex);
            setCurrentIndex(newIndex);
            page.scrollIntoView({behavior:"smooth"});
        }
    }

    // Render first batch
    renderBatch(0);
    const pagesHolder = CreateNode('div');
    Style(pagesHolder,'flex items-center justify-center gap-1');

    

    batchFunctions.forEach((element,index) => {
        const div = CreateNode('div');
        Style(div,'shadow-dynamic flex-container rounded cursor-pointer');
        Vanilla(div,{
            height:'10px',
            width:'10px',
            backgroundColor: index == currentIndex() ? 'blue' : 'white'
        });
        observe(() => {
            Vanilla(div,{
                backgroundColor: index == currentIndex() ? 'blue' : 'white'
            });
        });
        const text = CreateNode('p');
        Text(text,``);
        SetChild(div,text);
        SetChild(pagesHolder,div);
        SetChild(navigationButtons,pagesHolder);
        div.addEventListener('click',()=> handleDivClick(index))
    });
    function handleDivClick(index:number){
        setCurrentIndex(index);
        setIndex(index);
        renderBatch(index);
        page.scrollIntoView({behavior:"smooth"});
    }
    SetChild(navigationButtons, next);
    flyTo({page:page,where:'bottom'});

    return page;
}


function explainer({node,color}:any){
    const div = CreateNode('div');
    Vanilla(div,{
        width:'90%',
        padding:'30px',
        backgroundColor:color ?? 'rgba(26, 157, 251, 0.23)',
        backgroundImage:`url(${bg2})`,
        backgroundPosition:'center',
        backgroundSize:'cover'
    });
    SetChild(div,node);
    Style(div,'flex flex-col rounded shadow-dynamic');
    return div;
}
export function example({page,textVal, large=false}:any){
    const div = CreateNode('div');
    Vanilla(div,{
        width:'100%'
    })
    const text = createText2(textVal ?? `Example below`);
    Vanilla(text,{
    fontSize:large ? '15pt' : '12pt',
    });
    SetChild(div,text);
    SetChild(page,div)
}

function explainerExample({node,text}:any){
    const div = CreateNode('div');
    Vanilla(div,{
        width:'100%',
        padding:'30px',
        backgroundImage:`url(${bg2})`,
        backgroundPosition:'center',
        backgroundSize:'cover'

    });
    const div2 = CreateNode('div');
    Style(div2,'shadowXl p-1 relative');
    Vanilla(div2,{
        borderLeft:'4px solid blue',
        backgroundColor:'white'
    });

    SetChild(div2,node);
    SetChild(div,div2);
    const copyIcon = useFontAwesomeIcon({iconStyle:'fa fa-copy text-grey'});
    const iconContainer = Wrap({node:copyIcon});
    SetChild(div2,iconContainer);
   // SetChild(div2,copyIcon);
    iconContainer.onclick = () => {
        if(navigator.vibrate){
            navigator.vibrate(50);
        }
        navigator.clipboard.writeText(text).then(()=>{
            Toast({text:'Copied successfully',page:document.body,type:'success'});
        });
    }
    
    Style(div,'flex flex-col color');
    
    return div;
}


function Wrap({node}:any){
    const div = CreateNode('div');
    Style(div,'flex justify-center items-center');
    Vanilla(div,{
        border:'1px solid black',
        boxSizing:'border-box',
        padding:'4px'
    });
    Style(div,'absolute right-2 top-3 cursor-pointer');
    SetChild(div,node);
    return div;
}