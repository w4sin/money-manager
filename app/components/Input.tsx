"use client";
import React from "react";

type Props = {
  label?: string;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  // style?: React.CSSProperties;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  id,
  name,
  label,
  error = false,
  helperText,
  fullWidth = false,
  // style,
  ...rest
}: Props) => {
  const [controlledValue, setControlledValue] = React.useState(rest.value);
  const [focused, setFocused] = React.useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <div className={`relative mt-3 ${fullWidth ? "w-full" : ""}`}>
      {label && (
        <label
          htmlFor={id}
          className={`
            absolute left-3
            ${
              focused || controlledValue ? "top-0 text-xs" : "top-1/2 text-base"
            }
            ${
              error
                ? "text-red-700"
                : focused
                ? "text-blue-700"
                : "text-gray-500"
            }
            pointer-events-none
            transform -translate-y-1/2
            transition-all duration-200
            bg-white px-1
          `}
        >
          {label}
        </label>
      )}
      <input
        {...rest}
        id={id}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => {
          if (rest.onChange) {
            rest.onChange(e);
          } else setControlledValue(() => e.target.value);
        }}
        className={`
          w-full
          py-4 pl-3 pr-3 pb-2
          text-base
          box-border
          border
          rounded
          transition-colors duration-200
          ${
            error
              ? "border-red-700 outline-red-700"
              : focused
              ? "border-blue-700 outline-blue-700"
              : "border-gray-300"
          }
        `}
      />
      {helperText && (
        <div
          className={`
            mt-1
            text-xs
            text-red-700
            ${error ? "" : "hidden"}
          `}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};

export default Input;
