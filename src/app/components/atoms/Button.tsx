'use client';

type ButtonProps = {
  text: string;
  width: string;   
  color: string;  
  className?: string; 
};

function Button({ text, width, color, className }: ButtonProps) {
  return (
    <button className={`${width} ${color} ${className}`}>
      {text}
    </button>
  );
}

export default Button;
