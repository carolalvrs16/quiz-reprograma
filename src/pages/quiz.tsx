import { useMemo, useState } from 'react';

import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import {
  Text,
  Radio,
  Button,
} from '../components';
import questions from '../data';
import { useQuiz } from '../hooks';
import { Head } from '../layouts';
import * as locales from '../locales';
import { QuizHandles } from '../types';

const Quiz: React.FC<QuizHandles> = ({ quiz }) => {
  const { push, locale } = useRouter();

  const [pos, onPos] = useState(0);
  const [sum, onSum] = useState(0);
  const [checked, onChecked] = useState(-1);

  const {
    formatAnswer,
  } = useQuiz();

  const progress = useMemo(() => {
    if (pos !== 0) {
      if (sum >= 0) return 'FE';
      return 'BE';
    }

    return '';
  }, [pos, sum]);

  const click = () => {
    formatAnswer(checked, questions[locale][pos].answers[checked].value);
    onSum((prev) => questions[locale][pos].answers[checked].value + prev);

    if (pos === 4) {
      push('/result');
      return;
    }

    onPos(pos + 1);
    onChecked(-1);
  };

  return (
    <div className="quiz">
      <Head />

      <div className="quiz-container">
        <Text
          type="h2"
          label={`${pos + 1}.`}
        />
        <Text
          type="h2"
          label={questions[locale][pos]?.question}
          className="mb-14"
        />

        <div className="w-full flex flex-col space-y-4">
          {questions[locale][pos]?.answers.map(({ value, label }, index) => (
            <Radio
              key={value}
              label={label}
              name={questions[locale][pos]?.question}
              checked={index === checked}
              onChange={() => onChecked(index)}
            />
          ))}
        </div>

        <Button
          label={quiz.button}
          onClick={click}
          disabled={checked === -1}
          className="w-full mt-20"
        />

        {progress !== '' && (
          <div className="mt-6 flex flex-col gap-2 items-center mx-auto">
            <Text
              type="span"
              label={quiz.information}
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const {
    quiz,
  } = locales;

  return {
    props: {
      quiz: quiz[locale || 'pt'],
    },
  };
};

export default Quiz;
