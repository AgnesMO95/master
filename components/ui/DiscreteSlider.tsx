import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 0.25,
    label: '0.25',
  },
  {
    value: 0.5,
    label: '0.5',
  },
  {
    value: 1,
    label: '1',
  },
]

function valuetext(value: number) {
  return `${value}`
}

export default function DiscreteSliderLabel() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={0.25}
        getAriaValueText={valuetext}
        step={0.05}
        marks={marks}
        min={0}
        max={1}
        valueLabelDisplay="auto"
      />
    </Box>
  )
}
