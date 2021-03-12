import { useReducer } from 'react'
import axios from 'axios'
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from '../types'
import { GithubContext } from './githubContext'
import { githubReducer } from './githubReducer'

// получим данные из перменных среды
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

// создать константу для подстановки в шаблон для передачи в адресную строку
const withCreds = (url) => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export const GithubState = ({ children }) => {

    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }

    //получить стейт для guthub
    const [state, dispatch] = useReducer(githubReducer, initialState)

    // -- Функции которые будут менять стейт через dispatch и будем их экспортировать в объекте value с GithubContext.Provider

    // -- метод для доступа к поиску пользователей. Будет принимать значение value которое будем получать в компоненте <Search>. от users: [] 
    // для этого будет выполнен запрос на сервер
    const search = async value => {//по ключу value
        setLoader()//активируем загрузчик при вызове данного метода
        //получим доступ к поисковому API github и получим данные/массив пользователей
        const response = await axios.get(
            // `https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
            withCreds(`https://api.github.com/search/users?q=${value}&`)
        )

        //и передадим в редуктор
        dispatch({
            type: SEARCH_USERS,//тип экшена
            payload: response.data.items//и в нагрузку данные с сервера
        })
    }

    //константа-метод которая будет выводить(искать) определённого пользователя
    const getUser = async name => {//по ключу name
        setLoader()//активируем загрузчик при вызове данного метода
        //получим из списка пользователей содержимое со значением параметра name
        const response = await axios.get(
            // `https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
            withCreds(`https://api.github.com/users/${name}?`)
        )

        dispatch({
            type: GET_USER,
            payload: response.data//передаём данные пользователя в редюсер
        })
    }

    //константа которая будет получать список репозиториев
    const getRepos = async name => {//по ключу name
        setLoader()//активируем загрузчик при вызове данного метода
        // запрос на получение репозиториев по имени пользователя и ограничим 5-ю
        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`)//per_page=5 - ограничение 5-ю параметрами на странице
        )
        dispatch({
            type: GET_REPOS,
            payload: response.data
        })
    }

    //метод для очистки списка пользователей
    const clearUsers = () => {
        dispatch({
            type: CLEAR_USERS
        })
    }

    //метод изменения состояния лоадера
    const setLoader = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    //выполнить деструктуризацию свойств стейта для присвоения им своих переменных
    const { user, users, loading, repos } = state//извлекаем свойства из state(state.user, state.users, state.loading, state.repos) в user, users, loading, repos

    return (
        <GithubContext.Provider value={{
            //теперь в контекст нужно передать созданные методы и свойства стейта
            search, getUser, getRepos, clearUsers, setLoader,
            user, users, loading, repos
        }}>
            {children}
        </GithubContext.Provider>
    )
}