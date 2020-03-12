import Link from 'next/link'
import styles from './Header.module.scss'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a className={styles.header} >Home</a>
      </Link>
      <Link href="/about">
        <a className={styles.header}>About</a>
      </Link>
    </div>
  )
}
