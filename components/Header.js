/* eslint-disable jsx-a11y/anchor-is-valid */
import InstallPWA from './InstallPWA';

export default function Header() {
  return (
    <header className="flex">
      <img
        className="mx-auto mb-6"
        alt="DECANTOS"
        src="https://static.wixstatic.com/media/6ad50f_e5a06ecb811d44929bb9bf96fe327ad6~mv2.jpg/v1/fill/w_132,h_120,al_c,q_80,usm_0.66_1.00_0.01/LISTA%20DE%20VINO%202020-01.webp"
      />
      <InstallPWA />
    </header>
  );
}
