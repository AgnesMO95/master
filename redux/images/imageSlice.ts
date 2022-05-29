import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface ImageFileListState {
  images: File[]
}

const initialState: ImageFileListState = {
  images: [],
}

export const imageFileListSlice = createSlice({
  name: 'ImageFileList',
  initialState,
  reducers: {
    addFileToList: (state: ImageFileListState, action: PayloadAction<File>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.images = state.images.concat(action.payload)
    },
    deleteFileInList: (
      state: ImageFileListState,
      action: PayloadAction<File>
    ) => {
      state.images = state.images.filter(f => f !== action.payload)
    },
    // incrementByAmount: (state, action: PayloadAction<File>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addFileToList, deleteFileInList } = imageFileListSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectImageFileList = (state: RootState) =>
  state.imageFileList.images

export default imageFileListSlice.reducer
