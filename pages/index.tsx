import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { routes } from "@/constants/routes";


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router?.pathname === "/") {
      router?.push(routes.HOME);
    }
  }, [router?.pathname]);
  return <div></div>;
}