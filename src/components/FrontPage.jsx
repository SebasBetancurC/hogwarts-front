import React from "react";
import PropTypes from "prop-types";
import "../styles/FrontPage.css";

export const FrontPage = ({ frontPage }) => {
    return (
        <>

            <section className="front-page">
                <div className="front-page-content">
                    <img className="hogwarts-image"  src={frontPage} />
                </div>
            </section>

        </>
    )
}

FrontPage.propTypes = {
    frontPage: PropTypes.string.isRequired,
};
