import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import Styles from '../styles/Header.module.css'
import LanguageToggle from '../components/LanguageToggle';

const Header = () => {
    const { t } = useTranslation('Header');

    return (
        <header className={Styles.headercontainer}>
            <h1>Charlie <span className={Styles.light}>Gallegos</span></h1>
            <nav className={Styles.nav}>
                <ul>
                    <li><Link to="/">{t('home')}</Link></li>
                    <li><Link to="/projects">{t('projects')}</Link></li>
                    <li><Link to="/skills">{t('skills')}</Link></li>
                    <li><Link to="/contact">{t('contact')}</Link></li>
                    <li><Link to="/careerpath">{t('career path')}</Link></li>
                </ul>
                <LanguageToggle />
            </nav>
        </header>
    );
};

export default Header;