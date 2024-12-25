import Header from "./sections/header";
import Templates from "./sections/templates";

type Props = {};

const ResumesView = (props: Props) => {
  return (
    <div className="container py-16">
      <Header />
      <Templates />
    </div>
  );
};

export default ResumesView;
