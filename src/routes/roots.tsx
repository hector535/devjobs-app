import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Header } from "@/components/Header/Header";
import { ErrorView } from "@/components/ErrorView/ErrorView";
import { LoadingView } from "@/components/LoadingView/LoadingView";

export const Root = () => {
  return (
    <ErrorBoundary
      FallbackComponent={(props) => <ErrorView fullscreen {...props} />}
    >
      <Suspense fallback={<LoadingView text="Loading..." fullscreen />}>
        <Header />
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  );
};
