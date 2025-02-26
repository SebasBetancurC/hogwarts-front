import React from 'react'
import "../styles/wizardCard.css";

export const WizardCard = () => {
    return (
        <>
            <div className='d-flex justify-content-center flex-wrap p-3'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front p-2">

                            <div style={{ backgroundColor: 'blue', height: 400, }}>
                                <p>Imagen</p>
                            </div>



                        </div>
                        <div className="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}






