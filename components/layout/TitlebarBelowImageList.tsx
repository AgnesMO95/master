import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import Image from 'next/image'
import theme from '../../styles/theme'

export default function TitlebarBelowImageList() {
  return (
    <ImageList
      cols={4}
      sx={{
        width: {
          xs: theme.breakpoints.up('xs'),
          sm: theme.breakpoints.up('sm'),
          md: theme.breakpoints.up('md'),
          lg: theme.breakpoints.up('lg'),
          xl: theme.breakpoints.up('xl'),
        },
        height: {
          xs: theme.breakpoints.up('xs'),
          sm: theme.breakpoints.up('sm'),
          md: theme.breakpoints.up('md'),
          lg: theme.breakpoints.up('lg'),
          xl: theme.breakpoints.up('xl'),
        },
      }}
    >
      {itemData.map(item => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={<span>Number of Osteoclasts: {item.title}</span>}
            subtitle={item.img}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

const itemData = [
  {
    img: '/12330-6675-20361.png',
    title: '700',
    author: '@bkristastucchio',
  },
  {
    img: '/12330-6675-20361.png',
    title: '650',
    author: '@rollelflex_graphy726',
  },
  {
    img: '/12330-6675-20361.png',
    title: '730',
    author: '@helloimnik',
  },
  {
    img: '/12330-6675-20361.png',
    title: '683',
    author: '@nolanissac',
  },
  {
    img: '/12330-6675-20361.png',
    title: '712',
    author: '@hjrc33',
  },
  {
    img: '/12330-6675-20361.png',
    title: '705',
    author: '@arwinneil',
  },
  {
    img: '/12330-6675-20361.png',
    title: '699',
    author: '@tjdragotta',
  },
  {
    img: '/12330-6675-20361.png',
    title: '620',
    author: '@katie_wasserman',
  },
  {
    img: '/12330-6675-20361.png',
    title: '645',
    author: '@silverdalex',
  },
  {
    img: '/12330-6675-20361.png',
    title: '800',
    author: '@shelleypauls',
  },
  {
    img: '/12330-6675-20361.png',
    title: '500',
    author: '@peterlaster',
  },
  {
    img: '/12330-6675-20361.png',
    title: '555',
    author: '@southside_customs',
  },
]
