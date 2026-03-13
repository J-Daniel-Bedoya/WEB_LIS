import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PqrsFloat from './PqrsFloat';
import WhatsAppFloat from './WhatsAppFloat';
import RouteScroll from './RouteScroll';
import RouteSeo from '../seo/RouteSeo';
import './SiteLayout.scss';

export default function SiteLayout() {
  return (
    <>
      <RouteScroll />
      <RouteSeo />
      <Header />
      <main id="main-content" className="site-main">
        <Outlet />
      </main>
      <Footer />
      <PqrsFloat />
      <WhatsAppFloat />
    </>
  );
}
