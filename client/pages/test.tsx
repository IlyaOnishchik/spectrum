import CartButton from "../components/common/buttons/CartButton"
import ComparedButton from "../components/common/buttons/ComparedButton"
import FavoritesButton from "../components/common/buttons/FavoritesButton"
import Section from "../components/common/Section"

const TestPage = () => {
  return (
    <Section title='Test'>
      <div>
        <CartButton/>
        <FavoritesButton/>
        <ComparedButton/>
      </div>
    </Section>
  )
}

export default TestPage