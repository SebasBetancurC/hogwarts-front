import React from 'react'
import "../styles/informationWs.css";

export const InformationWs = ({ wizard }) => {
    return (
        <>

            <div className="container-tabs">
                <div className="card-inner">
                    <div className="card-front p-2">
                        <div className='image-container'>
                            <img className='image-personage' src={wizard.image} alt={wizard.name} />
                        </div>
                        <div className='name-wizard-container'>
                            <h1>{wizard.name}</h1>
                        </div>
                    </div>
                </div>
                <div className="orbit nav d-flex align-content-center flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="false">Casa</button>
                    <button className="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" >Patronus</button>
                    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Varita</button>
                    <button className="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true">Biografía</button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">{wizard?.biography}</div>
                    <div className="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                        <h1
                            style={{
                                color: wizard?.house?.colors?.[0] || '#000',
                                padding: '5px',
                                borderRadius: '8px'
                            }}
                        >
                            {wizard?.house?.name || 'Sin casa asignada'}
                        </h1>
                        <img className='container-emblem' src={wizard?.house?.emblemFrontPage || 'Sin casa asignada'} alt="" />
                    </div>
                    <div className="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">{wizard?.patronus || 'Sin Patronus'}</div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">{wizard?.wand || 'Sin varita'}</div>
                </div>
            </div>

        </>
    )
}
