import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import ImageDropZone from '../components/layout/ImageDropZone'
import styled from '@emotion/styled'

const Div = styled.div`
  margin: 40px;
`

const Home: NextPage = () => {
  return (
    <Div className={styles.container}>
      <ImageDropZone />
    </Div>
  )
}

export default Home
