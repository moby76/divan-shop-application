import { useContext } from "react"
import { Card } from "../components/Card"
import { Search } from "../components/Search"
import { GithubContext } from "../context/github/githubContext"

export const Articles = () => {

    //получим свойства loading, users из объекта/стейта контекста GithubContext(githubState)
    const { loading, users } = useContext(GithubContext)
    // console.log(cards)
    return (
        <div>
            <Search />
            <div className="row">
                {loading ?
                    // если загрузчик в значении true - то выведем сообщение на экран
                    <p className="text-center">Идёт загрузка...</p> :
                    // иначе пройдём по массиву users 
                    users.map(user => {
                        return (
                            <div className="col-sm-4 mb-4" key={user.id}>
                                <Card 
                                    user={user}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}