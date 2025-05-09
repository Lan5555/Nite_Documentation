export const createClass = <T>(resourceName: T, resources:T[] = []) => {
    const newStyle = document.createElement('style'); // Create a <style> element
    newStyle.type = 'text/css'; // Set type to text/css
  
    
    const className = `.${resourceName} {
      ${resources.join(';')}
    }`;
  
    // Add the class definition to the style element
    newStyle.appendChild(document.createTextNode(className));
  
    // Append the style element to the head
    document.head.appendChild(newStyle);
  };