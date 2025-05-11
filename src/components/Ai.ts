import { CreateNode, Style, Vanilla, Text, SetChild } from "../../lib/state";
import { analyzeContent } from "../bot/guide_model";
import { _Text } from "../hooks/animated_text";
import { MediaQuery } from "../hooks/mediaquery";
import { isOn, setIsOn } from "../hooks/overlayState";
import { WatchFunction } from "../hooks/watch";
import { createText } from "../pages/homepage/home";
import { iconButton } from "./iconbuttn";
import { useFontAwesomeIcon } from "./icons";
import { Toast } from "./toast";

export const Ai = () => {
    const [mediaquery, setMedia, observe] = WatchFunction<string>('desktop');
    const [barVisible, setBarVisible, observeBar] = WatchFunction<boolean>(false);
    const [botAnswer, setBotAnswer] = WatchFunction<string>('');
    const [textState, setState, observeState] = WatchFunction<'bot' | 'user'>('bot');
    const [userAnswer, setUserAnswer] = WatchFunction<HTMLElement>();
    const [botNode, setBotNode] = WatchFunction<HTMLElement>();
    const [isVisible,setVisible,observeLoader] = WatchFunction<boolean>(false);
    const desktop = window.matchMedia('(min-width:1024px)');
    const tablet = window.matchMedia('(min-width:542px) and (max-width:1024px)');
    const mobile = window.matchMedia('(max-width:600px)');

    MediaQuery({
        output: (media): any => setMedia(media)
    });

    const askAiBar = CreateNode('div');
    Style(askAiBar, 'bg-black shadow rounded fixed bottom-4 right-3 z-20 flex flex-col items-center justify-center p-1 float cursor-pointer');
    const askAiText = CreateNode('h1');
    Style(askAiText, 'text-white');
    Text(askAiText, 'Ask AI');
    const askAiIcon = useFontAwesomeIcon({ iconStyle: 'fa-solid fa-robot text-white' });
    SetChild(askAiBar, askAiIcon);
    SetChild(askAiBar, askAiText);

    Vanilla(askAiBar, {
        width: (mobile.matches || tablet.matches)? '13%':'7%',
        height: (mobile.matches || tablet.matches) ? '43px':'80px',
    });

    Vanilla(askAiText, {
        fontSize: (mobile.matches || tablet.matches) ? '10pt':'16pt'
    });

    askAiBar.addEventListener('click', () => {
        setBarVisible(!barVisible());
        setIsOn(!isOn())
    });

    document.body.appendChild(askAiBar);

    const containerHolder = CreateNode('div');
    Vanilla(containerHolder, {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex:500
    });

    const container = CreateNode('div');
    Style(container, 'flex flex-col items-center justify-between shadowXl bg-white rounded slide-in');
    Vanilla(container, {
        width: mobile.matches ? '85vw' : tablet.matches ? '70vw' : '50vw',
        height: mobile.matches ? '75vh':'80vh',
    });

    observe(() => {
        Vanilla(container, {
            width: mediaquery() == 'mobile'  ? '85vw' : mediaquery() == 'tablet'  ? '70vw' : '50vw',
            height: '80vh',
        });

        Vanilla(askAiBar, {
        width: (mediaquery() == 'mobile' || mediaquery() == 'tablet' )? '10%':'7%',
        height: (mediaquery() == 'mobile'  || mediaquery() == 'tablet' ) ? '50px':'80px',
    });

        Vanilla(askAiText, {
        fontSize: (mobile.matches || tablet.matches) ? '10pt':'16pt'
    });

    });

    SetChild(containerHolder, container);

    observeBar(() => {
        if (barVisible()) {
            document.body.appendChild(containerHolder);
        } else {
           containerHolder.remove()
        }
    });

    const headerBar = CreateNode('div');
    Style(headerBar, 'flex items-center justify-start gap-2 w-100 bg-white shadowXl relative');
    Vanilla(headerBar, {
        width: '100%',
        height: '13vh',
        borderBottomLeftRadius: '30px'
    });

    const robot = useFontAwesomeIcon({ iconStyle: 'fa-solid fa-robot absolute left-2 top-2' });
    Vanilla(robot, { fontSize: '20pt' });
    SetChild(headerBar, robot);

    const headerText = CreateNode('h1');
    Vanilla(headerText, {
        fontSize: mobile.matches ? '1.5rem':'2rem',
        color: 'black',
        fontWeight: 'bold'
    });
    Style(headerText, 'ml-6');
    Text(headerText, 'AI Assistant');
    SetChild(headerBar, headerText);

    const closeButton = useFontAwesomeIcon({ iconStyle: 'fa-solid fa-xmark' });
    closeButton.addEventListener('click', () => {
        setBarVisible(false);
        setIsOn(!isOn());
    });
    Vanilla(closeButton, { fontSize: '15pt' });
    Style(closeButton, 'absolute right-3 top-2 cursor-pointer');
    SetChild(headerBar, closeButton);

    const chatContainer = CreateNode('div');
    Vanilla(chatContainer, {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        padding: '20px',
        boxSizing: 'border-box'
    });

    const messageList = CreateNode('ul');
    messageList.style.listStyle = 'none';
    Vanilla(messageList, {
        width: '100%',
        padding: '0',
        margin: '0'
    });

    SetChild(chatContainer, messageList);

    const chatInputButtonHolder = CreateNode('div');
    Vanilla(chatInputButtonHolder, {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '6vh',
        padding: '10px',
        boxSizing: 'border-box',
        marginBottom: '10px',
    });

    const chatInput = CreateNode('textarea') as HTMLTextAreaElement; // Use textarea instead of input
    Vanilla(chatInput, {
    backgroundColor: 'white',
    boxSizing: 'border-box',   // Ensures padding is included in width/height calculation
    padding: '8px',
    width: '85%',
    height: '5.5vh',            // Give it a height to allow multiple lines
    borderRadius: '3px',
    border: '1px solid #ccc',
    fontSize: mobile.matches ? '0.9rem':'1rem',
    resize: 'vertical',       // Optional: allow vertical resizing
    });
    chatInput.placeholder = 'Type your message here...';
    Style(chatInput, 'hide-scroll-bar-v');


    const sendButton = useFontAwesomeIcon({ iconStyle: 'fa-solid fa-paper-plane' });

    sendButton.addEventListener('click', async () => {
        const message = chatInput.value.trim();
        if (!message) return;

        const textNode = CreateNode('span');
        Text(textNode, message);
        const userMessageNode = userMessage(textNode);
        setUserAnswer(userMessageNode);
        setState('user');

        setVisible(true);
        const botResponse = await analyzeContent(message);
        setVisible(false);
        setBotAnswer(botResponse);

        const botMessageNode = aiMessage(botResponse);
        setBotNode(botMessageNode);
        setState('bot');

        chatInput.value = '';
    });

    const button = iconButton({
        icon: 'fa-solid fa-paper-plane text-white',
        onPressed: () => sendButton.click(),
        label: 'Send',
        style: 'text-white'
    });

    SetChild(chatInputButtonHolder, chatInput);
    SetChild(chatInputButtonHolder, button);

    SetChild(container, headerBar);
    SetChild(container, chatContainer);
    SetChild(container, chatInputButtonHolder);
    const loader = showLoader();

    observeState(() => {
        if (textState() === 'user' && userAnswer()) {
            SetChild(messageList, userAnswer());
        }
        if (textState() === 'bot' && botNode()) {
            SetChild(messageList, botNode());
            
        }
        chatContainer.scrollTop = chatContainer.scrollHeight;
    });
    observeLoader(() => {
    if (isVisible()) {
        // Add loader if bot response is not yet available and isVisible is true
        if (!messageList.contains(loader)) {
            SetChild(messageList, loader);
        }
    } else {
        // Remove loader when bot response is available
        if (messageList.contains(loader)) {
            loader.remove();
        }
    }
});
    
    function userMessage(textNode: HTMLElement) {
        const userMessageBar = CreateNode('div');
        Vanilla(userMessageBar, {
            whiteSpace: 'pre-line',
            backgroundColor: 'black',
            color: 'white',
            padding: '10px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            borderBottomLeftRadius: '10px',
            marginBottom: '10px',
            maxWidth: '50%',
            alignSelf: 'flex-end',
            display: 'block',
            textAlign: 'right',
            marginLeft: 'auto',           // ✅ push to right
            marginRight: '10px',  
            fontSize:mobile.matches ? '10pt':''        // ✅ spacing from edge
        });
        SetChild(userMessageBar, textNode);
        return userMessageBar;
    }

    function aiMessage(text: string) {
        const aiMessageBar = CreateNode('div');
        Vanilla(aiMessageBar, {
            whiteSpace: 'pre-line',
           borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '20px',
            backgroundColor: '#f0f0f0',
            color: 'black',
            padding: '10px',
            marginBottom: '10px',
            maxWidth: mobile.matches ? '80%':'50%',
            alignSelf: 'flex-start',
            display: 'block',
            textAlign: 'left',
            position: 'relative',
        });
        const [currentState,setState,observeState] = WatchFunction<boolean>(false);
        const copyIcon = useFontAwesomeIcon({ iconStyle: 'fa-solid fa-copy text-black cursor-pointer' });
        const iconANdText = CreateNode('div');
        Style(iconANdText, 'flex items-center justify-center gap-1 p-1 shadow-dynamic cursor-pointer');
        SetChild(iconANdText, copyIcon);
        const textValue = createText('Copy');
        SetChild(iconANdText, textValue);

        Vanilla(iconANdText, {
            borderRadius:'10px',
            backgroundColor: '#f0f0f0',
            position: 'absolute',
            top:'50%',
            left:'50%',
            transform: 'translate(-50%,-50%)',
            width:mobile.matches ?'24%':'20%',
            height:'10px'
        });

        iconANdText.addEventListener('click', () => {
            navigator.clipboard.writeText(text);
            Toast({text:'Copied to clipboard', type:'success',page:document.body});
        });

         if(!currentState()){
            iconANdText.style.display = 'none';
        }else{
            iconANdText.style.display = 'flex';
        }

        observeState(()=>{
            if(!currentState()){
            iconANdText.style.display = 'none';
            aiMessageBar.style.backgroundColor = '#f0f0f0';
            aiMessageBar.style.color = '';
        }else{
            iconANdText.style.display = 'flex';
            aiMessageBar.style.backgroundColor = 'grey';
            aiMessageBar.style.color = 'black';
            aiMessageBar.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        }
        })
        
        _Text.setText('span', text,aiMessageBar);
            _Text.animate();
            _Text.Style({
                color: 'black',
                textShadow: '',
                fontWeight: '',
                fontFamily: 'orbitron, serif',
                fontSize: mobile.matches ? '0.8rem':'1rem',
                letterSpacing: '1.5px',
            });
        SetChild(aiMessageBar, iconANdText);
        aiMessageBar.addEventListener('mouseover', () => {
            setState(true);
        });

        aiMessageBar.addEventListener('mouseout', () => {
            setState(false);
        });
        
        return aiMessageBar;
    }

    function showLoader(){
        const loader = CreateNode('div');
        Style(loader,'loader-dots');
        return loader;
    }

    return askAiBar;
};
