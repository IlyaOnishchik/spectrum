import { ChangeEvent, FC } from "react"

type ImageInputProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const ImageInput: FC<ImageInputProps> = ({ onChange }) => {
  return (
    <input
      type='file'
      accept='image/*'
      onChange={onChange}
    />
  )
}

export default ImageInput