import { useReducer } from "react";
import { SET_PAGINATE_PAGE, SET_PAGINATE_BLOCK } from "../types";
import { PaginationContext } from "./paginationContext";
import { PaginationReducer } from "./paginationReducer";

export const PaginationState = ({ children }) => {

    const initialState = {
        
        currentPage: 1,//текущая страница в пагинации
        itemsPerPage: 6,//количество карточек с товарами на странице с мягкой мебелью. для пагинации
        
        currentBlock: 1,//текущий блок в пагинации
        itemsPerBlock: 3//элементов на блок для пагинации
        // loader: false
    }

    const [state, dispatch] = useReducer(PaginationReducer, initialState)

    //метод изменения номера текущей пагинации Страницы
    const paginatePage = (pageNumber) => {
        dispatch({
            type: SET_PAGINATE_PAGE,
            value: pageNumber
        })
    }
    //метод изменения номера текущей пагинации Блока
    const paginateBlock = (blockNumber) => {
        dispatch({
            type: SET_PAGINATE_BLOCK,
            value: blockNumber
        })
    }

    const { currentPage, itemsPerPage, currentBlock, itemsPerBlock } = state

    return <PaginationContext.Provider value={{
        paginatePage, paginateBlock,
        currentPage, itemsPerPage, currentBlock, itemsPerBlock
    }}>
        {children}
    </PaginationContext.Provider>

}