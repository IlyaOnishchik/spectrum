

const ImageInput = () => {
  return (
    <input type='file' accept='image/*' onChange={e => console.log(e.target.files![0])}/>
  )
}

export default ImageInput