import { Checkbox } from "@chakra-ui/react"
import { FC } from "react"
import { useAppDispatch } from "../../../redux/hooks"
import { toggleCheckFilterValue } from "../../../redux/slices/categorySlice"
import { CheckFilterValue } from "../../../types/Filters"

type CheckFilterProps = {
  id: string
  values: CheckFilterValue[]
}

const CheckFilter: FC<CheckFilterProps> = ({ id, values }) => {

  const dispatch = useAppDispatch()
  const handleChange = (value: string) => { dispatch(toggleCheckFilterValue({ id, value })) }

  return (
    <div className='flex flex-col'>
      {values.map(item => 
        <Checkbox
          key={item.value}
          colorScheme='purple'
          isChecked={item.isChecked}
          onChange={() => handleChange(item.value)}
        >
          {item.value} {item.unit}
        </Checkbox>
      )}
    </div>
  )
}

export default CheckFilter