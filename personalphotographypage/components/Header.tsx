import NavBar from './NavBar'
import styles from '../styles/header.module.css'

export default function Header() {
  return (
    <div>
      <div className={styles.headerBanner}>
        McMillan Photography
        <NavBar />
      </div>

    </div>
  )
}
