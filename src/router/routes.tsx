import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Todos from "../pages/Todos/Todos";
import { CourseFn } from "../pages/course/Course";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "/courses/:category", Component: CourseFn },
      { path: "/myTodos", Component: Todos },
    ],
  },
]);
