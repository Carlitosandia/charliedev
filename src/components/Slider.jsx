import { useState } from "react";
import { Link } from "react-router-dom";

import Styles from "../styles/Slider.module.css";

const Slider = ({ data, colortext, btnText }) => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };
    
    const handleClickButton = (data) => {
        
    }

    return (
        <div className={Styles.slidercontainer}>
            <button onClick={handlePrev} className={Styles.navbtn}>⬅</button>
            <div className={Styles.slider}>
                {data.map((item, index) => {
                    // Calcula la posición de las imágenes
                    const isActive = index === currentIndex;
                    const isPrev = index === (currentIndex - 1 + data.length) % data.length;
                    const isNext = index === (currentIndex + 1) % data.length;

                    // Muestra solo las imágenes necesarias
                    if (!isActive && !isPrev && !isNext) {
                        return null; // Ignorar imágenes "sobrantes"
                    }

                    // Asigna clases según la posición
                    const position = isActive
                    ? "active"
                    : isPrev
                    ? "prev"
                    : "next";

                    return (
                        <div key={item.id} className={`${Styles.slide} ${Styles[position]}`}>
                            <picture>
                                <source srcSet={`${item.image}.webp`} type="image/webp" />
                                <source srcSet={`${item.image}.png`} type="image/png" />
                                <img src={`${item.image}.png`} alt={item.name} />
                            </picture>
                            {isActive && (
                                <div className={Styles.info}>
                                    <h3 className={Styles[colortext]}>{item.name}</h3>
                                    <Link to={`/${item.type}/${item.id}`} className={Styles.btnLink}>{btnText}</Link>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <button onClick={handleNext} className={Styles.navbtn}>➡</button>
        </div>
    );
};

export default Slider;
