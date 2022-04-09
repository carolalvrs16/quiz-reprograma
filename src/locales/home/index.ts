import { HomeLocales } from './types';

const home: HomeLocales = {
  pt: {
    form: {
      title: 'Preencha as informações abaixo, é rápido e fácil.',
      fields: {
        options: {
          label: 'Identitade de Gênero',
          placeholder: 'Selecione uma opção',
        },
        birh_date: {
          label: 'Data de nascimento',
        },
      },
      button: 'Próximo',
    },
    login: {
      title: 'Acesse sua conta e',
      button: 'Entrar',
      subtitle: 'Vamos começar',
      description: 'O quiz irá avaliar seu perfil e informar o melhor curso para você.',
    },
    title: 'Olá,',
    subtitle: 'Vamos ajudar você a encontrar o curso ideal.',
  },

  en: {
    form: {
      title: "Fill in the information below, it's quick and easy.",
      fields: {
        options: {
          label: 'Gender Identity',
          placeholder: 'Select an option',
        },
        birh_date: {
          label: 'Birth date',
        },
      },
      button: 'Next',
    },
    login: {
      title: 'Login to your account and',
      button: 'Login',
      subtitle: "Let's start",
      description: 'The quiz will assess your profile and tell you the best course for you.',
    },
    title: 'Hi,',
    subtitle: 'Let us help you find the ideal course.',
  },
};

export default home;
