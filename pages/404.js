import { useRouter } from "next/router";
import { useEffect } from "react";
import {routes} from "./../constants/routes"


export default function Custom404() {
   const router= useRouter();
  useEffect(() => {
   let timer= setTimeout(() => {
        router.push(routes.HOME);
    }, 500);

    return () => {
        clearTimeout(timer);
    }
  }, []);
  return <h4>{`404 - Page Not Found. Redirecting to ${routes.HOME}...`}</h4>;
}
