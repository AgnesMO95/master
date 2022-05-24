import { Fragment } from 'react'

interface Props {
  image: string
  title: string
}

const ResultDetail = (props: Props) => {
  return (
    <Fragment>
      <img src={props.image} alt={props.title} width={'100%'} />
    </Fragment>
  )
}

export default ResultDetail
