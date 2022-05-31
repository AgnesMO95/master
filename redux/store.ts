import { configureStore } from '@reduxjs/toolkit'
import imageFileListReducer from './images/imageSlice'
import predictionReducer from './predictions/predictionSlice'

export const store = configureStore({
  reducer: {
    imageFileList: imageFileListReducer,
    prediction: predictionReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
