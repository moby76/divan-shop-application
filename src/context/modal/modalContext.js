import { createContext } from "react";

export const ModalContext = createContext()

// I create a useModalContext custom hook which will be used to use this context
// export const useModalContext = () => useContext(ModalContext)