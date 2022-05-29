import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface ImageFileListState {
  images: File[]
  urls: string[]
}

const initialState: ImageFileListState = {
  images: [],
  urls: [],
}

export const imageFileListSlice = createSlice({
  name: 'imageFileList',
  initialState,
  reducers: {
    addFileToList: (state: ImageFileListState, action: PayloadAction<File>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.images.push(action.payload)
    },
    addURLToList: (
      state: ImageFileListState,
      action: PayloadAction<string>
    ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.urls.push(action.payload)
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
export const { addFileToList, deleteFileInList, addURLToList } =
  imageFileListSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectImageFileList = (state: RootState) =>
  state.imageFileList.images

export default imageFileListSlice.reducer
