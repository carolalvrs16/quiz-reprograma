import { useState } from 'react';

import {
  Text,
  Button,
  Select,
  Datepicker,
} from '../components';

const Home: React.FC = () => {
  const [selected, onSelected] = useState('');
  const [startDate, onStartDate] = useState(null);

  console.log(selected);

  return (
    <div className="home">
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
          label="Gênero"
          options={['Cis', 'Trans']}
          selected={selected}
          className="mb-8"
          onSelected={onSelected}
          placeholder="Selecione uma opção"
        />

        <Datepicker
          label="Data de nascimento"
          start={startDate}
          onStart={onStartDate}
          placeholder="Selecione uma data"
        />

        <Button
          label="Próximo"
          disabled
          className="w-full mt-20"
        />
      </div>
    </div>
  );
};

export default Home;
