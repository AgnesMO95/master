import type { NextPage } from 'next'
import ResultDetail from '../../components/results/ResultDetail'
import { useRouter } from 'next/router'

const resultDetails: NextPage = () => {
  const router = useRouter()
  const image = router.query.img as string
  return <ResultDetail image={image} />
}

export default resultDetails
