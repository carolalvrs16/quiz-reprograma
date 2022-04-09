import { GetStaticProps } from 'next';

import { Text } from '../components';
import { Head } from '../layouts';
import * as locales from '../locales';
import { ExpectationHandles } from '../types';

const Expectation: React.FC<ExpectationHandles> = ({ expectation }) => (
  <div className="expectation">
    <Head />

    <div className="expectation-container">
      <div className="flex flex-col">
        <Text
          type="h1"
          label={expectation.title}
          className="mb-24"
        />

        <Text
          label={expectation.subtitle}
          className="text-gray-500 mb-10"
        />

        <Text
          label={expectation.schedule}
          className="text-gray-300"
        />

        <div className="flex items-center justify-between mt-6 mb-4">
          <Text
            label={expectation.days[0]}
            className="text-gray-500"
          />
          <Text
            label="19:00 - 22:00"
            className="text-gray-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <Text
            label={expectation.days[1]}
            className="text-gray-500"
          />
          <Text
            label="08:00 - 11:00"
            className="text-gray-500"
          />
        </div>
      </div>

      <div className="expectation-result">
        <Text
          label={expectation.value}
          className="text-gray-500"
        />

        <Text
          type="h3"
          label="R$ 5.500,00"
          className="!text-primary-200 font-semibold mt-2 mb-6"
        />

        <Text
          label={`*${expectation.negociation}`}
          className="text-gray-300"
        />
      </div>
    </div>
  </div>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const {
    expectation,
  } = locales;

  return {
    props: {
      expectation: expectation[locale || 'pt'],
    },
  };
};

export default Expectation;
