import Blog from "./blog/Blog"
import Categories from "./categories/Categories"
import Greeting from "./greeting/Greeting"
import New from "./new/New"

const Home = () => {
  return (
    <div className="h-full">
      <Greeting/>
      <New/>
      <Categories/>
      <Blog/>
    </div>
  )
}

export default Home