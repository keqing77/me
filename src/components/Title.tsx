type TitleProps = {
  name: string;
};

export const Title = (props: TitleProps) => {
  return (
    <div>
      <h2 className="font-extrabold text-2xl  flex items-center my-5 transition-transform gap-2  hover:translate-y-[-3px] ">
        {props.name}
      </h2>
    </div>
  );
};
