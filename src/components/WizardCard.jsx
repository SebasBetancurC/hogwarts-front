import React from 'react'
import "../styles/wizardCard.css";

export const WizardCard = () => {
    return (
        <>
            <div className='d-flex justify-content-center flex-wrap p-3'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front p-2">

                            <div className='image-container'>
                                <img className='image-personage' src="src/assets/images/images-personages/godric-gryffindor.jpg" alt="" />
                            </div>

                            <div className='name-wizard-container'>
                                <h1>Godric Gryffindor</h1>
                            </div>

                        </div>
                        <div className="flip-card-back">
                            <h1>Godric Gryffindor</h1>
                            <p>fue uno de los cuatro fundadores de Hogwarts y un mago legendario conocido por su valentía y espíritu noble.
                                Nació en el siglo X y defendía la importancia del coraje, la determinación y la caballerosidad en los magos.
                                Se dice que era un duelista excepcional y que empuñaba una espada encantada, la Espada de Gryffindor,
                                forjada por duendes y con propiedades mágicas únicas.
                                Gryffindor también valoraba la igualdad en la educación mágica, aceptando estudiantes de cualquier origen,
                                lo que lo enfrentó con Salazar Slytherin.
                                Su legado perdura en la Casa Gryffindor, que lleva su nombre y sigue formando magos valientes y leales en Hogwarts.</p>
                        </div>
                        <div>
                            {/* <img src="logo casa" alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}






