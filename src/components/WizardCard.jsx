import React from 'react'
import "../styles/wizardCard.css";
import { useFetch } from "../hooks/useFetch";
import { useLocation } from "react-router-dom";

export const WizardCard = () => {

    const { data: wizards, loading, error } = useFetch("http://localhost:5000/api/wizards");
    const location = useLocation();

    if (loading) return <p>Cargando magos...</p>;
    if (error) return <p>Error: {error}</p>;

    const houseName = location.pathname.replace("/", "").toLowerCase();

    const filteredWizards = wizards.filter(wizard =>
        wizard.house && wizard.house.name.toLowerCase() === houseName
    );

    return (
        <>
            <div className='d-flex justify-content-center flex-wrap p-3'>
                {filteredWizards.length > 0 ? (
                    filteredWizards.map(wizard => (
                        <div key={wizard._id} className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front p-2">
                                    <div className='image-container'>
                                        <img className='image-personage' src={wizard.image} alt={wizard.name} />
                                    </div>
                                    <div className='name-wizard-container'>
                                        <h1>{wizard.name}</h1>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <h1>{wizard.name}</h1>
                                    <p>{wizard.biography}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay magos en esta casa.</p>
                )}
            </div>


        </>

    )
}






