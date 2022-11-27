import { createContext } from "react";

export const LangContext: any = createContext("pt");

export interface LangContextProps {
  LANG: string;
  setLANG: (lang: string) => void;
}
