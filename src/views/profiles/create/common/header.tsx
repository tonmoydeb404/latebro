type Props = {
  title: string;
  description: string;
};

const Header = (props: Props) => {
  const { description, title } = props;
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Header;
