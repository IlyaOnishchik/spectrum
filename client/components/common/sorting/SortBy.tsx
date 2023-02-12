import React, { FC } from 'react'
import Select, { SelectOption } from '../Select'

type SortByProps = {
  value: string
  options: SelectOption[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SortBy: FC<SortByProps> = ({ value, options, onChange }) => {
  return (
    <div>
      <Select label='Sort by' value={value} options={options} onChange={onChange}/>
    </div>
  )
}

export default SortBy