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

            <MDBContainer fluid className="bg">
                {/* <div className="bg"></div> */}

                <SiteDescription />
                <MDBContainer fluid >
                    <MDBContainer className="bg-white p-1">
                        <Configlist />
                        {/* <Config /> */}
                        <NewItemsList />
                        <NewModels />
                    </MDBContainer>
                    <ShopsBlock />
                </MDBContainer>
            </MDBContainer>
        </Fragment>
    )
}