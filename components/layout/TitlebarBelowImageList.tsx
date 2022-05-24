import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import Image from 'next/image'
import theme from '../../styles/theme'
import { useRouter } from 'next/router'

interface Props {
  itemData: {
    img: string
    count: string
  }[]
}

export default function TitlebarBelowImageList(props: Props) {
  const router = useRouter()

  function handleOnClick(img: string) {
    console.log('hei')
    router.push('/results' + img)
  }

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
      {props.itemData.map(item => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            //srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.img}
            loading="lazy"
            onClick={() => handleOnClick(item.img)}
          />
          <ImageListItemBar
            title={<span>Count: {item.count}</span>}
            subtitle={item.img}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
