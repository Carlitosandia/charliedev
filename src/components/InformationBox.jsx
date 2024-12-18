import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import Styles from "../styles/InformationBox.module.css"

import pldata from "../JSON/programminglanguages.json"
import dbdata from "../JSON/databases.json"
import frdata from "../JSON/frameworks.json"
import cldata from "../JSON/clouds.json"
import tdata from "../JSON/technologies.json"
import sdata from "../JSON/styles.json"
import pjdata from "../JSON/projects.json"

const InformationBox = ({project}) => {
    const { t } = useTranslation(['Commons']);
    const { 
        programminglanguages, 
        technologies, 
        clouds, 
        frameworks, 
        styles, 
        databases 
    } = project;
    
    const programminglanguagesSet = new Set(programminglanguages);
    const pldatafiltered = pldata.filter(language => programminglanguagesSet.has(language.id));
    const technologiesSet = new Set(technologies);
    const tdatafiltered = tdata.filter(technologie => technologiesSet.has(technologie.id));
    const cloudsSet = new Set(clouds);
    const cldatafiltered = cldata.filter(cloud=> cloudsSet.has(cloud.id));
    const frameworksSet = new Set(frameworks);
    const frdatafiltered = frdata.filter(framework => frameworksSet.has(framework.id));
    const stylesSet = new Set(styles);
    const sdatafiltered = sdata.filter(style => stylesSet.has(style.id));
    const databasesSet = new Set(databases);
    const dbdatafiltered = dbdata.filter(database => databasesSet.has(database.id));
    

    const itemsused = pldatafiltered.concat(tdatafiltered, cldatafiltered, frdatafiltered, sdatafiltered, dbdatafiltered)
    
    return(
        <div className={Styles.boxcontainer}>
            <h2>What I used?</h2>
            {itemsused ? (
                <div className={Styles.box}>
                    {itemsused.map((item, index) =>(
                        <div key={index} className={Styles.row}>
                            <p>{item.name}</p>
                            <picture className={Styles.picturecontainer}>
                                <source srcSet={`${item.image}.webp`} type="image/webp" />
                                <source srcSet={`${item.image}.png`} type="image/png" />
                                <Link to={`/${item.type}/${item.id}`}><img src={`${item.image}.png`} alt={item.name} /></Link>
                            </picture>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                   <p>{t('notuploaded')}</p>
                </div>
            )}
        </div>
    )
}

export default InformationBox;