import { useRef, useCallback } from 'react';

import IconCalendar from '../assets/svgs/icon-calendar.svg';
import { Text } from '../components';
import questions from '../data';
import { useQuiz } from '../hooks';

const Result: React.FC = () => {
  const ref = useRef<HTMLDivElement[]>([]);

  const { user } = useQuiz();

  const accordion = useCallback((idx) => {
    if (ref.current) {
      ref.current.map((item) => item.classList.contains('is-show') && item.classList.remove('is-show'));

      ref.current[idx].classList.toggle('is-show');
    }
  }, []);

  const name = `${user.first_name} ${user.last_name}`;

  return (
    <div className="result">
      <div className="result-container">
        <Text
          type="h1"
          label="Parabéns!"
          className="text-center mb-16"
        />
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <img
              alt=""
              src={user.avatar}
              className="result-avatar"
            />

            <Text
              type="h3"
              label={name}
              className="mt-6 text-"
            />

            <div className="flex items-center gap-2 mt-1">
              <IconCalendar />
              <Text
                type="span"
                label={user.date}
                className="text-gray-500"
              />
            </div>
          </div>

          <div className="flex relative items-center justify-center">
            <Text
              type="h1"
              label="80%"
              className="!text-green relative"
            />

            <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
              <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="transparent" />
              <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3" />

              <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="25" />
            </svg>

            <div className="result-percentage-circle" />
          </div>
        </div>

        <div className="flex flex-col justify-center mt-24 mb-20">
          <Text
            label="Seu perfil é de:"
            className="text-gray-500 text-center mb-3"
          />

          <Text
            type="h1"
            label="Desenvolvedora Front-End"
            className="text-center"
          />
        </div>

        <div className="result-accordions">
          <Text
            label="Suas respostas:"
            className="text-gray-500 mb-3"
          />
          {questions.map(({ question }, idx) => (
            <div
              ref={(refs) => {
                if (ref.current) {
                  ref.current[idx] = refs as HTMLDivElement; //eslint-disable-line
                }
              }}
              key={question}
              role="presentation"
              onClick={() => accordion(idx)}
              className="result-accordion"
            >
              <div>
                <Text
                  label={question}
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
