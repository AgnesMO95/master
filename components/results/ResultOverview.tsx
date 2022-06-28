import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { useRouter } from 'next/router'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'

import Grid from '@mui/material/Grid'

export default function TitlebarBelowImageList() {
  const router = useRouter()
  const images = useAppSelector(state => state.imageFileList.images)
  const predictions = useAppSelector(state => state.prediction.predictions)
  console.log(images)
  const dispatch = useAppDispatch()

  console.log(predictions)

  function handleOnClick(img: string) {
    router.push('/results/' + img)
  }

  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Prediction Results
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            This page shows the how many Osteoclasts counted for each image, to
            get a more detaled view click on the detailed results button for the
            image.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Download Results</Button>
            <Button variant="outlined">Upload more images</Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {images.map(item => (
            <Grid item key={item.name} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component="img"
                  image={URL.createObjectURL(item)}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {predictions[item.name]['count']}
                    {/* {item.count} */}
                  </Typography>
                  <Typography>{item.name}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      handleOnClick(item.name)
                    }}
                  >
                    Detailed results
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  )
}
