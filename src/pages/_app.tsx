import '../styles/main.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
