import { Text } from '../components';

const Expectation: React.FC = () => (
  <div className="expectation">
    <div className="expectation-container">
      <div className="flex flex-col">
        <Text
          type="h1"
          label="Pretensão Salarial"
          className="mb-24"
        />

        <Text
          label="Essa é a pretenção salarial para uma vaga PJ de 80h mensais."
          className="text-gray-500 mb-10"
        />

        <Text
          label="Horário de trabalho:"
          className="text-gray-300"
        />

        <div className="flex items-center justify-between mt-6 mb-4">
          <Text
            label="Seg. à Sex."
            className="text-gray-500"
          />
          <Text
            label="19:00 - 22:00"
            className="text-gray-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <Text
            label="Sab. e Dom."
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
          label="Valor:"
          className="text-gray-500"
        />

        <Text
          type="h3"
          label="R$ 5.500,00"
          className="!text-primary-200 font-semibold mt-2 mb-6"
        />

        <Text
          label="*Estou aberta a negociações."
          className="text-gray-300"
        />
      </div>
    </div>
  </div>
);

export default Expectation;
