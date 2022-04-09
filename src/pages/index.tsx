import { useState } from 'react';

import moment from 'moment';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import {
  Text,
  Button,
  Select,
  Datepicker,
} from '../components';
import { useQuiz } from '../hooks';
import { Head } from '../layouts';
import * as locales from '../locales';
import { api } from '../services';
import { HomeHandles, DataHandles } from '../types';

const Home: React.FC<HomeHandles> = ({ home }) => {
  const { push } = useRouter();

  const [date, onDate] = useState(null);
  const [next, onNext] = useState(false);
  const [selected, onSelected] = useState('');

  const { onUser } = useQuiz();

  const login = async () => {
    if (date) {
      await api.get('/api')
        .then(({ data }: DataHandles) => {
          onUser({
            date: moment(date).format('DD/MM/YYYY'),
            avatar: data.results[0].picture.medium,
            first_name: data?.results[0].name.first,
            last_name: data?.results[0].name.last,
          });

          push('/quiz');
        });
    }
  };

  return (
    <div className="home">
      <Head />

      {!next ? (
        <div className="home-container">
          <div className="home-title">
            <Text
              label={home.title}
              type="h1"
            />

            <Text
              label={home.subtitle}
              type="h1"
            />
          </div>

          <Text
            label={home.form.title}
            className="text-gray-400 mt-6 mb-14"
          />

          <Select
            label={home.form.fields.options.label}
            options={['Cis', 'Trans']}
            selected={selected}
            className="mb-8"
            onSelected={onSelected}
            placeholder={home.form.fields.options.placeholder}
          />

          <Datepicker
            label={home.form.fields.birh_date.label}
            start={date}
            onStart={onDate}
            placeholder="Selecione uma data"
          />

          <Button
            label={home.form.button}
            onClick={() => onNext(true)}
            disabled={!date}
            className="w-full mt-20"
          />
        </div>
      ) : (
        <div>
          <Text
            type="h3"
            label="Acesse sua conta e"
          />
          <Text
            label="Vamos começar"
            type="h1"
            className="mt-3"
          />
          <Text
            label="O quiz irá avaliar seu perfil e informar
            o melhor curso para você."
            className="text-gray-400 mt-6 mb-14 max-w-[23rem]"
          />

          <Button
            label="Entrar"
            onClick={login}
            className="w-full max-w-[28rem]"
          />
        </div>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const {
    home,
  } = locales;

  return {
    props: {
      home: home[locale || 'pt'],
    },
  };
};

export default Home;
