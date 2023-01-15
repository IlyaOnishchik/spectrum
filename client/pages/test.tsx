import ImageInput from "../components/common/ImageInput"

const TestPage = () => {

  const handlePost = () => {
    alert('Post image')
  }

  return (
    <div className="flex flex-col max-w-fit p-5 gap-5 bg-violet-200">
      <ImageInput/>
      <input type='text' placeholder='path'/>
      <button onClick={handlePost}>Post</button>
    </div>
  )
}

export default TestPage