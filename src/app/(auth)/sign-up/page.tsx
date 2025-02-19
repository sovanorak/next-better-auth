import SignUpForm from "@/components/auth/sign-up-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const SignUp = () => {
  return (
    <Card
      className="w-full max-w-md flex flex-col justify-center
      items-center 
    "
    >
      <CardHeader className="text-center ">
        <CardTitle className="text-2xl">Rigister here</CardTitle>
        <CardDescription className="text-muted-foreground">
          Please register your new account
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <SignUpForm />
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground flex gap-2 text-sm">
          Already have an account?
          <Link href="/sign-in">Sign In</Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignUp;
