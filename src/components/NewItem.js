//компонент новинки - инкапсулирован в контейнер NewItemsList

import { MDBBtn, MDBCard, MDBCardHeader, MDBCol, MDBIcon, MDBListGroup, MDBListGroupItem } from "mdbreact";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import basePath from '../utils/basePath'
// import { SoftFurContext } from "../context/SoftFur/SoftFurContext"


export const NewItem = ({ title, price_base, photo, soft_config, id, available, where }) => {

    // console.log(price_base, soft_config.name, JSON.stringify(available))

    //Опции для Лайтбокса
    const options = {
        settings: {
            overlayColor: "rgb(15 15 15 / 95%)",
            disableKeyboardControls: false,
            disableWheelControls: true,
            autoplaySpeed: 1500,
            transitionSpeed: 500,
        },
        buttons: {
            // backgroundColor: "#1b5245",
            // iconColor: "rgba(126, 172, 139, 0.8)",
            showDownloadButton: false,
            showNextButton: false,
            showPrevButton: false,
            showThumbnailsButton: false,
            showAutoplayButton: false,
        },
        caption: {
            showCaption: false,
        },
        thumbnails: {
            showThumbnails: false
        }
    }
    // console.log(where.title)
    return (
        <>
            <MDBCol >
                <MDBCard className="h-100">
                    <MDBCardHeader className="card-header">
                        <h5 className="card-title">{title}</h5>
                    </MDBCardHeader>
                    <SRLWrapper options={options}>
                        <a href={`${basePath}${photo[0].uri.url}`}>
                            <img src={`${basePath}${photo[0].uri.url}`} alt={photo[0].filename} className="card-img-top p-3" />
                        </a>
                    </SRLWrapper>
                </MDBCard>
            </MDBCol>
            <MDBCol className="d-flex flex-column">

                <MDBListGroup className="list-group-flush">
                    <MDBListGroupItem >Стоимость : {price_base} руб.</MDBListGroupItem>
                    <MDBListGroupItem >Конфигурация : {soft_config.name}</MDBListGroupItem>
                    <MDBListGroupItem >Наличие : {available ? <span>В наличии</span> : <span>Отсутствует</span>}</MDBListGroupItem>
                    {available ? <MDBListGroupItem ><span>{where.title}</span></MDBListGroupItem> : <MDBListGroupItem ><span>Заказать</span></MDBListGroupItem>}

                </MDBListGroup>

                <Link to={`/soft-furniture/${id}`} target="_blank" className="mt-auto d-flex justify-content-end">
                    <MDBBtn color="purple">Подробнее<MDBIcon icon="external-link-alt" className="ml-2"/></MDBBtn>
                </ Link>

            </MDBCol>

        </>
    )
}