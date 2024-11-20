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
import { toast } from "@/hooks/use-toast";
import { paths } from "@/router/paths";
import { useLoginMutation } from "@/store/features/auth/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import Fields from "./fields";
import schema, { SchemaType } from "./schema";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const [login] = useLoginMutation();

  // ----------------------------------------------------------------------

  const defaultValues: SchemaType = {
    email: "",
    password: "",
  };
  const formOptions = useForm({ defaultValues, resolver: zodResolver(schema) });

  const onValid: SubmitHandler<SchemaType> = async (values) => {
    const response = await login(values);
    if (response.data?.status === "success") {
      toast({ title: "Login Successfull" });
      router.replace(redirect ?? "/profiles");
    } else {
      toast({
        title: response.data?.message || "Something wents to wrong!",
        variant: "destructive",
      });
    }
  };

  // ----------------------------------------------------------------------

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RHFForm formOptions={formOptions} onValid={onValid}>
          <div className="grid gap-4">
            <Fields />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </RHFForm>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href={paths.auth.register} className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
