import React, { useState } from "react";
import "../styles/majorNavBarHogwarts.css";
import { NavLink, useLocation } from "react-router-dom";
import { houses } from "../data/houses";


export const MajorNavBarHogwarts = () => {
    const location = useLocation();
    const [hoveredHouse, setHoveredHouse] = useState(null);

    return (
        <>
            <section>
                <div className="nav-logos d-flex justify-content-center">
                    <img className="logo-font-nav" src="assets/images/images-hogwarts/hogwarts-font.gif" alt="" />
                </div>
            </section>

            <nav className="navbar-links navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                <img className="ico-logo-links" src="src\assets\images\images-hogwarts\hogwarts-logo-ico.ico" />
                                <span>Inicio</span> </NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    
                                <img className="ico-link-witch" src="src\assets\images\images-hogwarts\crystal-ball-x32.png" />
                                   Mundo Mágico

                                </a>
                                <ul class="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Historia de Hogwarts</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Mapa del Merodeador</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <img className="ico-links" src="src\assets\images\images-hogwarts\hogwarts-castle-x32.png" />
                                    <span>Casas</span>
                                </div>

                                <ul className="dropdown-menu">
                                    {houses.map((house, index) => {
                                        const isActive = location.pathname === `/${house.name}`;

                                        return (
                                            <React.Fragment key={house.id}>
                                                <li>
                                                    <NavLink
                                                        className="dropdown-item"
                                                        to={`/${house.name}`}
                                                        onMouseEnter={() => setHoveredHouse(house.id)}
                                                        onMouseLeave={() => setHoveredHouse(null)}
                                                        style={{
                                                            color: isActive || hoveredHouse === house.id ? house.colors[0] : "black",
                                                            transition: "color 0.3s ease-in-out",
                                                            position: "relative",
                                                            display: "flex",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <img
                                                            src={(isActive || hoveredHouse === house.id) ? house.hoverLogo : house.logo}
                                                            alt={`${house.name} logo`}
                                                            style={{ width: "40px", marginRight: "10px", transition: "0.3s" }}
                                                        />
                                                        {house.name}

                                                        {/* Línea de colores debajo del texto */}
                                                        <div className="house-underline"
                                                            style={{
                                                                background: `repeating-linear-gradient(
                                                                90deg,
                                                                ${house.colors[0]} 0px,
                                                                ${house.colors[0]} 10px,
                                                                ${house.colors[1]} 10px,
                                                                ${house.colors[1]} 20px
                                                            )`,
                                                                position: "absolute",
                                                                bottom: "-7px",
                                                                left: "0",
                                                                width: "100%",
                                                                height: "10px",
                                                                transform: isActive || hoveredHouse === house.id ? "scaleX(1)" : "scaleX(0)",
                                                                transformOrigin: "left",
                                                                transition: "transform 0.7s ease-in-out",
                                                            }}
                                                        ></div>
                                                    </NavLink>
                                                </li>
                                                {index < houses.length - 1 && <hr className="dropdown-divider" />}
                                            </React.Fragment>
                                        );
                                    })}
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img className="ico-link-witch" src="src\assets\images\images-hogwarts\dobby-x32.png" />
                                    <span>Magia y Personajes</span> 
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Magos y Brujas</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Criaturas Mágicas</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img className="ico-links" src="src\assets\images\images-hogwarts\potion-x32.png" />
                                   <span>Hechicería</span> 
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Hechizos y Pociones</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Tienda Mágica</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/what-is-your-house">
                                <img className="ico-links" src="src\assets\images\images-hogwarts\hat-selector-x32.png" />
                                 <span>Sombrero Seleccionador</span></NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
