import { useContext } from "react";
import AppContext from "./app_state";

export default function useAppContext() {
    const appContext = useContext(AppContext);
    return appContext;
}