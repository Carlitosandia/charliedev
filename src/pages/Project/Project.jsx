import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import Layout from "../../layouts/Layout";
import NotFound from "../../components/NotFound";
import InformationBox from "../../components/InformationBox";

import Styles from "./Project.module.css"

const Project = () => {
    const { id } = useParams();
    const { t } = useTranslation(['Projects', 'Commmons']);

    // Obtén los proyectos traducidos dinámicamente
    const projects = t('Projects', { returnObjects: true }) || [];
    const project = projects.find((project) => project.id === parseInt(id, 10));
    if (!project) {
        return <NotFound />;
    }

    return (
        <Layout>
            <div className={Styles.projectcontainer}>
                <div className={Styles.projectinfo}>
                    <h1>{project.name}</h1>
                    <picture>
                        <source srcSet={`${project.image}.webp`} type="image/webp" />
                        <source srcSet={`${project.image}.png`} type="image/png" />
                        <img src={project.image} alt={project.name} />
                    </picture>
                    {project.description.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
                <InformationBox project={project} className={Styles.informationbox} />
            </div>

        </Layout>
    )
}

export default Project;