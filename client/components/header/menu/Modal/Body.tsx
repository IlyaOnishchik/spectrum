import { ModalBody } from "@chakra-ui/react"
import { useCategories } from "../../../../hooks/useCategories"
import { Category } from "../../../../types/Category"
import Error from "../../../common/Error"
import Loading from "../../../common/Loading"

const Body = () => {

  const { data, loading, error } = useCategories()
  if (loading) return <Loading/>
  if (error) return <Error message={error.message}/>
  const categories: Category[] = data.categories
  const baseCategories = categories.filter(item => !item.parentCategoryId)
  const secondaryCategories = categories.filter(item => item.parentCategoryId)

  return (
    <ModalBody>
      {
        baseCategories.map(item => 
          <div>
            <div className="font-bold">{item.name}</div>
            <img src={process.env.NEXT_PUBLIC_API_URL + '/' + item.image?.name} alt={item.name} />
            <div>{secondaryCategories.filter(it => it.parentCategoryId === item.id).map(it => <div>{it.name}</div>)}</div>
          </div>
        )
      }
    </ModalBody>
  )
}

export default Body