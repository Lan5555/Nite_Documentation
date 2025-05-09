import { AlertDialog,Text, applyState, Column, createNode, FutureCreator, listenForEvent, removeClass, render, renderBody, renderInner, Row, setChild, Style, SwitchBar, Timer, useSpriteSheet, vanilla, Watch } from "../../../lib/state";
import * as monaco from 'monaco-editor';
import { useFontAwesomeIcon } from "../../components/icons";
import { Button } from "../../components/button";
import { Toast } from "../../components/toast";

export const PlayGround = (): HTMLElement => {
  const container = createNode('div') as HTMLDivElement;
  vanilla(container,{
    overflowX:'hidden'
  })
  
  // Create editor container
  const editorContainer = createNode('div') as HTMLDivElement;
  vanilla(editorContainer,{
    height:'80vh',
    width:'100%',
    border:'1px solid #333',
    marginTop:'60px',
   
  });
  
  // Create output container
  const outputContainer = createNode('div') as HTMLDivElement;
  vanilla(outputContainer,{
    height:'20vh',
    overflow:'auto',
    border:'1px solid #333',
    padding:'10px',
    overflowX:'hidden'
  });
  
  // Create run button
  const executeButton =  Button({
    variant:'contained',
    text:'Execute'
  });
  executeButton.style.margin = '10px 0';
  vanilla(executeButton,{
    marginLeft:'30px'
  })
  
  // Add elements to container
  setChild(container,editorContainer);
  setChild(container,executeButton);
  setChild(container,outputContainer);
  
  // Initialize Monaco Editor
  const editor = monaco.editor.create(editorContainer, {
    value: `// Write your code here\nToast({text:'Hello world',page:document.body,type:'success'})`,
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true,
  });

  // Function to set output
  const setOutput = (message: string) => {
    outputContainer.innerHTML += `<div>${message}</div>`;
  };

  // Custom functions you want to expose to the user code
  const functions = {
    createNode,
        Text,
        setChild,
        vanilla,
        Style,
        print,
        Watch,
        Button,
        renderBody,
        Row,
        Column,
        SwitchBar,
        useFontAwesomeIcon,
        useSpriteSheet,
        render,
        FutureCreator,
        renderInner,
        removeClass,
        Timer,
        applyState,
        listenForEvent,AlertDialog,Toast
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