
import { useState } from "react"
import { Modal } from "../../utils/modal/modal"
import { ModalContext } from "./modalContext"
// import { ModalReducer } from "./modalReducer"

export const ModalState = ({ children }) => {

   //создать 2 состояния с начальным значением 
   // const initialState = {
   //    modalType: null,
   //    modalProps: {}
   // }

   // const [state, dispatch] = useReducer(ModalReducer, initialState)
   const [modalOpened, setModalOpened] = useState(false)//значение состояния окна
   const [modalContent, setModalContent] = useState(null)//контент окна

   // создать методы меняющие состояние окна
   const openModal = ({ title, content }) => {//modalConfig - параметр в который будет переданы 2 значения: 1 - тайтл, 2 - контент
      // const { title, content } = modalConfig//деструктуируем modalConfig
      setModalContent({ title, content})
      setModalOpened(true)
   }

   const closeModal = () => {
      setModalOpened(false)
   }

   // const { modalType, modalProps } = state

   return <ModalContext.Provider value={{
      openModal, closeModal
      // dispatch, modalType, modalProps
   }}>
      {modalOpened && <Modal { ...modalContent}/>}
      {children}
   </ModalContext.Provider>
}