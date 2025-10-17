import { type Dispatch,type SetStateAction } from "react";
import type { ICategory, IValue } from "../context/CourseProvider";



export type ICourseContext = {
  value: IValue;
  category: ICategory;
  setCategory: Dispatch<SetStateAction<ICategory>>;
};