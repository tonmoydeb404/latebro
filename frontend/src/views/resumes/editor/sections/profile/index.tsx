import { RHFForm } from "@/components/common/rhf";
import { Button } from "@/components/ui/button";
import { hasApiError } from "@/helpers/api";
import { toast } from "@/hooks/use-toast";
import { useUpdateProfileMutation } from "@/store/features/resume/profile/api";
import { useEditor } from "@/store/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { LucideEdit } from "lucide-react";
import { useCallback, useEffect, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Header from "../../common/header";
import Fields from "./fields";
import schema, { SchemaType } from "./schema";

type Props = {};

const ProfileForm = (props: Props) => {
  const { resume } = useEditor();
  const [mutate, mutateResponse] = useUpdateProfileMutation();

  // ----------------------------------------------------------------------

  const defaultValues = useMemo<SchemaType>(
    () => ({
      name: resume?.profile?.name || "",
      avatar: resume?.profile?.avatar || "",
      bio: resume?.profile?.bio || "",
      profession: resume?.profile?.profession || "",
    }),
    [resume?.profile]
  );
  const formOptions = useForm({ resolver: zodResolver(schema), defaultValues });

  const onValid: SubmitHandler<SchemaType> = useCallback(
    async (values) => {
      if (!resume?._id) return;

      const response = await mutate({
        ...values,
        resume: resume?._id,
      });

      if (response.error) {
        console.error("Profile update error: ", response);

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

      toast({ title: "Profile updated successfully!" });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [resume?._id]
  );

  // ----------------------------------------------------------------------

  useEffect(() => {
    formOptions.reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues]);

  return (
    <RHFForm formOptions={formOptions} onValid={onValid}>
      <Header
        title="Personal Information"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, similique."
        className="mb-10"
      />

      <div className="flex flex-col gap-4 mb-10">
        <Fields />
      </div>
      <div className="flex items-center">
        <Button loading={mutateResponse.isLoading} Icon={LucideEdit}>
          Update
        </Button>
        {/* <AutoSave defaultValues={defaultValues} onSubmit={onValid} /> */}
      </div>
    </RHFForm>
  );
};

export default ProfileForm;
