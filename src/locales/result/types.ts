export type ResultLocale = {
  tag: string,
  title: string,
  perfil: {
    title: string,
    subtitle: string
  },
  answers: string,
};

export type ResultLocales = Record<string, ResultLocale>;
