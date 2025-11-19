import React, { useEffect, useState } from "react";

type Props = {
  label: string;
  value: number;
  iconUrl: string;
  setValue: (value: number) => void;
  variant: "bill" | "people";
};

export const Input = ({ label, value, iconUrl, setValue, variant }: Props) => {
  const [localValue, setLocalValue] = useState(value.toString());
  const [error, setError] = useState(false);

  const errorInputStyles = error
    ? "border border-Orange-400 focus:outline-[0.1px] focus:outline-Orange-400"
    : "focus:outline-Green-400";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;

    const numbersRegExp = /^\d*$/;
    const decimalRegExp = /^\d*\.?\d*$/;

    const regExp = variant === "bill" ? decimalRegExp : numbersRegExp;

    const isValid = regExp.test(userInput);

    if (!isValid) return;
    setLocalValue(userInput);

    if (userInput === "0" || userInput.trim() === "") {
      setError(true);
    } else {
      setError(false);
      setValue(Number(userInput));
    }
  };

  useEffect(() => {
    setLocalValue(value.toString());
  }, [value]);

  return (
    <div className="flex flex-col mb-8">
      <div className="flex justify-between">
        <label className="font-bold text-Grey-500 mb-2" htmlFor={label}>
          {label}
        </label>

        {error && <p className="text-Orange-400 font-bold">Can't be zero</p>}
      </div>

      <div className="relative">
        <input
          id={label}
          className={`w-full bg-Grey-50 rounded-xs focus:outline-1 ${errorInputStyles} cursor-pointer h-12 text-right pr-4 text-2xl font-bold text-Green-900`}
          type="text"
          value={localValue}
          onChange={handleChange}
        />

        <img className="absolute top-4 left-2" src={iconUrl} alt="icon" />
      </div>
    </div>
  );
};
