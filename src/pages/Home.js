import { Fragment } from "react"
// import SiteDescription from "../components/homepage/siteDescription"
import ShopsBlock from "../components/shopsBlock"
import { NewItemsList } from "../containers/NewItemsList"
import SiteDescription from "../components/homepage/siteDescription"
import NewModels from "../containers/NewModels"
import Configlist from "../containers/configlist"
import { MDBContainer } from "mdbreact"
// import Config from "./Config"

export const Home = () => {


    return (
        <Fragment>
            <div className="bg"></div>
            <SiteDescription />
            <Configlist />
            {/* <Config /> */}
            <NewItemsList />
            <NewModels />
            <ShopsBlock />

        </Fragment>
    )
}