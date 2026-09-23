'use client';
import { CartProvider } from '../lib/cart';
import GroupStrip from './GroupStrip';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export default function SiteChrome({ children }) {
  return (
    <CartProvider>
      <div className="theme-build" style={{ background: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-body)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <GroupStrip field="#0d2b3e" accent="#8fc0e2" />
        <Header base="/" division="Building Materials" nav={NAV} cartLabel="Quote list"
                cta={{ href: '/contact', label: 'Request catalogue' }} />
        <main style={{ flex: 1 }}>{children}</main>
        <CartDrawer title="Quote list" scrim="rgba(8,20,30,.55)" totalLabel="Line items"
                    emptyText="Nothing added yet. Add categories from the product portfolio to build a quote."
                    checkoutHref="/checkout" />
        <Footer base="/" division="Building Materials" footerBg="#0a1c28"
                blurb="Imported building materials and finishes, delivered to site across Nigeria."
                nav={[...NAV, { href: '/contact', label: 'Contact' }]} />
      </div>
    </CartProvider>
  );
}
