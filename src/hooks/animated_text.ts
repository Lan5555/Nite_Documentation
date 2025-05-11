import { CreateNode,Vanilla } from "../../lib/state";




// Optional: Blinking cursor effect
const style = document.createElement("style");
style.textContent = `
.typing-text::after {
  content: '|';
  animation: blink 0.7s step-end infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}
`;
document.head.appendChild(style);

class AnimatedText {
    _textValue: string;
    _node: string;
    _textItem: any;
    _targetNode: HTMLElement;
  constructor() {
    this._textValue = "Static";
    this._node = "p";
    this._textItem = CreateNode(this._node);
    this._targetNode = document.body;
  }
  
  animateText() {
    return this._textItem;
  }
  
  setText(node: string, text: string, targetNode: HTMLElement) {
    this._node = node;
    this._textValue = text;
    this._targetNode = targetNode;
    this._textItem = CreateNode(this._node); // recreate node
  }
     styles = {
      color: 'red',
      textShadow: '1px 1px 1px black',
      fontWeight: 'bold',
      fontFamily: 'Orbitron, serif',
      fontSize: '2rem',
      letterSpacing: '1.5px',
    };
  
  setStyle() {
    Vanilla(this._textItem, this.styles);
  }
}

class Text extends AnimatedText {
  animation() {
    this.setStyle();
    this._textItem.innerHTML = ""; // clear previous
    this._textItem.classList.add("typing-text");
    let i = 0;
    const interval = setInterval(() => {
      if (i < this._textValue.length) {
        this._textItem.innerHTML += this._textValue[i];
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
  }
  
  Style(style: Partial<typeof this.styles> = {}) {
    this.styles = { ...this.styles, ...style };
    Vanilla(this._textItem, this.styles);
  }
  
  animate() {
    this._targetNode?.appendChild(this._textItem);
    this.animation();
   
  }
  remove(){
    this._textItem.remove();
  }
}

export const _Text = new Text();

