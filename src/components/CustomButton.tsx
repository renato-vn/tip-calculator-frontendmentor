import { useEffect, useState, type ChangeEvent } from "react";
import { useCalculatorStore } from "../store/calculator.store";

export const CustomButton = () => {
  const { tip, setTip } = useCalculatorStore();

  const [isEditable, setIsEditable] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Custom");

  useEffect(() => {
    setInputValue(inputValue.toString());
    setButtonLabel(Number(inputValue) !== 0 ? `${inputValue}%` : "Custom");
  }, [tip]);

  const handleClick = () => {
    setIsEditable(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    const decimalRegExp = /^\d*\.?\d*$/;

    const isValid = decimalRegExp.test(currentValue);

    if (!isValid) return;
    setInputValue(currentValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setNewValue(e.currentTarget.value);
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setNewValue(e.currentTarget.value);
    }
  };

  const setNewValue = (newValue: string) => {
    const castedValue = Number(newValue);
    setTip(castedValue);
    setButtonLabel(`${castedValue !== 0 ? `${newValue}%` : "Custom"}`);
    setIsEditable(false);
  };

  return (
    <>
      {isEditable ? (
        <input
          autoFocus
          onKeyDown={handlePressEnter}
          onBlur={handleBlur}
          onChange={handleChange}
          value={inputValue}
          className="focus:outline-Green-400 p-2 text-right caret-Green-400 text-Green-900 font-bold text-2xl"
          type="text"
        />
      ) : (
        <button
          onClick={handleClick}
          className="text-2xl font-bold h-12 bg-Grey-200 text-Grey-500 rounded-xs cursor-pointer hover:bg-Grey-50 hover:text-Grey-400 transition-colors"
        >
          {buttonLabel}
        </button>
      )}
    </>
  );
};
