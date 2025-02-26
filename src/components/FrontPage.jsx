import React from "react";
import PropTypes from "prop-types";
import { useFetch } from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import "../styles/frontPage.css";

export const FrontPage = ({ frontPage }) => {
    const { data: houses, loading, error } = useFetch("http://localhost:5000/api/houses");
    const location = useLocation();


    if (loading) return <p>Cargando portada...</p>;
    if (error) return <p>Error: {error}</p>;

    const currentHouse = houses.find(house => `/${house.name.toLowerCase()}` === location.pathname.toLowerCase());

    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "30px",
                    background: `repeating-linear-gradient(
                        90deg,
                        ${currentHouse.colors[0]} 0px,
                        ${currentHouse.colors[0]} 30px, 
                        ${currentHouse.colors[1] || currentHouse.colors[0]} 20px,
                        ${currentHouse.colors[1] || currentHouse.colors[0]} 60px 
                    )`,
                }}
            ></div>

            <div className="container houseContainer">
                <div className="d-flex justify-content-center align-items-center flex-wrap">
                    <div className="d-flex p-2">
                        <img className="emblemImage" src={currentHouse.emblemFrontPage} alt={`${currentHouse.name} logo`} />
                    </div>
                    <div className="d-flex p-2" >
                        <h1 className="fw-bold title-house" style={{
                            fontSize: "var(--font-size-title)", background: `linear-gradient(45deg, ${currentHouse.colors[0]}, ${currentHouse.colors[1] || "#FFD700"})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",      
                        }}>{currentHouse.name}</h1>
                    </div>
                </div>

                
            </div>

        </>
    );
};

FrontPage.propTypes = {
    frontPage: PropTypes.string.isRequired,
};

