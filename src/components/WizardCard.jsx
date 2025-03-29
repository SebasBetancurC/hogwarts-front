import React from 'react'
import "../styles/wizardCard.css";
import { useFetch } from "../hooks/useFetch";
import { useLocation, NavLink } from "react-router-dom";



export const WizardCard = () => {

    const { data: wizards, loading, error } = useFetch("http://localhost:5000/api/wizards");
    const location = useLocation();

    if (loading) return <p>Cargando magos...</p>;
    if (error) return <p>Error: {error}</p>;

    const houseName = location.pathname.replace("/", "").toLowerCase();

    const filteredWizards = wizards.filter(wizard =>
        wizard.house && wizard.house.name.toLowerCase() === houseName && wizard.isFounder === true
    );

    const truncateText = (text, length) => {
        if (text.length > length) {
            return `${text.slice(0, length)}...`;
        }
        return text;
    };

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
                                        <h1 style={{fontSize: '1.8rem',}}>{wizard.name}</h1>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <h1>{wizard.name}</h1>
                                    <p>
                                        {truncateText(wizard.biography, 280)}
                                        {wizard.biography.length > 280 && (
                                            <NavLink to={`/biography/${wizard._id}`} className="see-more">
                                                Ver más
                                            </NavLink>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p></p>
                )}
            </div>


        </>

    )
}






