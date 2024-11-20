import { RHFForm } from "@/components/common/rhf";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import Fields from "./fields";
import schema, { SchemaType } from "./schema";

type Props = {};

const ProfileInfo = (props: Props) => {
  const defaultValues = useMemo<SchemaType>(
    () => ({
      name: "",
      avatar: "",
      bio: "",
      profession: "",
    }),
    []
  );
  const formOptions = useForm({ resolver: zodResolver(schema), defaultValues });

  return (
    <RHFForm formOptions={formOptions}>
      <div className="flex flex-col gap-4 mb-5">
        <Fields />
      </div>
      <div>
        <Button>Next</Button>
      </div>
    </RHFForm>
  );
};

export default ProfileInfo;
