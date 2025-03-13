import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/navbarSearch.css";
import { Search } from 'lucide-react';

export const NavBarSearchWitches = ({ setSearch }) => {
    const handleSearch = (e) => {
        setSearch(e.target.value); 
    };

    return (
        <nav className="navbar-search navbar bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand">Magos y Brujas</NavLink>
                <div className="search-container">
                    <Search className="search-icon" size={20} />
                    <input
                        className="form-control search-input"
                        type="search"
                        placeholder="Buscar mago/bruja..."
                        aria-label="Search"
                        onChange={handleSearch}
                    />
                </div>
            </div>
        </nav>
    );
};

