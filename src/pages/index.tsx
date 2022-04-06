import { useState, useEffect, useCallback } from 'react';

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
import { api } from '../services';
import { HomeHandles } from '../types';

const Home: React.FC<HomeHandles> = ({ data }) => {
  const { push } = useRouter();

  const [date, onDate] = useState(null);
  const [next, onNext] = useState(false);
  const [validate, onValidate] = useState(true);
  const [selected, onSelected] = useState('');

  useEffect(() => {
    if (date) onValidate(false);
  }, [date]);

  const { onUser } = useQuiz();

  const login = useCallback(() => {
    if (date && data) {
      onUser({
        date: moment(date).format('DD/MM/YYYY'),
        avatar: data.results[0].picture.medium,
        first_name: data?.results[0].name.first,
        last_name: data?.results[0].name.last,
      });

      push('/quiz');
    }
  }, [push, data, date, onUser]);

  if (!data) return <h1>Loading...</h1>;

  return (
    <div className="home">
      {!next ? (
        <div className="home-container">
          <div className="home-title">
            <Text
              label="Olá,"
              type="h1"
            />

            <Text
              label="Vamos ajudar você a
            encontrar o curso ideal."
              type="h1"
            />
          </div>

          <Text
            label="Preencha as informações abaixo, é rápido e fácil."
            className="text-gray-400 mt-6 mb-14"
          />

          <Select
            label="Identitade de Gênero"
            options={['Cis', 'Trans']}
            selected={selected}
            className="mb-8"
            onSelected={onSelected}
            placeholder="Selecione uma opção"
          />

          <Datepicker
            label="Data de nascimento"
            start={date}
            onStart={onDate}
            placeholder="Selecione uma data"
          />

          <Button
            label="Próximo"
            onClick={() => onNext(true)}
            disabled={validate}
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

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/api');

  return {
    props: {
      data,
    },
  };
};

export default Home;
