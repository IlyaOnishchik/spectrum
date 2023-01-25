import { Checkbox } from "@chakra-ui/react"
import { FC } from "react"
import { CheckFilterValue } from "../../../types/Filters"

type CheckFilterProps = {
  values: CheckFilterValue[]
}

const CheckFilter: FC<CheckFilterProps> = ({ values }) => {
  return (
    <div className='flex flex-col'>
      {values.map(item => <Checkbox colorScheme='purple' checked={item.isChecked}>{item.value} {item.unit}</Checkbox>)}
    </div>
  )
}

export default CheckFilter