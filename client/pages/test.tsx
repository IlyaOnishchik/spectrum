import Rating from "../components/common/rating/Rating"
import Section from "../components/common/Section"

const TestPage = () => {
  return (
    <Section title='Test'>
      <div>
        <Rating value={3.8}/>
      </div>
    </Section>
  )
}

export default TestPage