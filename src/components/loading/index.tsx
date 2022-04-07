import Lottie from 'react-lottie';

import classNames from 'classnames';

import Spinner from './spinner.json';

const Loading: React.FC = () => {
  const splash = {
    loop: true,
    autoplay: true,
    animationData: Spinner,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const styled = classNames(
    'loading w-full h-screen flex items-center flex-col justify-center z-[100]',
  );

  return (
    <div className={styled}>
      <Lottie
        loop
        width={180}
        height={180}
        options={splash}
      />
    </div>
  );
};

export default Loading;
