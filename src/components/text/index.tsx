import { useCallback } from 'react';

import classNames from 'classnames';

import { TextHandles } from './types';

const Text: React.FC<TextHandles> = ({
  type = 'p',
  label,
  className,
  ...rest
}) => {
  const styled = classNames(
    'text',
    className,
    type === 'p' ? 'text-base' : '',
    type === 'h1' ? 'text-5xl !leading-[3.5rem]' : '',
    type === 'h3' ? 'text-2xl' : '',
  );

  const Typography = useCallback(() => {
    if (type === 'p') return <p {...rest} className={styled}>{label}</p>;
    if (type === 'h1') return <h1 {...rest} className={styled}>{label}</h1>;
    if (type === 'h2') return <h2 {...rest} className={styled}>{label}</h2>;
    if (type === 'h3') return <h3 {...rest} className={styled}>{label}</h3>;
    if (type === 'span') return <span {...rest} className={styled}>{label}</span>;

    return <p />;
  }, [type, rest, label, styled]);

  return <Typography />;
};

export default Text;
