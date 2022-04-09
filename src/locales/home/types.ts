export type HomeLocale = {
  form: {
    title: string,
    fields: {
      options: {
        label: string,
        placeholder: string,
      },
      birh_date: {
        label: string,
      },
    },
    button: string,
  },
  login: {
    title: string,
    button: string,
    subtitle: string,
    description: string,
  },
  title: string,
  subtitle: string,
};

export type HomeLocales = Record<string, HomeLocale>;
