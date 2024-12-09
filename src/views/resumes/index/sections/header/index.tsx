import UserDropdown from "./user-dropdown";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="mb-10 flex justify-between items-start">
      <div className="flex-1">
        <h1 className="font-bold text-3xl mb-2">Resume Templates</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, ut?
        </p>
      </div>

      <UserDropdown />
    </header>
  );
};

export default Header;
