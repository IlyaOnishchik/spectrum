import React from 'react'
import { useCompared } from '../../hooks/compared/useCompared'
import Error from '../common/Error'
import Loading from '../common/Loading'
import Section from '../common/Section'

const Compared = () => {

  const { loading, error, data } = useCompared()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>

  return (
    <Section title='Compared'>

    </Section>
  )
}

export default Compared