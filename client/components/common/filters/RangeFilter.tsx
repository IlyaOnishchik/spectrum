import React, { FC, useState } from 'react'
import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react'
import Input from '../Input'

type RangeFilterProps = {
  min: number
  max: number
  from: number
  to: number
  onChangeEnd: (value: number[]) => void
}

const RangeFilter: FC<RangeFilterProps> = ({ min, max, from, to, onChangeEnd }) => {

  const [localFrom, setLocalFrom] = useState(from)
  const [localTo, setLocalTo] = useState(to)

  const handleChange = (value: number[]) => { 
    setLocalFrom(value[0])
    setLocalTo(value[1])
  }

  return (
    <div className='flex flex-col gap-3'>
      <RangeSlider 
        colorScheme='purple'
        aria-label={['min', 'max']}
        min={min} 
        max={max} 
        defaultValue={[from, to]}
        value={[localFrom, localTo]}
        onChange={handleChange}
        onChangeEnd={onChangeEnd}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack/>
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <div className='grid grid-cols-2 gap-2'>
        <Input type='number' value={localFrom} disabled/>
        <Input type='number' value={localTo} disabled/>
      </div>
    </div>
  )
}

export default RangeFilter