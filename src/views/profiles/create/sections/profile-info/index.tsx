import { RHFForm } from "@/components/common/rhf";
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
      <h2 className="text-2xl mb-10 font-bold">Personal Info</h2>
      <div className="flex flex-col gap-4">
        <Fields />
      </div>
    </RHFForm>
  );
};

export default ProfileInfo;
