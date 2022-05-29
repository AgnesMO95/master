import { useState } from 'react'
import { DropzoneDialogBase, FileObject } from 'react-mui-dropzone'
import { useRouter } from 'next/router'

import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import {
  addFileToList,
  deleteFileInList,
  addURLToList,
} from '../../redux/images/imageSlice'

const ImageDropZone = () => {
  const router = useRouter()
  const images = useAppSelector(state => state.imageFileList.images)
  const dispatch = useAppDispatch()

  const [files, setFiles] = useState<FileObject[]>([])
  const handleAdd = (newFiles: FileObject[]) => {
    newFiles.map(file => dispatch(addFileToList(file.file)))
    newFiles.map(file => dispatch(addURLToList(URL.createObjectURL(file.file))))
    const newFileList = files.concat(newFiles)
    setFiles(newFileList)
  }
  const handleDelete = (deleted: FileObject) => {
    dispatch(deleteFileInList(deleted.file))
    setFiles(files.filter(f => f !== deleted))
  }

  const predict = async () => {
    const formData = new FormData()
    //change files[0].file to images in order to send multiple images to backend
    formData.append('files', files[0].file)
    const response = await fetch(`http://127.0.0.1:5000/detect`, {
      method: 'POST',
      body: formData,
    })
    const data = await response
    data.json().then(res => console.log(res)) //[0].detections
    await router.push('/results')
  }

  const handleCancel = () => {
    router.push('/results')
  }

  return (
    <DropzoneDialogBase
      open={true}
      submitButtonText={'Predict'}
      fileObjects={files}
      onAdd={handleAdd}
      onDelete={handleDelete}
      onClose={handleCancel}
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
