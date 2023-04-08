import React, { FC, useEffect, useRef } from "react";

interface InputCheckedProps {
  name: string;
  setFilter: (evt: boolean, name: string) => void;
  resetRef: boolean;
}

const InputChecked: FC<InputCheckedProps> = ({ name, setFilter, resetRef }) => {
  const inputRef = useRef<HTMLInputElement[]>([]);

  const currentChecked = (): void => {
    for (let i = 0; i < inputRef.current.length; i++) {
      inputRef.current[i].checked = false;
    }
  };
  useEffect((): void => {
    currentChecked();
  }, [resetRef]);

  return (
    <div>
      <input
        id={name}
        ref={(element): void => {
          inputRef.current[0] = element as HTMLInputElement;
        }}
        type="checkbox"
        name={name}
        onChange={(evt): void => setFilter(evt.target.checked, name)}
      />
      <label htmlFor={name}>
        {name.length >= 20 ? name.slice(0, 20) + " ..." : name}
      </label>
    </div>
  );
};

export default InputChecked;
