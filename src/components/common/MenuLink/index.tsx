import { FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

interface MenuLinkProps {
  title: string;
  slur: string;
  linkColor: string;
  fontWeight: string;
}

const MenuLink: FC<MenuLinkProps> = ({
  title,
  slur,
  linkColor,
  fontWeight,
}) => (
  <li className={styles['list']}>
    <Link
        href={`/${slur}`}
        aria-label={title}
        className={`${styles['link']} ${linkColor} ${fontWeight}`}
      >
        {title}
      </Link>
  </li>
);

export default MenuLink;
