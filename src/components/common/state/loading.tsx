type Props = {
  title?: string;
};

const LoadingState = (props: Props) => {
  const { title = "Loading..." } = props;
  return (
    <div className="border border-dashed h-20 flex flex-col items-center justify-center text-center">
      <span className="text-xs uppercase text-muted-foreground">{title}</span>
    </div>
  );
};

export default LoadingState;
