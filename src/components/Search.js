import { useContext, useState } from 'react'//получить доступ к контексту
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

export const Search = () => {

    const [searchValue, setValue] = useState('')

    const { show, hide } = useContext(AlertContext)

    //получим контекст из GithubContext
      const github = useContext(GithubContext)

    const onSubmit = (event) => {
        if (event.key !== 'Enter') {//если НЕ нажата  кнопка поведения - Enter 
            return null
        }

          github.clearUsers()

        //Иначе(если нажата кнопка поведения - Enter ) то выполняем проверку на тип значения в инпуте и запускаем запрос/ в противном случае показываем Алерт
          if (searchValue.trim()) {//Если значение инпута - это строка. (Метод trim() удаляет пробельные символы с начала и конца строки)
            console.log('request', searchValue)
            //скрываем алерт
          hide()
        //активируем метод search из контекста GithubContext - компонента GithubState с передачей туда значения введёное в поисковом запросе
          github.search(searchValue.trim()) 
          } else {
          show('Введите данные пользователя', 'danger')//активируем метод show(text: text, type='secondary') из AlerState
          }          
    }
    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Введите название статей..."
                value={searchValue}
                // //создать слушателя реагирующего при изменении в инпуте. 
                // //при изменении будет вызываться ф-ция setValue обрабатывающая стейт searchValue
                onChange={event => setValue(event.target.value)}
                //создать слушателя на НАЖАТИЕ символьной клавиши проверим работу алерта
                onKeyPress={onSubmit}
            />
        </div>
    )
}