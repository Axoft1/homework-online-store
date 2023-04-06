import React, { FC, useEffect, useRef } from 'react'

interface InputPriceProps {
  onChange(evt: React.ChangeEvent<HTMLInputElement>): void;
  resetRef: boolean;
  placeholder: string;
}

const InputPrice: FC<InputPriceProps> = ({
  onChange,
  resetRef,
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement[]>([]);

  const currentChecked = (): void => {
    for (let i = 0; i < inputRef.current.length; i++) {
      inputRef.current[i].value = "";
    }
  };

  useEffect((): void => {
    currentChecked();
  }, [resetRef]);

  return (
    <>
      <input
        ref={(element): void => {
          inputRef.current[0] = element as HTMLInputElement;
        }}
        type="number"
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputPrice