import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import RouteScroll from './RouteScroll';
import './SiteLayout.scss';

export default function SiteLayout() {
  return (
    <>
      <RouteScroll />
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
