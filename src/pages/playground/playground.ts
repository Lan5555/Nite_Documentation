import { AlertDialog,Text, ApplyState, Column, CreateNode, FutureCreator, ListenForEvent, RemoveClass, render, renderBody, RenderInner, Row, SetChild, Style, SwitchBar, Timer, UseSpriteSheet, Vanilla, Watch } from "../../../lib/state";
import * as monaco from 'monaco-editor';
import { useFontAwesomeIcon } from "../../components/icons";
import { Button } from "../../components/button";
import { Toast } from "../../components/toast";
import { darkColor, prefersDark } from "../../hooks/theme";
import { darkMode, observeMode } from "../../hooks/mode";

export const PlayGround = (): HTMLElement => {
  const container = CreateNode('div') as HTMLDivElement;
  Vanilla(container,{
    overflowX:'hidden',
    backgroundColor:prefersDark ? darkColor : ''
  });

  observeMode(() => {
    Vanilla(container,{
    overflowX:'hidden',
    backgroundColor:darkMode() == 'dark' ? darkColor : ''
  });
  });
  
  // Create editor container
  const editorContainer = CreateNode('div') as HTMLDivElement;
  Vanilla(editorContainer,{
    height:'80vh',
    width:'100%',
    border:'1px solid #333',
    marginTop:'60px',
   
  });
  
  // Create output container
  const outputContainer = CreateNode('div') as HTMLDivElement;
  Vanilla(outputContainer,{
    height:'20vh',
    overflow:'auto',
    border:'1px solid #333',
    padding:'10px',
    overflowX:'hidden',
    color:prefersDark ? 'white':''
  });
  observeMode(() => {
    Vanilla(outputContainer,{
    height:'20vh',
    overflow:'auto',
    border:'1px solid #333',
    padding:'10px',
    overflowX:'hidden',
    color:darkMode() == 'dark' ? 'white':''
  });
  })
  // Create run button
  const executeButton =  Button({
    variant:'contained',
    text:'Execute',
    icon:'play'
  });
  executeButton.style.margin = '10px 0';
  Vanilla(executeButton,{
    marginLeft:'30px'
  })
  
  // Add elements to container
  SetChild(container,editorContainer);
  SetChild(container,executeButton);
  SetChild(container,outputContainer);
  
  // Initialize Monaco Editor
  const editor = monaco.editor.create(editorContainer, {
    value: `// Write your code here\nToast({text:'Hello world',page:document.body,type:'success'})`,
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true,
  });

  // Function to set output
  const style = prefersDark ? 'white':''
  const setOutput = (message: string) => {
    outputContainer.innerHTML += `<div>${message}</div>`;
  };

  // Custom functions you want to expose to the user code
  const functions = {
    CreateNode,
        Text,
        SetChild,
        Vanilla,
        Style,
        print,
        Watch,
        Button,
        renderBody,
        Row,
        Column,
        SwitchBar,
        useFontAwesomeIcon,
        UseSpriteSheet,
        render,
        FutureCreator,
        RenderInner,
        RemoveClass,
        Timer,
        ApplyState,
        ListenForEvent,AlertDialog,Toast
  };

  // Execute button click handler
  executeButton.onclick = () => {
    const userCode = editor.getValue();
    outputContainer.innerHTML = ''; // Clear previous output

    // Capture console.log
    const originalConsoleLog = console.log;
    console.log = (...args: unknown[]) => {
        originalConsoleLog(...args); // Keep original console.log
        setOutput(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' '));
    };

    try {
      const context = { ...functions };
      const contextKeys = Object.keys(context);
      const contextValues = Object.values(context);

      const func = new Function(...contextKeys, `"use strict";\n${userCode}`);
      const result = func(...contextValues);

      if (result !== undefined) {
        setOutput(`Returned: ${JSON.stringify(result)}`);
      }
    } catch (err) {
      setOutput(`Error: ${(err as Error).message}`);
    } finally {
      // Restore original console.log
      console.log = originalConsoleLog;
    }
  };
  
  return container;
};