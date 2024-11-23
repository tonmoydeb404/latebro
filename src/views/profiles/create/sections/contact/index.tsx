import { RHFForm } from "@/components/common/rhf";
import { Button } from "@/components/ui/button";
import { hasApiError } from "@/helpers/api";
import { toast } from "@/hooks/use-toast";
import {
  useLazyGetContactQuery,
  useUpdateContactMutation,
} from "@/store/features/resume/contact/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { LucideEdit } from "lucide-react";
import { useEffect, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Header from "../../common/header";
import Fields from "./fields";
import schema, { SchemaType } from "./schema";

type Props = {};

const ContactForm = (props: Props) => {
  const [query, queryResponse] = useLazyGetContactQuery();
  const [mutate, mutateResponse] = useUpdateContactMutation();

  // ----------------------------------------------------------------------

  const defaultValues = useMemo<SchemaType>(
    () => ({
      address: queryResponse.data?.results?.address || "",
      address_link: queryResponse.data?.results?.address_link || "",
      email: queryResponse.data?.results?.email || "",
      phone: queryResponse.data?.results?.phone || "",
      website: queryResponse.data?.results?.website || "",
    }),
    [queryResponse.data?.results]
  );
  const formOptions = useForm({ resolver: zodResolver(schema), defaultValues });

  const onValid: SubmitHandler<SchemaType> = async (values) => {
    const response = await mutate({
      ...values,
      resume: "673e9e56e96cb7bb8646a68d",
    });

    if (response.error) {
      console.error("Contact update error: ", response);

      let message = "Something wents to wrong!";
      if (hasApiError(response.error)) {
        message = response.error.data.message;
      }
      toast({
        title: message,
        variant: "destructive",
      });

      return;
    }

    toast({ title: "Contact updated successfully!" });
  };

  // ----------------------------------------------------------------------

  useEffect(() => {
    query("673e9e56e96cb7bb8646a68d");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    formOptions.reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues]);

  return (
    <RHFForm formOptions={formOptions} onValid={onValid}>
      <Header
        title="Contact Information"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, similique."
        className="mb-10"
      />

      <div className="flex flex-col gap-4 mb-16">
        <Fields />
      </div>
      <div className="flex items-center">
        <Button loading={mutateResponse.isLoading} Icon={LucideEdit}>
          Update
        </Button>
      </div>
    </RHFForm>
  );
};

export default ContactForm;
