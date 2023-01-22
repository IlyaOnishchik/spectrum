import { ChangeEvent, FC } from "react"

type Option = {
  name: string
  value: number
}

type SelectProps = {
  label: string
  value: number
  options: Option[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
} 

const Select: FC<SelectProps> = ({ label, value, options, onChange }) => {
  return (
    <div>
    <span>{label}:</span>
    <select value={value} onChange={e => onChange(e)}>
      {options.map(item => <option key={item.value} value={item.value}>{item.name}</option>)}
    </select>
    </div>
    
  )
}

export default Select