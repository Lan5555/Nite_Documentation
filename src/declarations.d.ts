type ButtonProps = {
    variant: string;
    text: string;
  };

declare module '*.jpg'{
    const value:string
    export default value;
}
declare module '*.png'{
    const value:string
    export default value;
}
declare module '*.svg'{
    const value:string
    export default value;
}
declare module '*.jpeg'{
    const value:string
    export default value;
}
declare module '*.gif'{
    const value:string
    export default value;
}

  
declare module '../lib/state' {
    export const Button: (props: { variant: 'contained' | 'outlined' | 'default'; text: string }) => HTMLButtonElement;
}
