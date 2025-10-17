import { createContext } from "react";
import type { ICourseContext } from "../lib/types/CourseContext";

export const Context = createContext<ICourseContext | undefined>(undefined);