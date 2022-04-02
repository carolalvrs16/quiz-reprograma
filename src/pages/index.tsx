import {
  Text,
  Input,
  Button,
} from '../components';

const Home: React.FC = () => (
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

      <Input
        label="Data de nascimento"
        placeholder="oi"
      />

      <Button
        label="Próximo"
        className="w-full mt-20"
      />
    </div>
  </div>
);

export default Home;
