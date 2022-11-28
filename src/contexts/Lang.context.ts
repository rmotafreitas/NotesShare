import { createContext } from "react";
import { DEFAULT_LANG } from "../utils/Config.import";

export const LangContext: any = createContext(DEFAULT_LANG);

export interface LangContextProps {
  LANG: string;
  setLANG: (lang: string) => void;
}
