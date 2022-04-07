import { useRef, useMemo, useCallback } from 'react';

import IconCalendar from '../assets/svgs/icon-calendar.svg';
import IconChevron from '../assets/svgs/icon-chevron.svg';
import { Text, Loading } from '../components';
import questions from '../data';
import { useQuiz } from '../hooks';

const Result: React.FC = () => {
  const ref = useRef<HTMLDivElement[]>([]);

  const {
    user,
    result,
    questions: question,
  } = useQuiz();

  const accordion = useCallback((idx) => {
    if (ref.current) {
      ref.current.map((item) => item.classList.contains('is-show') && item.classList.remove('is-show'));

      ref.current[idx].classList.toggle('is-show');
    }
  }, []);

  const results = useMemo(() => {
    if (result >= 0) {
      const value = (result / 50) * 100;

      return {
        type: 'Front-End',
        value,
      };
    }

    if (result < 0) {
      const value = ((result * -1) / 50) * 100;

      return {
        type: 'Back-End',
        value,
      };
    }

    return {
      type: '',
      value: 0,
    };
  }, [result]);

  if (!user) return <Loading />;

  const name = `${user.first_name} ${user.last_name}`;

  return (
    <div className="result">
      <div className="result-container">
        <Text
          type="h1"
          label="Parabéns!"
          className="text-center mb-16"
        />
        <div className="result-content">
          <div className="result-content-items">
            <img
              alt=""
              src={user.avatar}
              className="result-avatar"
            />

            <Text
              type="h3"
              label={name}
              className="mt-6"
            />

            <div className="flex items-center gap-2 mt-2">
              <IconCalendar />
              <Text
                type="span"
                label={user.date}
                className="text-gray-500"
              />
            </div>
          </div>

          <div className="flex relative items-center justify-center">
            <div className="result-circle">
              <Text
                type="h3"
                label={`${results.value}%`}
                className="!text-green"
              />
              <svg>
                <circle className="bg" cx="57" cy="57" r="52" />
                <circle className="progress" cx="57" cy="57" r="52" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-24 mb-20">
          <Text
            label="Seu perfil é de:"
            className="text-gray-500 text-center mb-3"
          />

          <Text
            type="h1"
            label={`Desenvolvedora ${results.type}`}
            className="text-center"
          />
        </div>

        <div className="result-accordions">
          <Text
            label="Suas respostas:"
            className="text-gray-500 mb-3 font-medium"
          />
          {questions.map((item, idx) => (
            <div
              ref={(refs) => {
                if (ref.current) {
                  ref.current[idx] = refs as HTMLDivElement; //eslint-disable-line
                }
              }}
              key={item.question}
              role="presentation"
              onClick={() => accordion(idx)}
              className="result-accordion"
            >
              <div className="result-accordion-head">
                <Text
                  label={item.question}
                  className="font-medium text-gray-500"
                />

                <IconChevron className="result-accordion-head-chevron" />
              </div>

              <div className="result-accordion-body">
                <Text
                  label={`R: ${item.answers[question[idx]].label}`}
                  className="text-white font-medium"
                />
              </div>
            </div>
          ))}
          <div />
        </div>
      </div>
    </div>
  );
};

export default Result;
