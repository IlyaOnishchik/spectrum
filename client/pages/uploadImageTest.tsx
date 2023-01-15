import { ChangeEvent, useState } from "react"
import ImageInput from "../components/common/ImageInput"
import { useUploadImage } from "../hooks/useUploadImage"

const UploadImageTestPage = () => {

  const [image, setImage] = useState<File | null>(null)

  const { upload } = useUploadImage()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setImage(e.target.files![0])

  const handlePost = () => image ? upload(image) : alert('Image - ' + image)

  return (
    <div className="flex flex-col max-w-fit p-5 gap-5 bg-violet-200">
      <ImageInput onChange={handleChange}/>
      <button onClick={handlePost}>Post</button>
    </div>
  )
}

export default UploadImageTestPage