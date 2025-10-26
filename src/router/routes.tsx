import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Todos from "../pages/Todos/Todos";
import { CourseFn } from "../pages/course/Course";
import Translation from "../pages/Translation/Translation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "/courses/:category", Component: CourseFn },
      { path: "/courses/translation", Component: Translation },
      { path: "/myTodos", Component: Todos },
    ],
  },
]);
