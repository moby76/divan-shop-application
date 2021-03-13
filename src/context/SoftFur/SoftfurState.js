import { useEffect, useState } from 'react'
import API from '../../utils/api'
import { SoftFurContext } from './SoftFurContext'

export const SoftFurState = ({ children }) => {

    const [content, setContent] = useState([])


    useEffect(() => {

        const fetchData = async () => {
            const respValues = await API.get(
                `node/soft_fur?include=field_photo,field_soft_config&sort=created&page[limit]=10`
            )
            setContent(respValues.data.data)
            // setImage(respImg.data.included)
        }
        fetchData()
    }, [])


    return <SoftFurContext.Provider value={{
        // fetchData,
        content
    }}>
        {children}
    </SoftFurContext.Provider>
}

