import React, { Suspense } from "react";

import LoadingPage from "./LoadingPage";

const ProfileComponent = React.lazy(() => import("./Profile"));

export default function SuspenseContainer() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <ProfileComponent />
    </Suspense>
  );
}
