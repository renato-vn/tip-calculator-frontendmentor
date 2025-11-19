type Props = {
  text: string;
  handleClick: () => void;
};

export const Button = ({ text, handleClick }: Props) => {
  return (
    <button
      onClick={handleClick}
      className="bg-Green-400 text-Green-900 uppercase font-bold text-center h-12 w-full rounded-sm cursor-pointer hover:bg-Green-200 transition-colors"
    >
      {text}
    </button>
  );
};
