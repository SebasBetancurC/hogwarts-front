import React from 'react';
import "../styles/pageWizardsWitches.css";
import { useFetch } from "../hooks/useFetch";
import { Link } from 'react-router-dom';

export const WizardsWitches = ({ search }) => {
    const { data: wizards, loading, error } = useFetch("http://localhost:5000/api/wizards");

    if (loading) return <p>Cargando magos...</p>;
    if (error) return <p>Error: {error}</p>;

    
    const filteredWizards = wizards.filter(wizard =>
        wizard.name.toLowerCase().includes(search.toLowerCase()) 
    );

    const truncateText = (text, length) => {
        if (text.length > length) {
            return `${text.slice(0, length)}...`;
        }
        return text;
    };

    return (
        <div className='styles-wizards-witches d-flex justify-content-center flex-wrap p-3'>
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
                                <p>
                                    {truncateText(wizard.biography, 280)}
                                    {wizard.biography.length > 280 && (
                                        <Link to={`/wizard/${wizard._id}`} className="see-more">
                                            Ver más
                                        </Link>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No hay magos registrados.</p>
            )}
        </div>
    );
};

