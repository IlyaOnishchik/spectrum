import Order from "./Order"
import SortBy from "./SortBy"


const Sorting = () => {

  return (
    <div className='flex items-center gap-5'>
      <SortBy/>
      <Order/>
    </div>
  )
}

export default Sorting