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
    />
  )
}

export default ImageDropZone
