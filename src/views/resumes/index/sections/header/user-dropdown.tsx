"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { paths } from "@/router/paths";
import { useLogoutMutation } from "@/store/features/auth/api";
import { useAuth } from "@/store/hooks";
import { LucideLogIn, LucideUser, LucideUserPlus } from "lucide-react";
import Link from "next/link";

type Props = {};

const UserDropdown = (props: Props) => {
  const { user } = useAuth();
  const [mutate, response] = useLogoutMutation();

  const onLogout = async () => {
    const response = await mutate();
    if (response.data) {
      window.location.href = paths.auth.login;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar>
          <AvatarImage
            src={
              user
                ? `https://api.dicebear.com/9.x/thumbs/svg?seed=${user?._id}`
                : undefined
            }
          />
          <AvatarFallback>
            <LucideUser />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {user ? (
          <>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onLogout} disabled={response.isLoading}>
              Logout
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link href={paths.auth.login}>
                <LucideLogIn />
                <span>Sign In</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={paths.auth.register}>
                <LucideUserPlus />
                <span>Create Account</span>
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
