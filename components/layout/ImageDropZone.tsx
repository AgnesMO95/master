import { useState } from 'react'
import { DropzoneAreaBase, FileObject } from 'react-mui-dropzone'

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
    <DropzoneAreaBase
      fileObjects={files}
      onAdd={handleAdd}
      onDelete={handleDelete}
    />
  )
}

export default ImageDropZone
