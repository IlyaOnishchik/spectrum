import { gql, useQuery } from '@apollo/client'
import { Stat, StatLabel, StatNumber } from '@chakra-ui/react'
import React from 'react'
import Error from '../common/Error'
import Loading from '../common/Loading'

const Orders = () => {

  const { loading, error, data } = useQuery(gql`query { currentUser { redemptionAmount redemptionPercent } }`)
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const { redemptionAmount, redemptionPercent } = data.currentUser

  return (
    <div className='flex'>
      <Stat>
        <StatLabel>Redemption amount</StatLabel>
        <StatNumber>${redemptionAmount}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Redemption percent</StatLabel>
        <StatNumber>{Math.round(redemptionPercent)}%</StatNumber>
      </Stat>
    </div>
  )
}

export default Orders