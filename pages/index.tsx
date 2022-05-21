import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import ImageDropZone from '../components/layout/ImageDropZone'
import styled from '@emotion/styled'
import { Button } from '@mui/material'

const Div = styled.div`
  margin: 40px;
`

const Home: NextPage = () => {
  const getFlaskAPI = async () => {
    const response = await fetch(`http://127.0.0.1:5000/hi`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.text()
    console.log(data)
  }

  return (
    <Div className={styles.container}>
      {/* <ImageDropZone /> */}
      <Button onClick={getFlaskAPI}>Click</Button>
    </Div>
  )
}

export default Home
