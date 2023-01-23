import { ChangeEvent, FC } from "react"

export type SelectOption = {
  name: string
  value: number | string
}

type SelectProps = {
  label: string
  value: number | string
  options: SelectOption[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
} 

const Select: FC<SelectProps> = ({ label, value, options, onChange }) => {
  return (
    <div className='flex items-center gap-1 text-lg'>
      <span>{label}:</span>
      <select value={value} onChange={e => onChange(e)}>
        {options.map(item => <option key={item.name} value={item.value}>{item.name}</option>)}
      </select>
    </div>
  )
}

export default Select