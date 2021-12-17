/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <Link to={`/catalogo/Destacados`}>
                <img src="https://i.imgur.com/wRgT57B.jpg" className="mainBanner" />
            </Link>
        </div>
    )
}

export default Banner;