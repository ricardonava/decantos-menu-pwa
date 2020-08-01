/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
// import InstallPWA from './InstallPWA';

const Header = () => {
  return (
    <header>
      <Link href="/">
        <img
          className="mx-auto mb-6"
          alt="DECANTOS"
          src="/images/decantos.jpg"
        />
      </Link>
      {/* <InstallPWA /> */}
    </header>
  );
};

export default Header;
