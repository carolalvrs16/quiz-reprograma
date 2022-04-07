import '../styles/main.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { I18nextProvider } from 'react-i18next';

import { AppProps } from 'next/app';

import { QuizProvider } from '../contexts';
import i18n from '../i18n';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <I18nextProvider i18n={i18n}>
    <QuizProvider>
      <Component {...pageProps} />
    </QuizProvider>
  </I18nextProvider>
);

export default App;
