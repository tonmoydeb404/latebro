import { RHFForm } from "@/components/common/rhf";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import Actions from "../../common/actions";
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
      <div className="mb-10">
        <h2 className="text-xl font-bold">Personal Information</h2>
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
          similique.
        </p>
      </div>
      <div className="flex flex-col gap-4 mb-16">
        <Fields />
      </div>
      <Actions />
    </RHFForm>
  );
};

export default ProfileInfo;
