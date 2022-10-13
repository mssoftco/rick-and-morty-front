import React from 'react';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'link' | 'outline' | 'circle' | 'square';
  innerRef?: React.RefObject<HTMLButtonElement>;
}

const defaultProps = {
  variant: 'primary',
  type: 'button'
};

function Button({ className, variant, children, innerRef, ...rest }: IButton) {
  const classes = {
    base: 'px-4 pt-1.5 pb-2 font-semibold rounded-[5px] transition disabled:cursor-wait border border-gray-900',
    primary: 'text-white bg-black hover:bg-gray-700 disabled:bg-gray-600',
    link: 'text-black bg-transparent hover:text-gray-500 disabled:text-gray-300 !border-transparent',
    outline: 'text-gray-700 border border-gray-900 hover:border-gray-600 hover:text-gray-500 disabled:border-gray-300 disabled:text-gray-300',
    circle: '!-m-2 !p-2 !rounded-full flex items-center text-gray-400 hover:text-gray-600 hover:bg-gray-200 !border-transparent',
    square: '!px-2 flex items-center text-gray-400 hover:text-gray-600 hover:bg-gray-200 !border-transparent'
  };

  return (
    <button className={`  ${classes['base']} ${variant ? classes[variant] : ''} ${className}`} ref={innerRef} {...rest}>
      {children}
    </button>
  );
}

Button.defaultProps = defaultProps;
export default Button;
