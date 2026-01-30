

import { useSearchParams } from "react-router-dom";
import { Login } from "./login";
import { Signup } from "./signup";
import { useEffect } from "react";


export function Auth() {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlStatus = searchParams.get("status");

  const status =urlStatus === "login" || urlStatus === "signup" ? urlStatus : "login";
useEffect(()=>{

    if (!urlStatus || (urlStatus !== "login" && urlStatus !== "signup")) {
      setSearchParams({ status: "login" });
    }

},[searchParams, setSearchParams, urlStatus])

  return <div>{status === "login" ? <Login /> : <Signup />}</div>;
}
