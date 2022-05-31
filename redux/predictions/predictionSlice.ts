import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type Detection = {
  label: string
  confidence: number
  x: number
  y: number
  w: number
  h: number
}
type results = { detections: Detection[]; count: number }
type Predictions = { [imageName: string]: results }

export interface PredictionState {
  predictions: Predictions
}

const initialState: PredictionState = {
  predictions: {},
}

export const predictionSlice = createSlice({
  name: 'prediction',
  initialState,
  reducers: {
    addPredictions: (
      state: PredictionState,
      action: PayloadAction<Predictions>
    ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.predictions = action.payload
    },
    // deleteFileInList: (
    //   state: PredictionState,
    //   action: PayloadAction<string>
    // ) => {
    //   state.predictions = delete state.predictions[action.payload]
    // },
    // incrementByAmount: (state, action: PayloadAction<File>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addPredictions } = predictionSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectImageFileList = (state: RootState) =>
  state.prediction.predictions

export default predictionSlice.reducer
