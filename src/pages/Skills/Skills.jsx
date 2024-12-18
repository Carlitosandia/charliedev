import { useTranslation } from "react-i18next";

import Layout from "../../layouts/Layout";
import Slider from "../../components/Slider";
import Styles from "./Skills.module.css";

import pldata from "../../JSON/programminglanguages.json";
import dbdata from "../../JSON/databases.json"
import frdata from "../../JSON/frameworks.json"
import cldata from "../../JSON/clouds.json"
import tdata from "../../JSON/technologies.json"
import sdata from "../../JSON/styles.json"

const Skills = () => {
    const { t } = useTranslation(['Skills', 'Commons']);
    return (
        <Layout>
            <h1 className={Styles.title}>{t('skills')}</h1>
            <p className={Styles.info}>{t('find out')}</p>
            <h2 className={Styles.title}>{t('programminglanguages')}</h2>
            <Slider data={pldata} btnText={'Info'}/>
            <h2 className={Styles.title}>{t('databases')}</h2>
            <Slider data={dbdata} btnText={'Info'}/>
            <h2 className={Styles.title}>{t('frameworks')}</h2>
            <Slider data={frdata} btnText={'Info'}/>
            <h2 className={Styles.title}>{t('cloudservices')}</h2>
            <Slider data={cldata} btnText={'Info'}/>
            <h2 className={Styles.title}>{t('technologies')}</h2>
            <Slider data={tdata} btnText={'Info'}/>
            <h2 className={Styles.title}>{t('styles')}</h2>
            <Slider data={sdata} btnText={'Info'}/>
        </Layout>
    )
}

export default Skills;