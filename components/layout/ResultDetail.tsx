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
import { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import DeleteIcon from '@mui/icons-material/Delete'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import React from 'react'

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
    confidence: '0.3',
    x: 1089,
    y: 2835,
    w: 97,
    h: 79,
  },
  {
    label: 'Osteoclast',
    confidence: '0.34',
    x: 1106,
    y: 4177,
    w: 108,
    h: 109,
  },
  {
    label: 'Osteoclast',
    confidence: '0.37',
    x: 1401,
    y: 3159,
    w: 105,
    h: 103,
  },
  {
    label: 'Osteoclast',
    confidence: '0.4',
    x: 1398,
    y: 3459,
    w: 102,
    h: 102,
  },
  {
    label: 'Osteoclast',
    confidence: '0.42',
    x: 1370,
    y: 5477,
    w: 98,
    h: 95,
  },
  {
    label: 'Osteoclast',
    confidence: '0.46',
    x: 1404,
    y: 5697,
    w: 109,
    h: 102,
  },
  {
    label: 'Osteoclast',
    confidence: '0.5',
    x: 1275,
    y: 6655,
    w: 109,
    h: 53,
  },
]

const ResultDetail = (props: Props) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

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
                    <img src={props.image} alt={props.title} width={'100%'} />
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
                            width: 100,
                            height: 100,
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
