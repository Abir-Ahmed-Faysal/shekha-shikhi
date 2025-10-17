import { RouterProvider } from "react-router/dom";
import { router } from "./router/routes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

import {} from "@tanstack/react-query";
import CourseProvider from "./context/CourseProvider";

createRoot(document.getElementById("root")!).render(
  <CourseProvider>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  </CourseProvider>
);
