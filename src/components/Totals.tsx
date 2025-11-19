import { TotalItem, Button } from "../components";
import { useCalculatorStore } from "../store/calculator.store";

export const Totals = () => {
  const { tipAmount, total, resetStore } = useCalculatorStore();

  return (
    <div className="bg-Green-900 rounded-2xl py-6 px-8 text-White lg:w-[413px] lg:flex lg:flex-col lg:justify-between">
      <div>
        <TotalItem text="Tip Amount" value={tipAmount()} />
        <TotalItem text="Total" value={total()} />
      </div>

      <Button handleClick={resetStore} text="Reset" />
    </div>
  );
};
