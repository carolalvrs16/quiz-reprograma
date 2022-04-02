import { Text } from '../components';

const Home: React.FC = () => (
  <div className="home">
    <div className="home-container container">
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
      />
    </div>
  </div>
);

export default Home;
