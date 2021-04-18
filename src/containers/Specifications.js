// Контейнер с описанием товара в виде табов/якорных ссылок и контента вызываемого ими
// Инкапсулирован в страницу описания товара - pages/ProdDesc.js

import { useContext } from "react";
import Config from "../components/softFurniture/config";
import Description from "../components/softFurniture/description";
import Dimensions from "../components/softFurniture/dimensions";
import Features from "../components/softFurniture/features";
import Filling from "../components/softFurniture/filling";
import Scheme from "../components/softFurniture/scheme";
import Transformation from "../components/softFurniture/transformation";
import { ModalContext } from "../context/modal/modalContext";

function Specifications({ available, config, transformation, filling, productModelScheme, dimensions, productModelDesc, features, productModelName, productModelId }) {
    
    const { openModal, closeModal } = useContext(ModalContext)

    //создать обработчик событий при нажатии на кнопку
    const handlerOpenDimensions = () => {
        openModal({
            title: "Габариты",
            content: <Dimensions dimensions={dimensions} />
        })
    }
    
    return (
        <div className="container">

            {/* Табы основные */}
            <div className="card-header bg-transparent">
                <div className="container-fluid">
                    <ul className="nav nav-pills nav-justified">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#characteristics">Характеристики</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#scheme">Схема</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#description">Описание модели</a>
                        </li>
                        <li className="nav-item">
                            {available ? <a className="nav-link" data-toggle="tab" href="#available">Наличие</a> : null}
                        </li>
                    </ul>
                </div>
            </div>

            {/* контент для табов (ссылок) --^ */}

            <div className="tab-content pt-3" style={{height: 300, overflowX: "hidden", overflowY: "auto"}}>
                {/* блок характеристик товара */}
                <div className="tab-pane fade show active" id="characteristics">
                    <div className="row">
                        {/* Левая колонка с краткими характеристиками: Трансформ., наполнение, конфигурация */}
                        <div className="col-sm-7">
                            <div className="row">
                                {/* табы */}
                                <div className="col-sm-4">
                                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <a className="nav-link active" id="v-pills-config-tab" data-toggle="pill" href="#v-pills-config" role="tab" aria-controls="v-pills-config" aria-selected="false">Конфигурация</a>
                                        <a className="nav-link " id="v-pills-transform-tab" data-toggle="pill" href="#v-pills-transform" role="tab" aria-controls="v-pills-transform" aria-selected="false">Трансформация</a>
                                        <a className="nav-link " id="v-pills-filling-tab" data-toggle="pill" href="#v-pills-filling" role="tab" aria-controls="v-pills-filling" aria-selected="false">Наполнение</a>
                                        <div className="btn btn-dark mt-1" role="tab" onClick={handlerOpenDimensions}>Размеры</div>
                                    </div>
                                </div>

                                {/* Содержимое --^ */}
                                <div className="col-sm-8">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <div className="tab-pane fade show active" id="v-pills-config" role="tabpanel" aria-labelledby="v-pills-config-tab"><Config config={config} /></div>
                                        <div className="tab-pane fade" id="v-pills-transform" role="tabpanel" aria-labelledby="v-pills-transform-tab"><Transformation transformation={transformation} /></div>
                                        <div className="tab-pane fade" id="v-pills-filling" role="tabpanel" aria-labelledby="v-pills-filling-tab"><Filling filling={filling} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <Features features={features} />
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="scheme">
                    <div className="row">
                        <div className="col-sm-12"><Scheme scheme={productModelScheme} /></div>
                        {/* <div className="col-sm-4"><Dimensions dimensions={dimensions} /></div> */}
                    </div>
                </div>
                <div className="tab-pane fade" id="description">
                    <div className="row">
                        <div className="col-sm-12">
                            <Description
                                modelDesc={productModelDesc}
                                modelName={productModelName}
                                id={productModelId}//id модели для формирования сылки на страницу модели  
                            />
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="available">...</div>
            </div>

        </div>
    )
}

export default Specifications
