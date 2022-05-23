import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import TitlebarBelowImageList from '../components/layout/TitlebarBelowImageList'
import styled from '@emotion/styled'

const Div = styled.div`
  margin: 40px;
`

const itemData = [
  {
    img: '/12330-6675-20361.png',
    count: '700',
    author: '@bkristastucchio',
  },
  {
    img: '/12330-6675-20361.png',
    count: '650',
    author: '@rollelflex_graphy726',
  },
  {
    img: '/12330-6675-20361.png',
    count: '730',
    author: '@helloimnik',
  },
  {
    img: '/12330-6675-20361.png',
    count: '683',
    author: '@nolanissac',
  },
  {
    img: '/12330-6675-20361.png',
    count: '712',
    author: '@hjrc33',
  },
  {
    img: '/12330-6675-20361.png',
    count: '705',
    author: '@arwinneil',
  },
  {
    img: '/12330-6675-20361.png',
    count: '699',
    author: '@tjdragotta',
  },
  {
    img: '/12330-6675-20361.png',
    count: '620',
    author: '@katie_wasserman',
  },
  {
    img: '/12330-6675-20361.png',
    count: '645',
    author: '@silverdalex',
  },
  {
    img: '/12330-6675-20361.png',
    count: '800',
    author: '@shelleypauls',
  },
  {
    img: '/12330-6675-20361.png',
    count: '500',
    author: '@peterlaster',
  },
  {
    img: '/12330-6675-20361.png',
    count: '555',
    author: '@southside_customs',
  },
]

const resultView: NextPage = () => {
  return (
    <Div className={styles.container}>
      <TitlebarBelowImageList itemData={itemData} />
    </Div>
  )
}

export default resultView
