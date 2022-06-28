import { useState } from 'react'
import { DropzoneDialogBase, FileObject } from 'react-mui-dropzone'
import { useRouter } from 'next/router'

import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import {
  addFileToList,
  deleteFileInList,
  addURLToList,
} from '../../redux/images/imageSlice'

import { addPredictions } from '../../redux/predictions/predictionSlice'

const ImageDropZone = () => {
  const router = useRouter()
  const images = useAppSelector(state => state.imageFileList.images)
  const predictions = useAppSelector(state => state.prediction.predictions)
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
    files.map(file => formData.append('files', file.file))
    //formData.append('files', files[0].file)
    const response = await fetch(`http://127.0.0.1:5000/detect`, {
      method: 'POST',
      body: formData,
    })
    const data = await response
    await data.json().then(res => {
      console.log(res)
      dispatch(addPredictions(res))
    })
    console.log(predictions)
    //await router.push('/results')
  }

  const handleCancel = () => {
    router.push('/results')
  }
  //console.log(predictions)
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
