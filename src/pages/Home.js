import { Fragment } from "react"
import SiteDescription from "../components/homepage/siteDescription"
import { NewItemsList } from "../containers/NewItemsList"

export const Home = () => {


    return (
        <Fragment>
            
            <SiteDescription />
            <NewItemsList />

        </Fragment>
    )
}