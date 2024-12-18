import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Layout from "../../layouts/Layout";

import Styles from "./Contact.module.css";

const Contact = () => {
    const { t } = useTranslation(["Contact"]);
    return (
        <Layout>
            <div className={Styles.contactcontainer}>
                <div className={Styles.photocontainer}>
                    <picture className={Styles.picturecontainer}>
                        <source srcSet="/images/pictures/towerbridgephoto.webp" type="image/webp" />
                        <source srcSet="/images/pictures/towerbridgephoto.png" type="image/png" />
                        <img src="/images/pictures/towerbridgephoto.png" alt="TowerBridgePhoto" />
                    </picture>
                </div>
                <div className={Styles.socialcontainer}>
                    <h1 className={Styles.titlecontact}>{t('contact')}</h1>
                    <h3 className={Styles.text}>{t('getInTouch')}</h3>
                    <div className={Styles.picturescontainer}>
                        <div className={Styles.picture}>
                            <picture>
                                <source srcSet="/images/social/gmail.webp" type="image/webp" />
                                <source srcSet="/images/social/gmail.png" type="image/png" />
                                <img src="/images/social/gmail.png" alt="gmail" />
                            </picture>
                            <Link to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJTJFfmcLpfDMrGGdSdGSXtPzJzgjtLgWDFCghkdSPrLvDDWvKtrrZqSthSnFGkKJWCsNFg" className={Styles.btncontact}>{t('takemethere')}</Link>
                        </div>
                        <div className={Styles.picture}>
                            <picture>
                                <source srcSet="/images/social/linkedin.webp" type="image/webp" />
                                <source srcSet="/images/social/linkedin.png" type="image/png" />
                                <img src="/images/social/linkedin.png" alt="gmail" />
                            </picture>
                            <Link to="https://www.linkedin.com/in/carlos-alberto-hernandez-gallegos-3b5a98261/" className={Styles.btncontact}>{t('takemethere')}</Link>
                        </div>
                        <div className={Styles.picture}>
                            <picture>
                                <source srcSet="/images/social/insta.webp" type="image/webp" />
                                <source srcSet="/images/social/insta.png" type="image/png" />
                                <img src="/images/social/insta.png" alt="gmail" />
                            </picture>
                            <Link to="https://www.instagram.com/charlie.gllgs/" className={Styles.btncontact}>{t('takemethere')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;