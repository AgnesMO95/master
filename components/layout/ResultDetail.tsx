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
  const [isHover, setHover] = useState(false)

  return (
    <Fragment>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={8}>
            <img src={props.image} alt={props.title} width={'100%'} />
          </Grid>
          <Grid item xs={4}>
            <Container>
              <Grid container spacing={4} justifyContent="center">
                {detection.map(item => (
                  <Grid item key={item.confidence} spacing={4}>
                    {/* {isHover && <DeleteIcon />} */}
                    <Tooltip
                      disableFocusListener
                      disableTouchListener
                      title="Delete"
                      placement="top-end"
                    >
                      <Card>
                        <IconButton>
                          <DeleteIcon />
                        </IconButton>
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
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            // style={{ top: '450', left: '1320' }}
                          />
                        </div>

                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography>{item.confidence}</Typography>
                        </CardContent>
                      </Card>
                    </Tooltip>
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
