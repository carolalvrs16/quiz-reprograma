import {
  useRef,
  useMemo,
  useEffect,
  useCallback,
} from 'react';

import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import IconCalendar from '../assets/svgs/icon-calendar.svg';
import IconChevron from '../assets/svgs/icon-chevron.svg';
import { Text } from '../components';
import questions from '../data';
import { useQuiz } from '../hooks';
import { Head } from '../layouts';
import * as locales from '../locales';
import { ResultHandles } from '../types';

const Result: React.FC<ResultHandles> = ({ result }) => {
  const ref = useRef<HTMLDivElement[]>([]);

  const {
    user,
    score,
    answers,
  } = useQuiz();

  const { push, locale } = useRouter();

  const accordion = useCallback((idx) => {
    if (ref.current) {
      ref.current.map((item) => item.classList.contains('is-show') && item.classList.remove('is-show'));

      ref.current[idx].classList.toggle('is-show');
    }
  }, []);

  const results = useMemo(() => {
    if (score >= 0) {
      const value = (score / 50) * 100;

      return {
        type: 'Front-End',
        value,
      };
    }

    if (score < 0) {
      const value = ((score * -1) / 50) * 100;

      return {
        type: 'Back-End',
        value,
      };
    }

    return {
      type: '',
      value: 0,
    };
  }, [score]);

  useEffect(() => {
    if (!user) push('/');
  }, [user, push]);

  const name = `${user?.first_name} ${user?.last_name}`;

  return (
    <div className="result">
      <Head />

      <div className="result-container">
        <Text
          type="h1"
          label={result.title}
          className="text-center mb-16"
        />
        <div className="result-content">
          <div className="result-content-items">
            <img
              alt=""
              src={user?.avatar}
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
                label={user?.date}
                className="text-gray-500"
              />
            </div>
          </div>

          <div className="flex relative items-center justify-center">
            <div className="result-circle">
              <Text
                id="result-value"
                type="h3"
                label={`${results?.value}%`}
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
            label={result.perfil.title}
            className="text-gray-500 text-center mb-3"
          />

          <Text
            id="result-type"
            type="h1"
            label={`${result.perfil.subtitle} ${results?.type}`}
            className="text-center"
          />
        </div>

        <div className="result-accordions">
          <Text
            label={result.answers}
            className="text-gray-500 mb-3 font-medium"
          />
          {questions[locale].map((item, idx) => (
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
                  label={`${result.tag}: ${item.answers[answers[idx]?.id]?.label}`}
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const {
    result,
  } = locales;

  return {
    props: {
      result: result[locale || 'pt'],
    },
  };
};

export default Result;
