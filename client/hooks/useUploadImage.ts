export const useUploadImage = () => {

  const upload = (image: File) => {
    let formData = new FormData()
    formData.append('image', image)
    fetch('http://localhost:3001/images', { 
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
  }

  return { upload }
}