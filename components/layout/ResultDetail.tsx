import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material'
import { Fragment, useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import DeleteIcon from '@mui/icons-material/Delete'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import React from 'react'
import { CommentsDisabledOutlined } from '@mui/icons-material'

interface IImageProps {
  x: number
  y: number
}

const StyledImage = styled.img<IImageProps>`
  //width: 100px;
  //margin-top: 10px;
  //position: static;
  //top: 200px;
  //overflow: scroll;
  //width: 100px;
  /* top: 2000;
  left: 2000; */
  margin-left: -${props => props.x}px; //-4300px;
  margin-top: -${props => props.y}px; //-4100px;
`

interface Props {
  image: string
  title: string
}

const detection = [
  {
    label: 'Osteoclast',
    confidence: 0.5676062107086182,
    x: 1089,
    y: 2835,
    w: 97,
    h: 79,
  },
  {
    label: 'Osteoclast',
    confidence: 0.3166319727897644,
    x: 1106,
    y: 4177,
    w: 108,
    h: 109,
  },
  {
    label: 'Osteoclast',
    confidence: 0.5859971642494202,
    x: 1401,
    y: 3159,
    w: 105,
    h: 103,
  },
  {
    label: 'Osteoclast',
    confidence: 0.44125014543533325,
    x: 1398,
    y: 3459,
    w: 102,
    h: 102,
  },
  {
    label: 'Osteoclast',
    confidence: 0.3947586715221405,
    x: 1370,
    y: 5477,
    w: 98,
    h: 95,
  },
  {
    label: 'Osteoclast',
    confidence: 0.30254414677619934,
    x: 1404,
    y: 5697,
    w: 109,
    h: 102,
  },
  {
    label: 'Osteoclast',
    confidence: 0.31677988171577454,
    x: 1275,
    y: 6655,
    w: 109,
    h: 53,
  },
]

const ResultDetail = (props: Props) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    drawBoundingBoxes()
  }, [])

  const drawBoundingBoxes = () => {
    const image = imageRef.current
    const canvas = canvasRef.current
    if (!image || !canvas) {
      console.log('canvas or image is null')
      return
    }
    console.log('HEEEEER')
    console.log(image.height, image.width)
    console.log(
      image.clientWidth,
      image.offsetWidth,
      image.scrollWidth,
      image.naturalWidth
    )
    canvas.width = image.width
    canvas.height = image.height
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      console.log('ctx is null')
      return
    }
    requestAnimationFrame(() => {
      drawRect(
        image.naturalWidth,
        image.naturalHeight,
        0.2,
        image.width,
        image.height,
        ctx
      )
    })
  }

  const drawRect = (
    imgNaturalWidth: number,
    imgNaturalHeight: number,
    threshold: number,
    imgWidth: number,
    imgHeight: number,
    ctx: CanvasRenderingContext2D //canvas
  ) => {
    detection.map(item => {
      console.log('drawrect')
      console.log('map')
      if (item.confidence > threshold) {
        console.log('draw')
        //ensure valid detection
        //set variables
        const text = 'Osteoclast'
        //convert to percentage
        const x = item.x / imgNaturalWidth
        const y = item.y / imgNaturalHeight
        const w = item.w / imgNaturalWidth
        const h = item.h / imgNaturalHeight

        //set styling
        ctx.strokeStyle = 'red'
        ctx.lineWidth = 1
        ctx.fillStyle = 'black'
        ctx.font = '7px Arial'
        console.log(canvasRef.current?.width, canvasRef.current?.height)
        console.log(imgHeight)
        //draw
        ctx.beginPath()
        // ctx.fillText(
        //   text + ' - ' + Math.round(item.confidence * 100) / 100,
        //   x * imgWidth,
        //   y * imgHeight - 2
        // )
        console.log(item.x, item.y, item.w, item.h)
        console.log([
          x * imgWidth,
          y * imgHeight,
          w * imgWidth, // / 2
          h * imgHeight,
        ])
        console.log([
          x * imgWidth,
          y * imgHeight,
          w * (imgWidth / 2), // / 2
          h * (imgHeight / 1.5),
        ])
        //convert from % to px
        ctx.rect(
          x * imgWidth,
          y * imgHeight,
          w * imgWidth, //- x * imgWidth, // width of rect
          h * imgHeight //- y * imgHeight
        )
        ctx.stroke()
      }
    })
  }

  return (
    <Fragment>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={8}>
            <TransformWrapper
              initialScale={1}
              initialPositionX={200}
              initialPositionY={100}
            >
              {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>
                  <div className="tools">
                    <button onClick={() => zoomIn()}>+ Zoom In</button>
                    <button onClick={() => zoomOut()}>- Zoom Out</button>
                    <button onClick={() => resetTransform()}>x Reset</button>
                  </div>
                  <TransformComponent>
                    <img
                      src={props.image}
                      alt={props.title}
                      width={'100%'}
                      z-index={8}
                      ref={imageRef}
                      //style={{ position: 'absolute' }}
                    />
                    <canvas
                      ref={canvasRef}
                      z-index={9}
                      style={{ position: 'absolute' }}
                    />
                  </TransformComponent>
                </React.Fragment>
              )}
            </TransformWrapper>
          </Grid>
          <Grid item xs={4}>
            <Container sx={{ maxHeight: 700, overflowY: 'scroll' }}>
              {/* kunne ha brukt react image list, kan da få image list item bar som tar in action */}
              <Grid container spacing={4} justifyContent="center">
                {detection.map(item => (
                  <Grid item key={detection.indexOf(item)}>
                    {/* {isHover && <DeleteIcon />} */}

                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-end"
                      onMouseEnter={() =>
                        setHoveredItem(detection.indexOf(item))
                      }
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <Card>
                        <div
                          style={{
                            width: 120,
                            height: 120,
                            overflow: 'hidden',
                            //position: 'absolute',
                          }}
                        >
                          <StyledImage
                            src={props.image}
                            alt={props.title}
                            x={item.x}
                            y={item.y}
                            // style={{ top: '450', left: '1320' }}
                          />
                        </div>

                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography>{item.confidence}</Typography>
                        </CardContent>
                      </Card>
                      {hoveredItem == detection.indexOf(item) && (
                        <Tooltip
                          disableFocusListener
                          disableTouchListener
                          title="Delete"
                          placement="top-end"
                        >
                          <IconButton sx={{ position: 'absolute' }}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}

export default ResultDetail
