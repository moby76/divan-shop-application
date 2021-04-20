import { useContext, useState } from 'react'
import { ModalContext } from '../../context/modal/modalContext'
import './modal.css'

export const Modal = ({ title, content }) => {

   const { closeModal } = useContext(ModalContext)

   const [closing, setClosing] = useState(false)
   // const [type, setType] = useState('')

   const handlerClose = () => {
      setClosing(true)

      const closeTimeout = setTimeout(() => {
         closeModal() 
         clearTimeout(closeTimeout)
      }, 1000);
   }

   const closeClass = closing ? 'backDrop backDrop-hide' : 'backDrop'

   return (
      <div className={closeClass} onClick={handlerClose}>
         <div className="myModal" onClick={(event) => event.stopPropagation()}>
            <div className="modalCloseButton" onClick={handlerClose}>×</div>
            <div className="modalHeader">
               <h5>{title}</h5>
            </div>
            <div className="modalBody">
               {content}
            </div>
         </div>
      </div>
   )
}