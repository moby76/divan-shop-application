import { Fragment } from "react"
// import SiteDescription from "../components/homepage/siteDescription"
import ShopsBlock from "../components/shopsBlock"
import { NewItemsList } from "../containers/NewItemsList"
import SiteDescription from "../components/homepage/siteDescription"
import NewModels from "../containers/NewModels"
import Configlist from "../containers/configlist"

export const Home = () => {


    return (
        <Fragment>
            <SiteDescription />
            <Configlist />
            <NewItemsList />
            <NewModels />            
            <ShopsBlock />
        </Fragment>
    )
}