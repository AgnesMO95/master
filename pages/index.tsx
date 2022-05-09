import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import ImageDropZone from '../components/layout/ImageDropZone'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ImageDropZone />
    </div>
  )
}

export default Home
