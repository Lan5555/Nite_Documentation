import { Column, CreateNode, SetChild, Style, Text, Vanilla } from "../../../lib/state";
import { Avatar } from "../../components/avatar";
import { createText, createText2 } from "../homepage/home";
import bg2 from '../../../public/bg2.jpg';
import java from '../../../public/icons/java.png';
import js from '../../../public/icons/js.png';
import css from '../../../public/icons/css-3.png';
import html from '../../../public/icons/html.png';
import { Button } from "../../components/button";
import dp from '../../../public/dp.jpeg';
import { Position } from "monaco-editor";
import { WatchFunction } from "../../hooks/watch";
import { MediaQuery } from "../../hooks/mediaquery";
import { FormBar } from "../../components/form";
import hero from '../../../public/nitebg.png';
import { darkColor, darkShadow, darkShadow1, prefersDark } from "../../hooks/theme";

export const About = () => {
    const page = CreateNode('div') as HTMLElement;
    const [mediaquery, setMediaQuery, observe] = WatchFunction<string>('desktop');
    const desktop = window.matchMedia('(min-width:1024px)');
    const tablet = window.matchMedia('(min-width:542px) and (max-width:1024px)');
    const mobile = window.matchMedia('(max-width:600px)');

    // Initialize media query watcher
    MediaQuery({
        output: (media) => setMediaQuery(media)
    });

    // Force a trigger of the observer on load
    setTimeout(() => {
        setMediaQuery(mediaquery());
    }, 10);

    // Base styles for page
    Vanilla(page, {
        flex: '1',
        marginTop: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '10px',
        backgroundColor:prefersDark ? darkColor : ''
    });
    Style(page, 'relative');

    // About Me Section
    const aboutMe = CreateNode('div') as HTMLElement;
    Style(aboutMe, `w-100 color p-1 flex justify-around items-center relative shadow-dynamic`);
    Vanilla(aboutMe, {
        backgroundImage: `url(${hero})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '300px'
    });

    const text = headerAndText({
        header: `Nicholas Johnson`,
        text: `Full-Stack Developer | Creator of NITE\nReact • Next.js • Flutter`
    }) as HTMLElement;
    Style(text, `relative`);

    const img = CreateNode('img') as HTMLImageElement;
    img.src = dp;
    Style(img, 'shadow-dynamic rounded');

    observe(() => {
        const currentMedia = mediaquery();
        const isMobile = currentMedia === 'mobile';
        const isTablet = currentMedia === 'tablet';

        Vanilla(aboutMe, {
            flexDirection: isMobile ? 'column' : 'row',
            height: isMobile ? 'auto' : (isTablet ? '35vh' : '40vh'),
            padding: isMobile ? '2rem 1rem' : '1rem',
            gap: isMobile ? '2rem' : '4rem'
        });

        Vanilla(text, {
            top: isMobile ? '0' : '10px',
            textAlign: isMobile ? 'center' : 'left',
            width: isMobile ? '100%' : 'auto'
        });

        Vanilla(img, {
            width: isMobile ? '10rem' : (isTablet ? '12rem' : '15rem'),
            height: isMobile ? '10rem' : (isTablet ? '14rem' : '18rem'),
            position: isMobile ? 'static' : 'relative',
            margin: isMobile ? '0 auto' : ''
        });
    });

    Vanilla(aboutMe, {
        flexDirection: mobile.matches ? 'column' : 'row',
        height: mobile.matches ? 'auto' : (tablet.matches ? '35vh' : '40vh'),
        padding: mobile.matches ? '2rem 1rem' : '1rem',
        gap: mobile.matches ? '2rem' : '4rem'
    });

    Vanilla(text, {
        top: mobile.matches ? '0' : '10px',
        textAlign: mobile.matches ? 'center' : 'left',
        width: mobile.matches ? '100%' : 'auto'
    });

    Vanilla(img, {
        width: mobile.matches ? '10rem' : (tablet.matches ? '12rem' : '15rem'),
        height: mobile.matches ? '10rem' : (tablet.matches ? '14rem' : '18rem'),
        position: mobile.matches ? 'static' : 'relative',
        margin: mobile.matches ? '0 auto' : ''
    });
    

    SetChild(aboutMe, text);
    SetChild(aboutMe, img);
    SetChild(page, aboutMe);

    // Skills Section
    const subdiv = CreateNode('div') as HTMLElement;
    Style(subdiv, `shadowXl w-100 p-1 flex relative`);
    Vanilla(subdiv,{
        backgroundColor:prefersDark ? darkColor : '',
        boxShadow: prefersDark ? darkShadow : ''
    })

    const leftText = headerAndText({
        header: `I'm a passionate full-stack developer and the creator of NITE`,
        text: `A robust development framework designed for building scalable Single Page Applications (SPAs) with ease.\n NITE goes beyond just styling; it offers a wide range of reusable functions,\n modular components, and utilities that\n streamline the entire development process\n from frontend to backend.`,
    }) as HTMLElement;
    Style(leftText, `relative font-sm`);

    const rightContainer = CreateNode('div') as HTMLElement;
    Vanilla(rightContainer, {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        padding: '20px',
        width: '100%'
    });

    const mobileRightContainer = CreateNode('div') as HTMLElement;
    Style(mobileRightContainer, 'flex flex-wrap justify-center gap-3 p-2');

    [html, java, js, css].forEach((element) => {
        const div = CreateNode('div') as HTMLElement;
        Vanilla(div, {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px'
        });

        const logo = CreateNode('img') as HTMLImageElement;
        Vanilla(logo, {
            width: '100px',
            height: 'auto',
            objectFit: 'contain'
        });
        //Style(logo, 'shadow-dynamic');
        logo.src = element;
        logo.alt = 'Tech icon';
        SetChild(div, logo);
        SetChild(rightContainer, div);

        const mobileLogo = CreateNode('img') as HTMLImageElement;
        Vanilla(mobileLogo, {
            width: '50px',
            height: '50px',
            objectFit: 'contain'
        });
        Style(mobileLogo, 'shadow-dynamic');
        mobileLogo.src = element;
        mobileLogo.alt = 'Tech icon';
        SetChild(mobileRightContainer, mobileLogo);
    });

    observe(() => {
        const currentMedia = mediaquery();
        const isMobile = currentMedia === 'mobile';
        const isTablet = currentMedia === 'tablet';

        Vanilla(subdiv, {
            flexDirection: isMobile ? 'column' : 'row',
            height: isMobile ? 'auto' : (isTablet ? '35vh' : '40vh'),
            padding: isMobile ? '2rem 1rem' : '1rem',
            gap: isMobile ? '2rem' : '4rem',
            borderBottomLeftRadius: isMobile ? '100px' : '200px'
        });

        Vanilla(leftText, {
            fontSize: isMobile ? '13pt' : '15pt',
            left: isMobile ? '0' : '3rem'
        });

        const icons = rightContainer.querySelectorAll('img');
        icons.forEach(icon => {
            Vanilla(icon as HTMLElement, {
                width: isMobile ? '50px' : (isTablet ? '80px' : '100px'),
                height: isMobile ? '50px' : 'auto'
            });
        });

        if (isMobile) {
            if (subdiv.contains(rightContainer)) {
                subdiv.removeChild(rightContainer);
            }
            if (!subdiv.contains(mobileRightContainer)) {
                SetChild(subdiv, mobileRightContainer);
            }
        } else {
            if (subdiv.contains(mobileRightContainer)) {
                subdiv.removeChild(mobileRightContainer);
            }
            if (!subdiv.contains(rightContainer)) {
                SetChild(subdiv, rightContainer);
            }
        }
    });

    Vanilla(subdiv, {
        flexDirection: mobile.matches ? 'column' : 'row',
        height: mobile.matches ? 'auto' : (tablet.matches ? '35vh' : '40vh'),
        padding: mobile.matches ? '2rem 1rem' : '1rem',
        gap: mobile.matches ? '2rem' : '4rem',
        borderBottomLeftRadius: mobile.matches ? '100px' : '200px'
    });

    Vanilla(leftText, {
        fontSize: mobile.matches ? '13pt' : '15pt',
        left: mobile.matches ? '0' : '3rem'
    });

    const icons = rightContainer.querySelectorAll('img');
    icons.forEach(icon => {
        Vanilla(icon as HTMLElement, {
            width: mobile.matches ? '50px' : (tablet.matches ? '80px' : '100px'),
            height: mobile.matches ? '50px' : 'auto'
        });
    });

    SetChild(subdiv, leftText);
    SetChild(subdiv, rightContainer);
    SetChild(page, subdiv);

    if (mobile.matches) {
        if (subdiv.contains(rightContainer)) {
            subdiv.removeChild(rightContainer);
        }
        if (!subdiv.contains(mobileRightContainer)) {
            SetChild(subdiv, mobileRightContainer);
        }
    } else {
        if (subdiv.contains(mobileRightContainer)) {
            subdiv.removeChild(mobileRightContainer);
        }
        if (!subdiv.contains(rightContainer)) {
            SetChild(subdiv, rightContainer);
        }
    }

    

    // Core Stack Section
    const thirdDiv = CreateNode('div') as HTMLElement;
    Style(thirdDiv, `w-100 color p-1 relative flex justify-around items-center shadow-dynamic`);
    Vanilla(thirdDiv, {
        backgroundImage: prefersDark ? '':`url(${bg2})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '300px',
        backgroundColor:prefersDark ? darkColor : '',
        bocShadow: prefersDark ? darkShadow1 : '',
        marginTop:prefersDark ? '10px':'',
        marginBottom: prefersDark ? '30px':''
    });

    const text2 = headerAndText({
        header: `My core stack includes React, Next.js, Flutter, Nite, and languages like TypeScript, Dart, C/C++, kotlin, javascript and Python.`,
        text: `I build performant, user-centric apps that are not only functional\n but also elegant and efficient. With a strong eye for design,\n structure, and user experience,\n I aim to create solutions that leave a lasting impact.`
    }) as HTMLElement;

    const _rightItemsHolder = CreateNode('div') as HTMLElement;
    Style(_rightItemsHolder, 'flex justify-center');

    const _colum = CreateNode('div') as HTMLElement;
    Style(_colum, 'flex flex-col gap-2');
    Vanilla(_colum,{
        boxShadow:prefersDark ? darkShadow : ''
    });
    
    const _colum2 = CreateNode('div') as HTMLElement;
    Style(_colum2, 'flex flex-col gap-2');

    Vanilla(_colum2,{
        boxShadow:prefersDark ? darkShadow : ''
    })

    Array.from({ length: 2 }).forEach((_, index) => {
        const div = CreateNode('div') as HTMLElement;
        Style(div, 'rounded shadowXl bg-white shadow-dynamic float');
        div.style.backgroundColor = index === 0 ? 'green' : 'transparent';
        SetChild(_colum, div);

        const div2 = CreateNode('div') as HTMLElement;
        Style(div2, 'rounded shadowXl bg-white shadow-dynamic float');
        div2.style.backgroundColor = index === 1 ? 'lightblue' : 'transparent';
        SetChild(_colum2, div2);
    });

    SetChild(_rightItemsHolder, _colum);
    SetChild(_rightItemsHolder, _colum2);
    SetChild(thirdDiv, text2);
    SetChild(thirdDiv, _rightItemsHolder);
    SetChild(page, thirdDiv);

    observe(() => {
        const currentMedia = mediaquery();
        const isMobile = currentMedia === 'mobile';
        const isTablet = currentMedia === 'tablet';

        Vanilla(thirdDiv, {
            flexDirection: isMobile ? 'column' : 'row',
            height: isMobile ? 'auto' : (isTablet ? '35vh' : '40vh'),
            padding: isMobile ? '2rem 1rem' : '1rem',
            gap: isMobile ? '2rem' : '4rem',
            borderTopLeftRadius: isMobile ? '100px' : '200px'
        });

        Vanilla(text2, {
            fontSize: isMobile ? '13pt' : '15pt',
            top: isMobile ? '0' : '3rem',
            left: isMobile ? '0' : '3rem'
        });

        Vanilla(_rightItemsHolder, {
            flexDirection: 'row',
            gap: isMobile ? '1rem' : '2rem',
            width: isMobile ? '100%' : '40%',
            marginTop: isMobile ? '2rem' : '0'
        });

        const boxes = _rightItemsHolder.querySelectorAll('div > div');
        boxes.forEach(box => {
            Vanilla(box as HTMLElement, {
                width: isMobile ? '100px' : '150px',
                height: isMobile ? '80px' : '100px'
            });
        });
    });

    Vanilla(thirdDiv, {
        flexDirection: mobile.matches ? 'column' : 'row',
        height: mobile.matches ? 'auto' : (tablet.matches ? '35vh' : '40vh'),
        padding: mobile.matches ? '2rem 1rem' : '1rem',
        gap: mobile.matches ? '2rem' : '4rem',
        borderTopLeftRadius: mobile.matches ? '100px' : '200px'
    });

    Vanilla(text2, {
        fontSize: mobile.matches ? '13pt' : '15pt',
        top: mobile.matches ? '0' : '3rem',
        left: mobile.matches ? '0' : '3rem'
    });

    Vanilla(_rightItemsHolder, {
        flexDirection: 'row',
        gap: mobile.matches ? '1rem' : '2rem',
        width: mobile.matches ? '100%' : '40%',
        marginTop: mobile.matches ? '2rem' : '0'
    });

    const boxes = _rightItemsHolder.querySelectorAll('div > div');
    boxes.forEach(box => {
        Vanilla(box as HTMLElement, {
            width: mobile.matches ? '100px' : '150px',
            height: mobile.matches ? '80px' : '100px'
        });
    });

    // Footer
    const final = createText2(`Let's build something amazing — faster, smarter, and more intuitive.\nIf you like this project, appreciate me by buying me a cup of coffee ☕`);
    const div2 = CreateNode('div') as HTMLElement;
    Style(div2, 'w-100 shadow-dynamic flex justify-between items-center relative font-xs');

    const button = FormBar();
    Vanilla(button as HTMLElement, {
        height: '45px'
    });

    observe(() => {
        const isMobile = mediaquery() === 'mobile';

        Vanilla(div2, {
            padding: isMobile ? '1.5rem 1rem' : '1rem',
            flexDirection: isMobile ? 'column' : 'row'
        });

        Vanilla(button as HTMLElement, {
            position: isMobile ? 'static' : 'absolute',
            marginTop: isMobile ? '1rem' : '0',
            width: isMobile ? '100%' : 'auto',
            right: isMobile ? '0' : '1rem'
        });
    });

    Vanilla(div2, {
        padding: mobile.matches ? '1.5rem 1rem' : '1rem',
        flexDirection: mobile.matches ? 'column' : 'row'
    });

    Vanilla(button as HTMLElement, {
        position: mobile.matches ? 'static' : 'absolute',
        marginTop: mobile.matches ? '1rem' : '0',
        width: mobile.matches ? '100%' : 'auto',
        right: mobile.matches ? '0' : '1rem'
    });
    SetChild(div2, final);
    SetChild(div2, button);
    SetChild(page, div2);

    return page;
};

function headerAndText({ header, text, size = 15 }: any) {
    const h2 = CreateNode('h2') as HTMLElement;
    Text(h2, header);
    Vanilla(h2, {
        whiteSpace: 'pre-line',
        marginBottom: '1rem',
        fontSize: `${size}pt`,
        color:'lightblue',
        textShadow:'0 0 2px black'
    });

    const textValue = createText2(text) as HTMLElement;
    Vanilla(textValue, {
        whiteSpace: 'pre-line',
        lineHeight: '1.6',
        fontSize: `${size - 2}pt`
    });
    Style(textValue,'font-xs')

    const holder = CreateNode('div') as HTMLElement;
    Style(holder, 'relative');
    SetChild(holder, h2);
    Vanilla(holder,{
        maxWidth:'100%'
    })
    SetChild(holder, textValue);
    return holder;
}

