import { GetServerSidePropsContext } from "next";
import nookies  from 'nookies'
import * as Api from '@/app/api'

import axios from "axios";
import { checkAuth } from "@/utils/chekAuth";

const AuthPage = () => {
  return <div> dashboard</div>;
};
export default AuthPage;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx)
  if ('redirect' in authProps) {
    return authProps
  }
    return {props:{}}
}