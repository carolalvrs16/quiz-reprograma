import { HomeLocale } from '../locales';

export type DataHandles = {
  data: {
    results: {
      name: {
        first: string,
        last: string,
      },
      picture: {
        medium: string,
      },
    }[],
  },
};

export type HomeHandles = {
  home: HomeLocale,
};
