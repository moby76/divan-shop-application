import { Fragment } from "react"
// import SiteDescription from "../components/homepage/siteDescription"
import ShopsBlock from "../components/shopsBlock"
import { NewItemsList } from "../containers/NewItemsList"
import SiteDescription from "../components/homepage/siteDescription"
import NewModels from "../containers/NewModels"

export const Home = () => {


    return (
        <Fragment>
            <SiteDescription />
            <NewItemsList />
            <NewModels />            
            <ShopsBlock />
        </Fragment>
    )
}