import { Fragment } from "react"
// import SiteDescription from "../components/homepage/siteDescription"
import Shops from "../components/shops"
import { NewItemsList } from "../containers/NewItemsList"
import SiteDescription from "../components/homepage/siteDescription"

export const Home = () => {


    return (
        <Fragment>
            <SiteDescription />
            <NewItemsList />
            <Shops />
        </Fragment>
    )
}