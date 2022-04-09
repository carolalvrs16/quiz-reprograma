import '../styles/main.scss';
import 'react-datepicker/dist/react-datepicker.css';

import { AppProps } from 'next/app';

import { QuizProvider } from '../contexts';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <QuizProvider>
    <Component {...pageProps} />
  </QuizProvider>
);

export default App;
