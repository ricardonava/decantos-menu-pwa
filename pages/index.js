import App from '../components/App';
import Header from '../components/Header';
import MenuVinos from '../components/MenuVinos';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <App>
      <Header />
      <Nav />
      <MenuVinos />
    </App>
  );
}
