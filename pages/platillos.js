import App from '../components/App';
import Header from '../components/Header';
import MenuPlatillos from '../components/MenuPlatillos';
import Nav from '../components/Nav';

export default function Platillos() {
  return (
    <App>
      <Header />
      <Nav />
      <MenuPlatillos />
    </App>
  );
}
