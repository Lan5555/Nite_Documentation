import { Column, createNode, setChild, Style, Text, vanilla } from "../../../lib/state";
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

export const About = () => {
    const page = createNode('div') as HTMLElement;
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
    vanilla(page, {
        flex: '1',
        marginTop: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '10px'
    });
    Style(page, 'relative');

    // About Me Section
    const aboutMe = createNode('div') as HTMLElement;
    Style(aboutMe, `w-100 color p-1 flex justify-around items-center relative shadow-dynamic`);
    vanilla(aboutMe, {
        backgroundImage: `url(${bg2})`,
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

    const img = createNode('img') as HTMLImageElement;
    img.src = dp;
    Style(img, 'shadow-dynamic rounded');

    observe(() => {
        const currentMedia = mediaquery();
        const isMobile = currentMedia === 'mobile';
        const isTablet = currentMedia === 'tablet';

        vanilla(aboutMe, {
            flexDirection: isMobile ? 'column' : 'row',
            height: isMobile ? 'auto' : (isTablet ? '35vh' : '40vh'),
            padding: isMobile ? '2rem 1rem' : '1rem',
            gap: isMobile ? '2rem' : '4rem'
        });

        vanilla(text, {
            top: isMobile ? '0' : '10px',
            textAlign: isMobile ? 'center' : 'left',
            width: isMobile ? '100%' : 'auto'
        });

        vanilla(img, {
            width: isMobile ? '10rem' : (isTablet ? '12rem' : '15rem'),
            height: isMobile ? '10rem' : (isTablet ? '14rem' : '18rem'),
            position: isMobile ? 'static' : 'relative',
            margin: isMobile ? '0 auto' : ''
        });
    });

    vanilla(aboutMe, {
        flexDirection: mobile.matches ? 'column' : 'row',
        height: mobile.matches ? 'auto' : (tablet.matches ? '35vh' : '40vh'),
        padding: mobile.matches ? '2rem 1rem' : '1rem',
        gap: mobile.matches ? '2rem' : '4rem'
    });

    vanilla(text, {
        top: mobile.matches ? '0' : '10px',
        textAlign: mobile.matches ? 'center' : 'left',
        width: mobile.matches ? '100%' : 'auto'
    });

    vanilla(img, {
        width: mobile.matches ? '10rem' : (tablet.matches ? '12rem' : '15rem'),
        height: mobile.matches ? '10rem' : (tablet.matches ? '14rem' : '18rem'),
        position: mobile.matches ? 'static' : 'relative',
        margin: mobile.matches ? '0 auto' : ''
    });
    

    setChild(aboutMe, text);
    setChild(aboutMe, img);
    setChild(page, aboutMe);

    // Skills Section
    const subdiv = createNode('div') as HTMLElement;
    Style(subdiv, `shadowXl w-100 p-1 flex relative`);

    const leftText = headerAndText({
        header: `I'm a passionate full-stack developer and the creator of NITE`,
        text: `A robust development framework designed for building scalable Single Page Applications (SPAs) with ease.\n NITE goes beyond just styling; it offers a wide range of reusable functions,\n modular components, and utilities that\n streamline the entire development process\n from frontend to backend.`,
    }) as HTMLElement;
    Style(leftText, `relative font-sm`);

    const rightContainer = createNode('div') as HTMLElement;
    vanilla(rightContainer, {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        padding: '20px',
        width: '100%'
    });

    const mobileRightContainer = createNode('div') as HTMLElement;
    Style(mobileRightContainer, 'flex flex-wrap justify-center gap-3 p-2');

    [html, java, js, css].forEach((element) => {
        const div = createNode('div') as HTMLElement;
        vanilla(div, {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px'
        });

        const logo = createNode('img') as HTMLImageElement;
        vanilla(logo, {
            width: '100px',
            height: 'auto',
            objectFit: 'contain'
        });
        Style(logo, 'shadow-dynamic');
        logo.src = element;
        logo.alt = 'Tech icon';
        setChild(div, logo);
        setChild(rightContainer, div);

        const mobileLogo = createNode('img') as HTMLImageElement;
        vanilla(mobileLogo, {
            width: '50px',
            height: '50px',
            objectFit: 'contain'
        });
        Style(mobileLogo, 'shadow-dynamic');
        mobileLogo.src = element;
        mobileLogo.alt = 'Tech icon';
        setChild(mobileRightContainer, mobileLogo);
    });

    observe(() => {
        const currentMedia = mediaquery();
        const isMobile = currentMedia === 'mobile';
        const isTablet = currentMedia === 'tablet';

        vanilla(subdiv, {
            flexDirection: isMobile ? 'column' : 'row',
            height: isMobile ? 'auto' : (isTablet ? '35vh' : '40vh'),
            padding: isMobile ? '2rem 1rem' : '1rem',
            gap: isMobile ? '2rem' : '4rem',
            borderBottomLeftRadius: isMobile ? '100px' : '200px'
        });

        vanilla(leftText, {
            fontSize: isMobile ? '13pt' : '15pt',
            left: isMobile ? '0' : '3rem'
        });

        const icons = rightContainer.querySelectorAll('img');
        icons.forEach(icon => {
            vanilla(icon as HTMLElement, {
                width: isMobile ? '50px' : (isTablet ? '80px' : '100px'),
                height: isMobile ? '50px' : 'auto'
            });
        });

        if (isMobile) {
            if (subdiv.contains(rightContainer)) {
                subdiv.removeChild(rightContainer);
            }
            if (!subdiv.contains(mobileRightContainer)) {
                setChild(subdiv, mobileRightContainer);
            }
        } else {
            if (subdiv.contains(mobileRightContainer)) {
                subdiv.removeChild(mobileRightContainer);
            }
            if (!subdiv.contains(rightContainer)) {
                setChild(subdiv, rightContainer);
            }
        }
    });

    vanilla(subdiv, {
        flexDirection: mobile.matches ? 'column' : 'row',
        height: mobile.matches ? 'auto' : (tablet.matches ? '35vh' : '40vh'),
        padding: mobile.matches ? '2rem 1rem' : '1rem',
        gap: mobile.matches ? '2rem' : '4rem',
        borderBottomLeftRadius: mobile.matches ? '100px' : '200px'
    });

    vanilla(leftText, {
        fontSize: mobile.matches ? '13pt' : '15pt',
        left: mobile.matches ? '0' : '3rem'
    });

    const icons = rightContainer.querySelectorAll('img');
    icons.forEach(icon => {
        vanilla(icon as HTMLElement, {
            width: mobile.matches ? '50px' : (tablet.matches ? '80px' : '100px'),
            height: mobile.matches ? '50px' : 'auto'
        });
    });

    setChild(subdiv, leftText);
    setChild(subdiv, rightContainer);
    setChild(page, subdiv);

    if (mobile.matches) {
        if (subdiv.contains(rightContainer)) {
            subdiv.removeChild(rightContainer);
        }
        if (!subdiv.contains(mobileRightContainer)) {
            setChild(subdiv, mobileRightContainer);
        }
    } else {
        if (subdiv.contains(mobileRightContainer)) {
            subdiv.removeChild(mobileRightContainer);
        }
        if (!subdiv.contains(rightContainer)) {
            setChild(subdiv, rightContainer);
        }
    }

    

    // Core Stack Section
    const thirdDiv = createNode('div') as HTMLElement;
    Style(thirdDiv, 'w-100 color p-1 relative flex justify-around items-center shadow-dynamic');
    vanilla(thirdDiv, {
        backgroundImage: `url(${bg2})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '300px'
    });

    const text2 = headerAndText({
        header: `My core stack includes React, Next.js, Flutter, Nite, and languages like TypeScript, Dart, C/C++, kotlin, javascript and Python.`,
        text: `I build performant, user-centric apps that are not only functional\n but also elegant and efficient. With a strong eye for design,\n structure, and user experience,\n I aim to create solutions that leave a lasting impact.`
    }) as HTMLElement;

    const _rightItemsHolder = createNode('div') as HTMLElement;
    Style(_rightItemsHolder, 'flex justify-center');

    const _colum = createNode('div') as HTMLElement;
    Style(_colum, 'flex flex-col gap-2');
    const _colum2 = createNode('div') as HTMLElement;
    Style(_colum2, 'flex flex-col gap-2');

    Array.from({ length: 2 }).forEach((_, index) => {
        const div = createNode('div') as HTMLElement;
        Style(div, 'rounded shadowXl bg-white shadow-dynamic float');
        div.style.backgroundColor = index === 0 ? 'green' : 'transparent';
        setChild(_colum, div);

        const div2 = createNode('div') as HTMLElement;
        Style(div2, 'rounded shadowXl bg-white shadow-dynamic float');
        div2.style.backgroundColor = index === 1 ? 'lightblue' : 'transparent';
        setChild(_colum2, div2);
    });

    setChild(_rightItemsHolder, _colum);
    setChild(_rightItemsHolder, _colum2);
    setChild(thirdDiv, text2);
    setChild(thirdDiv, _rightItemsHolder);
    setChild(page, thirdDiv);

    observe(() => {
        const currentMedia = mediaquery();
        const isMobile = currentMedia === 'mobile';
        const isTablet = currentMedia === 'tablet';

        vanilla(thirdDiv, {
            flexDirection: isMobile ? 'column' : 'row',
            height: isMobile ? 'auto' : (isTablet ? '35vh' : '40vh'),
            padding: isMobile ? '2rem 1rem' : '1rem',
            gap: isMobile ? '2rem' : '4rem',
            borderTopLeftRadius: isMobile ? '100px' : '200px'
        });

        vanilla(text2, {
            fontSize: isMobile ? '13pt' : '15pt',
            top: isMobile ? '0' : '3rem',
            left: isMobile ? '0' : '3rem'
        });

        vanilla(_rightItemsHolder, {
            flexDirection: 'row',
            gap: isMobile ? '1rem' : '2rem',
            width: isMobile ? '100%' : '40%',
            marginTop: isMobile ? '2rem' : '0'
        });

        const boxes = _rightItemsHolder.querySelectorAll('div > div');
        boxes.forEach(box => {
            vanilla(box as HTMLElement, {
                width: isMobile ? '100px' : '150px',
                height: isMobile ? '80px' : '100px'
            });
        });
    });

    vanilla(thirdDiv, {
        flexDirection: mobile.matches ? 'column' : 'row',
        height: mobile.matches ? 'auto' : (tablet.matches ? '35vh' : '40vh'),
        padding: mobile.matches ? '2rem 1rem' : '1rem',
        gap: mobile.matches ? '2rem' : '4rem',
        borderTopLeftRadius: mobile.matches ? '100px' : '200px'
    });

    vanilla(text2, {
        fontSize: mobile.matches ? '13pt' : '15pt',
        top: mobile.matches ? '0' : '3rem',
        left: mobile.matches ? '0' : '3rem'
    });

    vanilla(_rightItemsHolder, {
        flexDirection: 'row',
        gap: mobile.matches ? '1rem' : '2rem',
        width: mobile.matches ? '100%' : '40%',
        marginTop: mobile.matches ? '2rem' : '0'
    });

    const boxes = _rightItemsHolder.querySelectorAll('div > div');
    boxes.forEach(box => {
        vanilla(box as HTMLElement, {
            width: mobile.matches ? '100px' : '150px',
            height: mobile.matches ? '80px' : '100px'
        });
    });

    // Footer
    const final = createText2(`Let's build something amazing — faster, smarter, and more intuitive.\nIf you like this project, appreciate me by buying me a cup of coffee ☕`);
    const div2 = createNode('div') as HTMLElement;
    Style(div2, 'w-100 shadow-dynamic flex justify-between items-center relative font-xs');

    const button = Button({
        variant: 'contained',
        text: 'Buy him coffee'
    });
    vanilla(button as HTMLElement, {
        height: '45px'
    });

    observe(() => {
        const isMobile = mediaquery() === 'mobile';

        vanilla(div2, {
            padding: isMobile ? '1.5rem 1rem' : '1rem',
            flexDirection: isMobile ? 'column' : 'row'
        });

        vanilla(button as HTMLElement, {
            position: isMobile ? 'static' : 'absolute',
            marginTop: isMobile ? '1rem' : '0',
            width: isMobile ? '100%' : 'auto',
            right: isMobile ? '0' : '1rem'
        });
    });

    vanilla(div2, {
        padding: mobile.matches ? '1.5rem 1rem' : '1rem',
        flexDirection: mobile.matches ? 'column' : 'row'
    });

    vanilla(button as HTMLElement, {
        position: mobile.matches ? 'static' : 'absolute',
        marginTop: mobile.matches ? '1rem' : '0',
        width: mobile.matches ? '100%' : 'auto',
        right: mobile.matches ? '0' : '1rem'
    });
    setChild(div2, final);
    setChild(div2, button);
    setChild(page, div2);

    return page;
};

function headerAndText({ header, text, size = 15 }: any) {
    const h2 = createNode('h2') as HTMLElement;
    Text(h2, header);
    vanilla(h2, {
        whiteSpace: 'pre-line',
        marginBottom: '1rem',
        fontSize: `${size}pt`,
        color:'lightblue'
    });

    const textValue = createText2(text) as HTMLElement;
    vanilla(textValue, {
        whiteSpace: 'pre-line',
        lineHeight: '1.6',
        fontSize: `${size - 2}pt`
    });
    Style(textValue,'font-xs')

    const holder = createNode('div') as HTMLElement;
    Style(holder, 'relative');
    setChild(holder, h2);
    vanilla(holder,{
        maxWidth:'100%'
    })
    setChild(holder, textValue);
    return holder;
}
