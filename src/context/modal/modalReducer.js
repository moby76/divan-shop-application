import { HIDE_MODAL, SHOW_MODAL } from "../types";

export const ModalReducer = (state, action) => {
   switch (action.type) {
      case SHOW_MODAL:
         return {
            modalType: action.modalType,
            modalProps: action.modalProps
         }
      case HIDE_MODAL:
         return {
            modalType: null,
            modalProps: {}
         }
      default:
         return{
            ...state
         }
   }
}