import { createContext } from "react";
import type { ICourseContext } from "../types/CourseContext";

export const Context = createContext<ICourseContext | undefined>(undefined);