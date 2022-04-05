import { useContext } from 'react';

import { QuizContext, QuizHandles } from '../contexts';

export default (): QuizHandles => useContext(QuizContext);
