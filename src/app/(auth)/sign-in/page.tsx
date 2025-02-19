import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import SignInForm from "@/components/auth/sign-in-form";

const SignIn = () => {
  return (
    <Card
      className="w-full max-w-md flex flex-col justify-center
      items-center
    "
    >
      <CardHeader className="text-center ">
        <CardTitle className="text-2xl">Welcome back</CardTitle>
        <CardDescription className="text-muted-foreground">
          Please sign in or register new account
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <SignInForm />
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground flex gap-2 text-sm">
          Don&apos;t have an account?
          <Link href="/sign-up">Sign Up</Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignIn;
