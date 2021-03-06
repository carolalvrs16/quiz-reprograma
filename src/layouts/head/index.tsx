import { useRef, useState } from 'react';

import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import IconChevron from '../../assets/svgs/icon-chevron-down.svg';
import IconEn from '../../assets/svgs/icon-en.svg';
import IconPt from '../../assets/svgs/icon-pt.svg';
import { Text } from '../../components';

const Head: React.FC = () => {
  const [open, onOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const styled = {
    chevron: classNames(
      open ? 'is-opened' : '',
      'head-translate-chevron',
    ),

    dropdown: classNames(
      'head-translate-dropdown',
      open ? 'is-opened' : '',
    ),
  };

  return (
    <div className="head">
      <div
        ref={ref}
        role="presentation"
        onClick={() => onOpen(!open)}
        className="head-translate"
      >
        <div className="head-translate-top">
          {router.locale === 'en' ? <IconEn /> : <IconPt />}
          <IconChevron className={styled.chevron} />
        </div>

        <div ref={ref} className={styled.dropdown}>
          <Link href={router.asPath} locale="en">
            <a className="head-translate-item">
              <IconEn />

              <Text
                label="EN"
                className="text-white"
              />
            </a>
          </Link>

          <Link href={router.asPath} locale="pt">
            <a className="head-translate-item">
              <IconPt />

              <Text
                label="PT-BR"
                className="text-white"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Head;
