import { useContext } from "react";
import { Context } from "../context/Context";



export const useCourse = () => {
  const context = useContext(Context);



  return context;
};
