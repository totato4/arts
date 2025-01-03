import Icons from "./sprite.svg";

type Props = {
  id: "logo" | "lightTheme";
  className: string;
};

function Icon({ id, className = "" }: Props) {
  return (
    <svg className={className}>
      <use href={`${Icons}#${id}`} />
    </svg>
  );
}

export default Icon;
