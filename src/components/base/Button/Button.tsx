interface Iprops {
  text: string;
  className: string;
  onClick: () => void;
  type: "button" | "reset" | "submit" | undefined;
}
export default function Button({ text, className, onClick, type }: Iprops) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
}
