import { CreateNode, Style } from "../../lib/state";
import { darkShadow, darkShadow1, prefersDark } from "../hooks/theme";
import { useFontAwesomeIcon } from "./icons";

interface Props {
  variant?: string;
  text?: string;
  icon?: string;
}

export const Button = ({ variant = 'default', text = 'Click Me', icon }: Props): HTMLButtonElement => {
  const button = document.createElement('button');

  // Create and style icon if provided
  if (icon) {
    const iconNode = CreateNode('i');
    Style(iconNode, 'fa-solid fa-' + icon);
    button.appendChild(iconNode);
    
    // Add spacing if both icon and text exist
    if (text) {
      const spacer = document.createTextNode(' ');
      button.appendChild(spacer);
    }
  }

  // Append text
  if (text) {
    const textNode = document.createTextNode(text);
    button.appendChild(textNode);
  }

  // Base styles
  Object.assign(button.style, {
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  });

  // Variant-based styles
  if (variant === 'contained') {
    Object.assign(button.style, {
      backgroundColor: prefersDark ? 'black':'#1976d2',
      color: 'white',
      boxShadow:prefersDark ? darkShadow1 : ''
    });

    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = prefersDark ? 'white':'#1565c0';
      button.style.color = prefersDark ? 'black':'white'
    });

    button.addEventListener('mouseout', () => {
      button.style.backgroundColor = prefersDark ? 'black':'#1976d2';
      button.style.color = prefersDark ? 'white':'white'
    });
  } else if (variant === 'outlined') {
    Object.assign(button.style, {
      backgroundColor: 'transparent',
      border: '2px solid #1976d2',
      color: '#1976d2',
    });

    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = '#e3f2fd';
    });

    button.addEventListener('mouseout', () => {
      button.style.backgroundColor = 'transparent';
    });
  } else {
    // default
    Object.assign(button.style, {
      backgroundColor: prefersDark ? 'black':'#f5f5f5',
      color: '#333',
    });
  }

  return button;
};
