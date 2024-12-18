import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';``

import projectsdata from '../JSON/projects.json';
import Styles from '../styles/InformationBox.module.css';

const ProjectInfoBox = ({ technology }) => {
    const { t } = useTranslation(['Projects', 'Commons']);
    function findProjectsByTechnology(projects, technology) {
        return projects.filter(project => 
            technology.type in project && project[technology.type].includes(technology.id)
        );
    }
    
    const filteredProjects = findProjectsByTechnology(projectsdata, technology);

    return(
        <div className={Styles.boxcontainer}>
            <h2>{t('titleprojects')}</h2>
            {filteredProjects.length > 0 ? (
                <div className={Styles.box}>
                    {filteredProjects.map((item, index) =>(
                        <div key={index} className={Styles.row}>
                            <p>{item.name}</p>
                            <picture className={Styles.picturecontainer}>
                                <source srcSet={`${item.image}.webp`} type="image/webp" />
                                <source srcSet={`${item.image}.png`} type="image/png" />
                                <Link to={`/project/${item.id}`}><img src={`${item.image}.png`} alt={item.name} /></Link>
                            </picture>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                        <p>{t('Commons:notuploaded')}</p>
                </div>
            )}
        </div>
    )
}

export default ProjectInfoBox;