import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import "../styles/line.css";

export const Line = () => {
    console.log("🔴 Line component renderizado");

    const { data: houses, loading, error } = useFetch("http://localhost:5000/api/houses");
    const location = useLocation();

    if (loading) return <p>Cargando datos...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!houses || houses.length === 0) return <p>No se encontraron casas</p>;

    const currentHouse = houses.find(
        (house) => `/${house.name.toLowerCase()}` === location.pathname.toLowerCase()
    );

    if (!currentHouse) return <p>No se encontró la casa</p>;

    return (
        <div
            className="frontLine"
            style={{
                background: `radial-gradient(circle, ${currentHouse.colors[0]}, ${currentHouse.colors[1] || currentHouse.colors[0]
                    }, transparent)`,
            }}
        />
    );
};


