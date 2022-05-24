import { Container, Grid } from '@mui/material'
import { Fragment } from 'react'
import styled from '@emotion/styled'

const StyledImage = styled.img`
  //width: 100px;
  //margin-top: 10px;
  //position: static;
  //top: 200px;
  //overflow: scroll;
  //width: 100px;
  /* top: 2000;
  left: 2000; */
  margin-left: -4000px;
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
    confidence: '0.3',
    x: 39,
    y: 10,
    w: 20,
    h: 38,
  },
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
    confidence: '0.3',
    x: 39,
    y: 10,
    w: 20,
    h: 38,
  },
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
    confidence: '0.3',
    x: 39,
    y: 10,
    w: 20,
    h: 38,
  },
  {
    label: 'Osteoclast',
    confidence: '0.3',
    x: 39,
    y: 10,
    w: 20,
    h: 38,
  },
]

const ResultDetail = (props: Props) => {
  return (
    <Fragment>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={8}>
            <img src={props.image} alt={props.title} width={'100%'} />
          </Grid>
          <Grid item xs={2}>
            <div
              style={{
                width: 64,
                height: 64,
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
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}

export default ResultDetail
