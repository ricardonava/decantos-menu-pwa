/* eslint-disable jsx-a11y/anchor-is-valid */
import InstallPWA from './InstallPWA';

export default function Header() {
  return (
    <header className="flex">
      <img className="mx-auto mb-6" alt="DECANTOS" src="/images/decantos.jpg" />
      <InstallPWA />
    </header>
  );
}
