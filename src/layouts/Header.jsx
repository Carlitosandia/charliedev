import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Styles from '../styles/Header.module.css'
import LanguageToggle from '../components/LanguageToggle';

const Header = () => {
    const { t } = useTranslation('Header');
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };
    return (
        <header className={Styles.headercontainer}>
            <h1>Charlie <span className={Styles.light}>Gallegos</span></h1>
            <div className={Styles.mobilemenu} onClick={toggleMenu}>
                <img src="/images/icon/menuIcon.png" alt="mobilemenu" />
            </div>
            <div className={`${Styles.navcontainer} ${menuOpen ? Styles.open : Styles.closed}`}>
            <nav className={`${Styles.nav} ${menuOpen ? Styles.open : Styles.closed}`}>
                <ul>
                    <li><Link to="/">{t('home')}</Link></li>
                    <li><Link to="/projects">{t('projects')}</Link></li>
                    <li><Link to="/skills">{t('skills')}</Link></li>
                    <li><Link to="/contact">{t('contact')}</Link></li>
                    <li><Link to="/careerpath">{t('career path')}</Link></li>
                </ul>
            </nav>
            <LanguageToggle />
            </div>
        </header>
    );
};

export default Header;