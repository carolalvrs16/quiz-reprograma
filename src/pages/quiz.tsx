import { useMemo, useState } from 'react';

import {
  Text,
  Radio,
  Input,
  Button,
} from '../components';

const Quiz: React.FC = () => {
  const [pos, onPos] = useState(0);
  const [sum, onSum] = useState(0);
  const [checked, onChecked] = useState(-1);

  const questions = [
    {
      question: 'Prefiro fotografar lugares do que ler livros',
      answers: [
        {
          value: 10,
          label: 'Sim',
        },
        {
          value: -10,
          label: 'Não',
        },
        {
          value: 0,
          label: 'Os dois/nenhum dos dois',
        },
      ],
    },
    {
      question: 'Acho melhor aplicativos/sites que sejam Lindos do que Rápido',
      answers: [
        {
          value: 10,
          label: 'Sim',
        },
        {
          value: -10,
          label: 'Não',
        },
        {
          value: 0,
          label: 'Igualmente importantes',
        },
      ],
    },
    {
      question: 'Me enxergo mais como artista do que como uma engenheira',
      answers: [
        {
          value: 10,
          label: 'Sim',
        },
        {
          value: -10,
          label: 'Não',
        },
        {
          value: 0,
          label: 'Os dois/nenhum dos dois',
        },
      ],
    },
    {
      question: 'Me apego tanto aos detalhes que às vezes demoro muito pra fazer minhas atividade',
      answers: [
        {
          value: 10,
          label: 'Sim',
        },
        {
          value: -10,
          label: 'Não',
        },
      ],
    },
    {
      question: 'Prefiro História ou Ciências a Matemática ou Química',
      answers: [
        {
          value: 10,
          label: 'Sim',
        },
        {
          value: -10,
          label: 'Não',
        },
        {
          value: 0,
          label: 'Prefiro igualmente todas',
        },
      ],
    },
  ];

  const progress = useMemo(() => {
    if (pos !== 0) {
      if (sum >= 0) return 'FE';
      return 'BE';
    }

    return '';
  }, [pos, sum]);

  console.log(sum);

  return (
    <div className="quiz">
      <div className="quiz-container">
        <Text
          type="h2"
          label={`${pos + 1}.`}
        />
        <Text
          type="h2"
          label={questions[pos].question}
          className="mb-14"
        />

        <div className="w-full flex flex-col space-y-4">
          {questions[pos].answers.map(({ value, label }, index) => (
            <Radio
              key={value}
              label={label}
              name={questions[pos].question}
              checked={index === checked}
              onChange={() => onChecked(index)}
            />
          ))}
        </div>

        <Button
          label="Próximo"
          onClick={() => {
            onSum(questions[pos].answers[checked].value + sum);
            onPos(pos + 1);
            onChecked(-1);
          }}
          disabled={checked === -1}
          className="w-full mt-20"
        />

        {progress !== '' && (
          <div className="mt-6 flex flex-col gap-2 items-center mx-auto">
            <Text
              type="span"
              label="Seu perfil tende para:"
              className="text-gray-500"
            />
            <Text
              type="h3"
              label={progress}
              className="!text-green font-bold"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
