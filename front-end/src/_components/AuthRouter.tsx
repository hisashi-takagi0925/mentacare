"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export const AuthRouter = ({ children }: Props) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user) {
    return (
      <div>
        <p>You are not logged in.</p>
        <Link href="/api/auth/login">Login</Link>
      </div>
    );
  }

  return <>{children}</>;
};
