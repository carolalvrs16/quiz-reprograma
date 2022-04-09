export type ExpectationLocale = {
  days: string[],
  value: string,
  title: string,
  subtitle: string,
  schedule: string,
  negociation: string,
};

export type ExpectationLocales = Record<string, ExpectationLocale>;
