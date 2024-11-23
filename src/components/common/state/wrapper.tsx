import { ReactNode } from "react";
import EmptyState from "./empty";
import ErrorState from "./error";
import LoadingState from "./loading";

type Props = {
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  loadingText?: string;
  errorText?: string;
  emptyText?: string;
  children?: ReactNode;
};

const StateWrapper = (props: Props) => {
  const {
    isEmpty,
    isError,
    isLoading,
    emptyText,
    errorText,
    loadingText,
    children,
  } = props;

  if (!isLoading && isError) {
    return <ErrorState title={errorText} />;
  }

  if (!isLoading && isEmpty) {
    return <EmptyState title={emptyText} />;
  }

  if (!isLoading && !isError && !isEmpty) {
    return <>{children}</>;
  }

  return <LoadingState title={loadingText} />;
};

export default StateWrapper;
