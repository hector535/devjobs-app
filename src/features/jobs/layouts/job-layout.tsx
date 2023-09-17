import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Header } from "@/features/jobs";
import { ErrorView, LoadingView } from "@/components";

export const JobLayout = () => {
  return (
    <ErrorBoundary
      FallbackComponent={(props) => <ErrorView fullscreen {...props} />}
    >
      <Header />
      <Suspense fallback={<LoadingView text="Loading..." fullscreen />}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  );
};
