import EmptyState from "./empty";
import ErrorState from "./error";
import LoadingState from "./loading";

type Variant = "error" | "empty" | "loading";
type Props = {
  variant: Variant;
  title?: string;
};

const StateVariant = (props: Props) => {
  const { variant, title } = props;

  switch (variant) {
    case "error":
      return <ErrorState title={title} />;
    case "empty":
      return <EmptyState title={title} />;
    case "loading":
      return <LoadingState title={title} />;
  }
};

export default StateVariant;
