import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Layout from '../../layouts/Layout'
import Styles from './Skill.module.css'
import ProjectInfoBox from "../../components/ProjectInfoBox";

import pldata from "../../JSON/programminglanguages.json"
import dbdata from "../../JSON/databases.json"
import frdata from "../../JSON/frameworks.json"
import cldata from "../../JSON/clouds.json"
import tdata from "../../JSON/technologies.json"
import sdata from "../../JSON/styles.json"

const Skill = () => {
    const { type, id } = useParams();
    const datasets = {
        ProgrammingLanguage: pldata,
        Database: dbdata,
        Framework: frdata,
        Cloud: cldata,
        Technology: tdata,
        Style: sdata,
    };

    const findData = (type, id) => {
        const data = datasets[type]; // Selecciona el dataset basado en el tipo
        if (!data) return null; // Si el tipo no existe, devuelve null
        return data.find((item) => item.id === parseInt(id, 10)); // Busca el elemento por id
    };
    const result = findData(type, id);
    if (!result) {
        return <Layout><h1>Not Found</h1></Layout>;
    }
    const { t } = useTranslation([type]);
    const skillsList = t(type, { returnObjects: true }) || [];
    const skill = skillsList.find((skill) => skill.id === parseInt(id, 10));

    if (!result) {
        return <Layout><h1>Not Found</h1></Layout>;
    }

    return (
        <Layout>
            <div className={Styles.skillcontainer}>
                <ProjectInfoBox technology={result} className={Styles.projectinfobox} />
                <div className={Styles.skillinfo}>
                    <h1>{skill.name}</h1>
                    <p>{skill.description}</p>
                    <picture>
                        <source srcSet={`${skill.image}.webp`} type="image/webp" />
                        <source srcSet={`${skill.image}.png`} type="image/png" />
                        <img src={skill.image} alt={skill.name} />
                    </picture>
                    <p>{skill.youcanbuild}</p>
                    <ul className={Styles.ulcapabilities}>
                        {skill.capabilities.map((capability, index) => (
                            <li key={index}>{capability}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    );
}

export default Skill;