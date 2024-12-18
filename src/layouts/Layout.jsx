import Header from './Header';
import Footer from './Footer';

import Styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={Styles.layout}>
      <Header />
      <main className={Styles.containerchildren}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;