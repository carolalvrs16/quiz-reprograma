import { string } from 'yup';

const required = string()
  .required('Este campo é obrigatório');

export default required;
