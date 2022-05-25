import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  ListItemSecondaryAction,
  Tooltip,
  Typography,
} from '@mui/material'
import { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import DeleteIcon from '@mui/icons-material/Delete'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import React from 'react'

const StyledImage = styled.img`
  //width: 100px;
  //margin-top: 10px;
  //position: static;
  //top: 200px;
  //overflow: scroll;
  //width: 100px;
  /* top: 2000;
  left: 2000; */
  margin-left: -4300px;
  margin-top: -4100px;
`

interface Props {
  image: string
  title: string
}

const detection = [
  {
    label: 'Osteoclast',
    confidence: '0.3',
    x: 39,
    y: 10,
    w: 20,
    h: 38,
  },
  {
    label: 'Osteoclast',
    confidence: '0.34',
    x: 39,
    y: 10,
    w: 20,
    h: 38,
  },
  {
    label: 'Osteoclast',
    confidence: '0.37',
    x: 39,
    y: 10,
    w: 20,
    h: 38,
  },
  {
    label: 'Osteoclast',
    confidence: '0.4',
    x: 39,
    y: 10,
    w: 20,
    h: 38,
  },
  {
    label: 'Osteoclast',
    confidence: '0.42',
    x: 39,
    y: 10,
    w: 20,
    h: 38,
  },
  {
    label: 'Osteoclast',
    confidence: '0.46',
    x: 39,
    y: 10,
    w: 20,
    h: 38,
  },
  {
    label: 'Osteoclast',
    confidence: '0.5',
    x: 39,
    y: 10,
    w: 20,
    h: 38,
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
