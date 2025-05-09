interface Props{
    variant?:string
    text?:string
}
export const Button = ({ variant, text }:Props):HTMLButtonElement => {
    const button = document.createElement('button');
    button.textContent = text || 'Click Me';
  
    Object.assign(button.style, {
      borderRadius: '5px',
      padding: '10px 20px',
      fontSize: '16px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    });
  
    // Apply styles based on the variant
    if (variant === 'contained') {
      Object.assign(button.style, {
        backgroundColor: '#1976d2',
        color: 'white',
      });
  
      button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#1565c0';
      });
  
      button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#1976d2';
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
      Object.assign(button.style, {
        backgroundColor: '#f5f5f5',
        color: '#333',
      });
    }
  
    return button;
  };