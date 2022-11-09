import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Router from "./pages/Router";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}
