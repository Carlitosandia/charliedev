import { useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../layouts/Layout";
import Slider from "../../components/Slider";
import Styles from "./Skills.module.css";

import pldata from "../../JSON/programminglanguages.json";
import dbdata from "../../JSON/databases.json";
import frdata from "../../JSON/frameworks.json";
import cldata from "../../JSON/clouds.json";
import tdata from "../../JSON/technologies.json";
import sdata from "../../JSON/styles.json";

const sections = [
    {
        id: "programminglanguages",
        title: "programminglanguages",
        descriptionKey: "programminglanguagesdescription",
        sliderData: pldata,
    },
    {
        id: "databases",
        title: "databases",
        descriptionKey: "databasesdescription",
        sliderData: dbdata,
    },
    {
        id: "frameworks",
        title: "frameworks",
        descriptionKey: "frameworksdescription",
        sliderData: frdata,
    },
    {
        id: "cloudservices",
        title: "cloudservices",
        descriptionKey: "cloudservicesdescription",
        sliderData: cldata,
    },
    {
        id: "technologies",
        title: "technologies",
        descriptionKey: "technologiesdescription",
        sliderData: tdata,
    },
    {
        id: "styles",
        title: "styles",
        descriptionKey: "stylesdescription",
        sliderData: sdata,
    },
];

const ExpandableText = ({ description, isExpanded, onToggle }) => (
    <div>
        {isExpanded ? (
            <>
                {description.map((line, index) => (
                    <p className={Styles.info} key={index}>{line}</p>
                ))}
                <p className={Styles.toggle} onClick={onToggle}>Ver menos</p>
            </>
        ) : (
            <>
                <p className={Styles.info}>{description[0]}</p>
                <p className={Styles.toggle} onClick={onToggle}>Ver más</p>
            </>
        )}
    </div>
);

const Skills = () => {
    const { t } = useTranslation(["Skills", "Commons"]);
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (id) => {
        setExpandedSections((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <Layout>
            <h1 className={Styles.title}>{t("skills")}</h1>
            <p className={Styles.title}>{t("find out")}</p>
            {sections.map((section) => {
                const description = t(`Skills:${section.descriptionKey}`, { returnObjects: true }) || [];
                return (
                    <div key={section.id}>
                        <h2 className={Styles.title}>{t(section.title)}</h2>
                        <ExpandableText
                            description={description}
                            isExpanded={!!expandedSections[section.id]}
                            onToggle={() => toggleSection(section.id)}
                        />
                        <Slider data={section.sliderData} btnText={"Info"} />
                    </div>
                );
            })}
        </Layout>
    );
};

export default Skills;
