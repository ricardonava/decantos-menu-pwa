import Header from '../../components/Header';
import Layout from '../../components/Layout';
import MenuVinos from '../../components/MenuVinos';
import Nav from '../../components/Nav';

export default function Vinos() {
  return (
    <Layout>
      <Header />
      <Nav />
      <MenuVinos />
    </Layout>
  );
}
