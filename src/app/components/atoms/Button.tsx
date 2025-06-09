// 'use client';

// type ButtonProps = {
//   text: string;
//   width: string;   
//   color: string;  
//   className?: string; 
// };

// function Button({ text, width, color, className }: ButtonProps) {
//   return (
//     <button className={`${width} ${color} ${className}`}>
//       {text}
//     </button>
//   );
// }

// export default Button;





'use client';

type ButtonProps = {
  text: string;
  width: string;
  color: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset'; // optional with default
  onClick?: () => void; // optional for event handler
};

function Button({
  text,
  width,
  color,
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${width} ${color} ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;

