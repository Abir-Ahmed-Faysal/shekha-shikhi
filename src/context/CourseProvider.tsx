import { useState, type ReactNode } from "react";
import type { ICourseContext } from "../lib/types/CourseContext";
import { Context } from "./Context";

export type IValue = {
  data: string;
};

export type ICategory = "all" | "primary" | "secondary" | null;

type Props = {
  children: ReactNode;
};

const CourseProvider = ({ children }: Props) => {
  const [category, setCategory] = useState<ICategory>(null);

  const value: IValue = { data: "hi this is context provider" };

  const contextValue: ICourseContext = {
    value,
    category,
    setCategory,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default CourseProvider;
