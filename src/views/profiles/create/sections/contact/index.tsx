import { RHFForm } from "@/components/common/rhf";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import Actions from "../../common/actions";
import Header from "../../common/header";
import Fields from "./fields";
import schema, { SchemaType } from "./schema";

type Props = {};

const ContactForm = (props: Props) => {
  const defaultValues = useMemo<SchemaType>(
    () => ({
      address: "",
      addressLink: "",
      email: "",
      phone: "",
      website: "",
    }),
    []
  );
  const formOptions = useForm({ resolver: zodResolver(schema), defaultValues });

  return (
    <RHFForm formOptions={formOptions}>
      <Header
        title="Contact Information"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, similique."
      />

      <div className="flex flex-col gap-4 mb-16">
        <Fields />
      </div>
      <Actions />
    </RHFForm>
  );
};

export default ContactForm;
