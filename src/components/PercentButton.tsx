import { useCalculatorStore } from "../store/calculator.store";

type Props = {
  percentage: number;
  isCustom?: boolean;
};

export const PercentButton = ({ percentage, isCustom = false }: Props) => {
  const { tip, setTip } = useCalculatorStore();

  const isActive = tip === percentage;

  const styles = isActive
    ? "bg-Grey-200 text-Green-900"
    : "bg-Green-900 text-Grey-50 hover:bg-Green-200 hover:text-Green-900 cursor-pointer";

  const handleClick = () => {
    setTip(percentage);
  };

  return (
    <button
      onClick={handleClick}
      className={`text-2xl font-bold rounded-xs w-full h-12 transition-colors ${styles}`}
    >
      {isCustom ? "Custom" : `${percentage}%`}
    </button>
  );
};
