import React, { FC } from 'react'
import Select, { SelectOption } from '../Select'

type OrderProps = {
  value: string
  options: SelectOption[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Order: FC<OrderProps> = ({ value, options, onChange }) => {
  return (
    <div>
      <Select label='Order' value={value} options={options} onChange={onChange}/>
    </div>
  )
}

export default Order