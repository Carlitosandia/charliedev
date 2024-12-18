import Layout from "../../layouts/Layout";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import Styles from "./Projects.module.css";

const Projects = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(['Projects', 'Commons']);
    const projects = t('Projects', { returnObjects: true }) || [];
    const handleSelectProject = (id) => {
        navigate(`/project/${id}`);
    }
    return(
        <Layout>
            <div>
                <h1 className={Styles.title}>{t('titleprojects')}</h1>
                <div className={Styles.projectscontainer}>
                    {projects.map((project, index) => (
                        <div key={index} className={Styles.photocontainer}>
                            <h2>{project.name}</h2>
                            <p className={Styles.shortdescription}>{project.shortdescription}</p>
                            <picture>
                                <source srcSet={`${project.image}.png`} type="image/png" />
                                <source srcSet={`${project.image}.webp`} type="image/webp" />
                                <img src={`${project.image}.webp`} alt={project.name} />
                            </picture>
                            <button
                                className={Styles.btnmoreinfo}
                                onClick={() => handleSelectProject(project.id)}
                             >
                                {t('Commons:moreinfo')}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Projects;