import { Input, PercentButton, Totals, CustomButton } from "../components";
import { percents } from "../constants";
import { useCalculatorStore } from "../store/calculator.store";
import IconDollar from "/images/icon-dollar.svg";
import IconPerson from "/images/icon-person.svg";

export const Calculator = () => {
  const { bill, people, setBill, setPeople } = useCalculatorStore();

  return (
    <div className="bg-White p-8 w-[375px] m-auto rounded-4xl my-10 md:w-[608px] md:p-12 md:px-20 lg:flex lg:w-[920px] lg:gap-12 lg:p-8">
      <div className="lg:flex-1">
        <Input
          label="Bill"
          value={bill}
          iconUrl={IconDollar}
          setValue={setBill}
          variant="bill"
        />

        <h2 className="font-bold text-Grey-500 mb-2">Select Tip %</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {percents.map((percent) => (
            <PercentButton key={percent} percentage={percent} />
          ))}

          <CustomButton />
        </div>

        <Input
          label="Number of People"
          value={people}
          iconUrl={IconPerson}
          setValue={setPeople}
          variant="people"
        />
      </div>

      <Totals />
    </div>
  );
};
