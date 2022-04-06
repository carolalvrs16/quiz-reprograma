import { useMemo, useState } from 'react';

import { useRouter } from 'next/router';

import {
  Text,
  Radio,
  Button,
} from '../components';
import questions from '../data';
import { useQuiz } from '../hooks';

const Quiz: React.FC = () => {
  const { push } = useRouter();

  const [pos, onPos] = useState(0);
  const [sum, onSum] = useState(0);
  const [checked, onChecked] = useState(-1);

  const {
    questions: question,
    onQuestions,
  } = useQuiz();

  const progress = useMemo(() => {
    if (pos !== 0) {
      if (sum >= 0) return 'FE';
      return 'BE';
    }

    return '';
  }, [pos, sum]);

  const click = () => {
    if (pos === 4) {
      onQuestions((prev) => [...prev, checked]);
      push('/result');
      return;
    }

    if (pos === 0) onQuestions([checked]);

    if (pos !== 0) onQuestions((prev) => [...prev, checked]);

    onSum(questions[pos].answers[checked].value + sum);
    onPos(pos + 1);
    onChecked(-1);
  };

  return (
    <div className="quiz">
      <div className="quiz-container">
        <Text
          type="h2"
          label={`${pos + 1}.`}
        />
        <Text
          type="h2"
          label={questions[pos]?.question}
          className="mb-14"
        />

        <div className="w-full flex flex-col space-y-4">
          {questions[pos]?.answers.map(({ value, label }, index) => (
            <Radio
              key={value}
              label={label}
              name={questions[pos]?.question}
              checked={index === checked}
              onChange={() => onChecked(index)}
            />
          ))}
        </div>

        <Button
          label="Próximo"
          onClick={click}
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
