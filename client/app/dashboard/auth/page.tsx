import { LoginForm } from "@/app/components/auth/LoginForm";
import { NextPage } from "next";
import Head from "next/head";

const AuthPage: NextPage = () => {
  return (
    <>
      <Head>
        <title> Dashboard / Auth</title>
      </Head>
      <main>
        <LoginForm />
      </main>
    </>
  );
};
export default AuthPage;
