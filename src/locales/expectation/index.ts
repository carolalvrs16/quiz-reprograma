import { ExpectationLocales } from './types';

const expectation: ExpectationLocales = {
  pt: {
    days: [
      'Seg. à Sex.',
      'Sab. e Dom.',
    ],
    value: 'Valor:',
    title: 'Pretensão Salarial',
    subtitle: 'Essa é a pretenção salarial para uma vaga PJ de 80h mensais.',
    schedule: 'Horário de trabalho:',
    negociation: 'Estou aberta a negociações.',
  },

  en: {
    days: [
      'Mon. to Fri.',
      'Sat. and Sun.',
    ],
    value: 'Value:',
    title: 'Salary Expectation',
    subtitle: 'This is the salary requirement for a PJ job of 80 hours per month.',
    schedule: 'Work schedule:',
    negociation: 'I am open to negotiations.',
  },
};

export default expectation;
