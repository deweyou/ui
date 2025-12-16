import type { ButtonHTMLAttributes, FC } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button: FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...rest }) => {
  const base = 'dui-btn';
  const styles = variant === 'primary' ? `${base} ${base}--primary` : `${base} ${base}--secondary`;
  return (
    <button className={`${styles} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
};
