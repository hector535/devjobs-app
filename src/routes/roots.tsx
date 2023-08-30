import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header/Header";

export const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
