import { useState } from 'react'
import { DropzoneDialogBase, FileObject } from 'react-mui-dropzone'

const ImageDropZone = () => {
  const [files, setFiles] = useState<FileObject[]>([])
  const handleAdd = (newFiles: FileObject[]) => {
    const newFileList = files.concat(newFiles)
    setFiles(newFileList)
    console.log(files)
  }
  const handleDelete = (deleted: FileObject) => {
    setFiles(files.filter(f => f !== deleted))
  }

  const predict = async () => {
    console.log(files[0].file)
    const formData = new FormData()
    formData.append('files', files[0].file)
    const response = await fetch(`http://127.0.0.1:5000/detect`, {
      method: 'POST',
      body: formData,
    })
    const data = await response
    data.json().then(res => console.log(res[0].detections))
  }

  return (
    <DropzoneDialogBase
      open={true}
      submitButtonText={'Predict'}
      fileObjects={files}
      onAdd={handleAdd}
      onDelete={handleDelete}
      filesLimit={Infinity}
      maxFileSize={2000000000}
      acceptedFiles={['image/*']}
      showPreviewsInDropzone={false}
      showPreviews={true}
      previewText={'Uploaded images'}
      onSave={predict}
    />
  )
}

export default ImageDropZone
