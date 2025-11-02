import classNames from 'classnames';
import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.scss';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'solid',
    size = 'md',
    leftIcon,
    rightIcon,
    loading = false,
    children,
    className,
    disabled,
    ...rest
  }, ref) => {
    const isDisabled = disabled ?? loading;

    return (
      <button
        ref={ref}
        className={classNames(
          'dy-button',
          `dy-button--variant-${variant}`,
          `dy-button--size-${size}`,
          loading && 'is-loading',
          className,
        )}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        {...rest}
      >
        {leftIcon ? <span className="dy-button__icon">{leftIcon}</span> : null}
        <span>{children}</span>
        {rightIcon ? <span className="dy-button__icon">{rightIcon}</span> : null}
      </button>
    );
  },
);

Button.displayName = 'Button';
