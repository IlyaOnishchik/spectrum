import { ChangeEvent, DetailedHTMLProps, FC, HTMLInputTypeAttribute, InputHTMLAttributes } from "react"

type InputProps = {
  className?: string
  type?: HTMLInputTypeAttribute
  value?: string | number | readonly string[]
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

const Input: FC<InputProps> = ({ className, type, value, onChange, disabled}) => {
  return (
    <input
      className={`${className} px-2 py-1 bg-violet-50 rounded shadow-inner`}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  )
}

export default Input