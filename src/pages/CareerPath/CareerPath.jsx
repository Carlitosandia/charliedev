import Layout from '../../layouts/Layout';
import Styles from './CareerPath.module.css';
import { useTranslation } from 'react-i18next';
import uaqimg from "/images/careerpath/uaqfif.jpg";
import hackathonimg from "/images/careerpath/hackatonTeam.jpg";
import uscimg from "/images/careerpath/usc.jpg";

const CareerPath = () => {
    const { t } = useTranslation('CareerPath');
    const infouaq = t('uaq info', { returnObjects: true });
    const infohackathon = t('hackathon info', { returnObjects: true });
    const infousc = t('usc info', { returnObjects: true });
    return (
        <Layout>
            <div className={Styles.title}>
                <h1>{t('career path')}</h1>
            </div>
            <div className={Styles.pathcontainer}>
                <h3 className={Styles.title}>{t('uaq university')}</h3>
                <div className={Styles.path}>
                    <div className={Styles.photocontainer}>
                        <picture>
                            <source srcSet={uaqimg} type="image/jpg" />
                            <img src={uaqimg} alt="" />
                        </picture>
                    </div>
                    <div className={Styles.infocontainer}>
                        {infouaq.map((item, index) => (
                            <p key={index}> {item} </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className={Styles.pathcontainer}>
                <h3 className={Styles.title}>{t('hackathon')}</h3>
                <div className={Styles.path}>
                    <div className={Styles.infocontainer}>
                        {infohackathon.map((item, index) => (
                            <p key={index}> {item} </p>
                        ))}
                    </div>
                    <div className={Styles.photocontainer}>
                        <picture>
                            <source srcSet={hackathonimg} type="image/jpg" />
                            <img src={hackathonimg} alt="" />
                        </picture>
                    </div>
                </div>
            </div>
            <div className={Styles.pathcontainer}>
                <h3 className={Styles.title}>{t('usc university')}</h3>
                <div className={Styles.path}>
                    <div className={Styles.photocontainer}>
                        <picture>
                            <source srcSet={uscimg} type="image/jpg" />
                            <img src={uscimg} alt="" />
                        </picture>
                    </div>
                    <div className={Styles.infocontainer}>
                        {infousc.map((item, index) => (
                            <p key={index}> {item} </p>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CareerPath;