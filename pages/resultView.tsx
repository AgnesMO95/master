import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import TitlebarBelowImageList from '../components/layout/TitlebarBelowImageList'
import styled from '@emotion/styled'

const Div = styled.div`
  margin: 40px;
`

const resultView: NextPage = () => {
  return (
    <Div className={styles.container}>
      <TitlebarBelowImageList />
    </Div>
  )
}

export default resultView
