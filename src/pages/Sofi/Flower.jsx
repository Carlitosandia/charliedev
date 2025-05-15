import React, { useEffect } from 'react';
import styles from './flower.module.css';

const Flower = () => {
    useEffect(() => {
        document.body.classList.remove('container');

        return () => {
            document.body.classList.add('container');
        };
    }, []);

    return (
        <div>
            <div className={styles.bg}>
                <div className={styles.night}></div>
                <div className={styles.flowers}>
                    <div className={`${styles.flower} ${styles['flower--1']}`}>
                        <div className={`${styles.flower__leafs} ${styles['flower__leafs--1']}`}>
                            <div className={`${styles.flower__leafs} ${styles['flower__leaf--1']}`}></div>
                            <div className={`${styles.flower__leaf} ${styles['flower__leaf--2']}`}></div>
                            <div className={`${styles.flower__leaf} ${styles['flower__leaf--3']}`}></div>
                            <div className={`${styles.flower__leaf} ${styles['flower__leaf--4']}`}></div>
                            <div className={styles.flower__whiteCircle}></div>

                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`${styles.flower__light} ${styles[`flower__light--${i + 1}`]}`}
                                ></div>
                            ))}
                        </div>
                        <div className={styles.flower__line}>
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`${styles.flower__line__leaf} ${styles[`flower__line__leaf--${i + 1}`]}`}
                                ></div>
                            ))}
                        </div>
                    </div>

                    {/* Flower 2 */}
                    <div className={`${styles.flower} ${styles['flower--2']}`}>
                        <div className={`${styles.flower__leafs} ${styles['flower__leafs--2']}`}>
                            {[1, 2, 3, 4].map(n => (
                                <div
                                    key={n}
                                    className={`${styles.flower__leaf} ${styles[`flower__leaf--${n}`]}`}
                                ></div>
                            ))}
                            <div className={styles.flower__whiteCircle}></div>
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`${styles.flower__light} ${styles[`flower__light--${i + 1}`]}`}
                                ></div>
                            ))}
                        </div>
                        <div className={styles.flower__line}>
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`${styles.flower__line__leaf} ${styles[`flower__line__leaf--${i + 1}`]}`}
                                ></div>
                            ))}
                        </div>
                    </div>

                    {/* Flower 3 */}
                    <div className={`${styles.flower} ${styles['flower--3']}`}>
                        <div className={`${styles.flower__leafs} ${styles['flower__leafs--3']}`}>
                            {[1, 2, 3, 4].map(n => (
                                <div
                                    key={n}
                                    className={`${styles.flower__leaf} ${styles[`flower__leaf--${n}`]}`}
                                ></div>
                            ))}
                            <div className={styles.flower__whiteCircle}></div>
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`${styles.flower__light} ${styles[`flower__light--${i + 1}`]}`}
                                ></div>
                            ))}
                        </div>
                        <div className={styles.flower__line}>
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`${styles.flower__line__leaf} ${styles[`flower__line__leaf--${i + 1}`]}`}
                                ></div>
                            ))}
                        </div>
                    </div>

                    {/* Flower 4 (same leafs as flower 3) */}
                    <div className={`${styles.flower} ${styles['flower--4']}`}>
                        <div className={`${styles.flower__leafs} ${styles['flower__leafs--3']}`}>
                            {[1, 2, 3, 4].map(n => (
                                <div
                                    key={n}
                                    className={`${styles.flower__leaf} ${styles[`flower__leaf--${n}`]}`}
                                ></div>
                            ))}
                            <div className={styles.flower__whiteCircle}></div>
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`${styles.flower__light} ${styles[`flower__light--${i + 1}`]}`}
                                ></div>
                            ))}
                        </div>
                        <div className={styles.flower__line}>
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`${styles.flower__line__leaf} ${styles[`flower__line__leaf--${i + 1}`]}`}
                                ></div>
                            ))}
                        </div>
                    </div>

                    {/* Grow ans 1.2s */}
                    <div className={styles['grow-ans']} style={{ '--d': '1.2s' } /* estilo CSS custom prop */}>
                        <div className={styles['flower__g-long']}>
                            <div className={styles['flower__g-long__top']}></div>
                            <div className={styles['flower__g-long__bottom']}></div>
                        </div>
                    </div>

                    {/* Growing grass 1 */}
                    <div className={styles['growing-grass']}>
                        <div className={`${styles.flower__grass} ${styles['flower__grass--1']}`}>
                            <div className={styles['flower__grass--top']}></div>
                            <div className={styles['flower__grass--bottom']}></div>
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`${styles.flower__grass__leaf} ${styles[`flower__grass__leaf--${i + 1}`]}`}
                                ></div>
                            ))}
                            <div className={styles['flower__grass__overlay']}></div>
                        </div>
                    </div>

                    {/* Growing grass 2 */}
                    <div className={styles['growing-grass']}>
                        <div className={`${styles.flower__grass} ${styles['flower__grass--2']}`}>
                            <div className={styles['flower__grass--top']}></div>
                            <div className={styles['flower__grass--bottom']}></div>
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`${styles.flower__grass__leaf} ${styles[`flower__grass__leaf--${i + 1}`]}`}
                                ></div>
                            ))}
                            <div className={styles['flower__grass__overlay']}></div>
                        </div>
                    </div>

                    {/* Multiple grow-ans with different --d */}
                    {[{ d: '2.4s', cls: 'flower__g-right flower__g-right--1' },
                    { d: '2.8s', cls: 'flower__g-right flower__g-right--2' },
                    { d: '2.8s', cls: 'flower__g-front' },
                    { d: '3.2s', cls: 'flower__g-fr' },
                    ].map(({ d, cls }, i) => (
                        <div
                            key={i}
                            className={styles['grow-ans']}
                            style={{ '--d': d }}
                        >
                            <div className={cls.split(' ').map(c => styles[c]).join(' ')}>
                                {/* Algunas hojas sólo en ciertos */}
                                {cls.includes('front') ? (
                                    <>
                                        {[...Array(8)].map((_, j) => (
                                            <div
                                                key={j}
                                                className={`${styles['flower__g-front__leaf-wrapper']} ${styles[`flower__g-front__leaf-wrapper--${j + 1}`]}`}
                                            >
                                                <div className={styles['flower__g-front__leaf']}></div>
                                            </div>
                                        ))}
                                        <div className={styles['flower__g-front__line']}></div>
                                    </>
                                ) : cls.includes('fr') ? (
                                    <>
                                        <div className={styles.leaf}></div>
                                        {[...Array(8)].map((_, j) => (
                                            <div
                                                key={j}
                                                className={`${styles['flower__g-fr__leaf']} ${styles[`flower__g-fr__leaf--${j + 1}`]}`}
                                            ></div>
                                        ))}
                                    </>
                                ) : cls.includes('right') ? (
                                    <div className={styles.leaf}></div>
                                ) : null}
                            </div>
                        </div>
                    ))}

                    {/* Long-g sections */}
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className={`${styles['long-g']} ${styles[`long-g--${i}`]}`}>
                            {[...Array(4)].map((_, j) => {
                                // Para los delays de animación hay que ajustar según el índice (ejemplo arbitrario)
                                // Aquí lo hago igual que el original:
                                let delay = '3s';
                                if (j === 1) delay = '2.2s';
                                if (j === 2) delay = '3.4s';
                                if (j === 3) delay = '3.6s';
                                // Pero en el original hay que adaptar para cada grupo, puedes ajustar si quieres
                                return (
                                    <div
                                        key={j}
                                        className={styles['grow-ans']}
                                        style={{ '--d': delay }}
                                    >
                                        <div className={`${styles.leaf} ${styles[`leaf--${j}`]}`}></div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* Bubbles section */}
                <div className={styles.bubbles}>
                    {[...Array(18)].map((_, i) => (
                        <div key={i} className={styles.bubble}>
                            <svg className={styles.heart} viewBox="0 0 32 32">
                                <title>heart22</title>
                                <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
                            </svg>
                        </div>
                    ))}
                </div>

            </div>
            <div className={styles.phrase}>
                <p>Para el amor de mi vida, te voy a querer hoy y toda una vida, te quiero y te adoro mi Sofi linda ❤️</p>
            </div>
        </div>
    );
};

export default Flower;
