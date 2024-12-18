import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from "../../layouts/Layout";
import Styles from "./Home.module.css";

import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg'

import Slider from "../../components/Slider";

import pldata from "../../JSON/programminglanguages.json"
import dbdata from "../../JSON/databases.json"
import frdata from "../../JSON/frameworks.json"
import cldata from "../../JSON/clouds.json"
import tdata from "../../JSON/technologies.json"
import sdata from "../../JSON/styles.json"

const Home = () => {
    const { t } = useTranslation(['Home','Projects']);
    const projects = t('Projects:Projects', { returnObjects: true }) || [];
    // Obtener valores desde el JSON
    const infoCareer = t('info career', { returnObjects: true }) || [];
    const university = t('university')?.trim() || '';
    const semester = t('semester')?.trim() || '';

    // Palabras que deseas resaltar
    const wordsToHighlight = [university, semester].filter(Boolean);

    // Función para resaltar palabras específicas
    const highlightText = (text, highlights) => {
        if (!text || typeof text !== 'string') return text; // Asegurarnos de que text es una cadena
        if (!Array.isArray(highlights) || highlights.length === 0) return text; // Validar highlights
        // Crear una expresión regular para las palabras
        const regex = new RegExp(`(${highlights.map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
        const parts = text.split(regex); // Dividir el texto
        return parts.map((part, index) =>
            highlights.some((word) => part.trim().toLowerCase() === word.toLowerCase()) ? (
                <strong key={index}>{part}</strong>
            ) : (
                part
            )
        );
    };

    const [selectedSkill, setSelectedSkill] = useState('programming languages');

    const handleSelectChange = (e) => {
        setSelectedSkill(e.target.value);
    };
    
    const [selectedProject, setSelectedProject] = useState('search engine');

    const handleProjectSelectChange = (e) => {
        setSelectedProject(e.target.value);
    }

    return (
        <Layout>
            <div className={Styles.container}>
                <div className={Styles.photocontainer}>
                    <picture>
                        <source srcSet="/images/logo/mylogo.webp" type="image/webp" />
                        <source srcSet="/images/logo/mylogo.png" type="image/png" />
                        <img src="/images/logo/mylogo.png" alt="logo" />
                    </picture>
                </div>
                <div className={Styles.infocontainer}>
                    <h1>Charlie Gallegos</h1>
                    <p>{t('career')}</p>
                    {infoCareer.map((line, index) => (
                        <p className={Styles.infocareer} key={index}>{highlightText(line, wordsToHighlight)}</p>
                    ))}
                    <span className={Styles.slogan}>{t('slogan')}</span>
                </div>
            </div>
            <div className={Styles.madewithcontainer}>
                <div className={Styles.technologiescontainer}>
                    <h2>{t('made with')}</h2>
                    <div>
                        <a href="https://vite.dev" target="_blank">
                            <img src={viteLogo} className={Styles.logo} alt="Vite logo" />
                        </a>
                        <a href="https://react.dev" target="_blank">
                            <img src={reactLogo} className={`${Styles.logo} ${Styles.react}`} alt="React logo" />
                        </a>
                    </div>
                    <h2>Vite + React</h2>
                </div>
            </div>
            <div className={Styles.skillscontainer}>
                <h2>{t('title skills')}</h2>
                <p>{t('info skills')}</p>
                <div className={Styles.selectcontainer}>
                    <select
                        onChange={handleSelectChange}
                    >
                        <option value="programming languages">{t('programming languages')}</option>
                        <option value="databases">{t('databases')}</option>
                        <option value="frameworks">{t('frameworks')}</option>
                        <option value="clouds">{t('clouds')}</option>
                        <option value="technologies">{t('technologies')}</option>
                        <option value="styles">{t('styles')}</option>
                    </select>

                </div>
                {selectedSkill === 'programming languages' && <Slider data={pldata} colortext={'black'} btnText={"Info"} />}
                {selectedSkill === 'databases' && <Slider data={dbdata} colortext={'black'} btnText={'Info'} />}
                {selectedSkill === 'frameworks' && <Slider data={frdata} colortext={'black'} btnText={'Info'} />}
                {selectedSkill === 'clouds' && <Slider data={cldata} colortext={'black'} btnText={'Info'} />}
                {selectedSkill === 'technologies' && <Slider data={tdata} colortext={'black'} btnText={'Info'} />}
                {selectedSkill === 'styles' && <Slider data={sdata} colortext={'black'} btnText={'Info'} />}
            </div>
            <div className={Styles.projectscontainer}>
                <h2>{t('title projects')}</h2>
                <p>{t('info projects')}</p>
                {selectedProject === 'search engine' && <Slider data={projects} colortext={'white'} btnText={'Info'} />}
            </div>
        </Layout>
    );
};

export default Home;
