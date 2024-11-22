"use client";

import Link from "next/link";

import { RHFForm } from "@/components/common/rhf";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { hasApiError } from "@/helpers/api";
import { toast } from "@/hooks/use-toast";
import { paths } from "@/router/paths";
import { useRegisterMutation } from "@/store/features/auth/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import Fields from "./fields";
import schema, { SchemaType } from "./schema";

const RegisterForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const [register] = useRegisterMutation();

  // ----------------------------------------------------------------------

  const defaultValues: SchemaType = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const formOptions = useForm({ defaultValues, resolver: zodResolver(schema) });

  const onValid: SubmitHandler<SchemaType> = async (values) => {
    const response = await register(values);
    console.log({ response });

    if (response.error) {
      console.error("Register Error: ", response);

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

    toast({ title: "Register Successfull" });
    router.replace(redirect ?? "/profiles");
  };

  // ----------------------------------------------------------------------

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Register</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RHFForm formOptions={formOptions} onValid={onValid}>
          <div className="grid gap-4">
            <Fields />
            <Button type="submit" className="w-full">
              Register
            </Button>
          </div>
        </RHFForm>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href={paths.auth.login} className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
