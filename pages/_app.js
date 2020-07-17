/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import '../styles.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
