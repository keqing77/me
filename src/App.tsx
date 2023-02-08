
import Footer from './components/Footer/Footer'
import Info from './components/Info/Info'
import Project from './components/Project/Project'
import SocialItem from './components/SocialItem/SocialItem'

function App() {

  return (
    <>
      <div className="lg:px-[20%] md:px-[15%] pb-[5%] sm:px-[10%] xs:px-[5%] px-[5%]  z-8">
        <Info/>
        <SocialItem />
        <Project/>
      </div>
      <Footer/>
    </>
  )
}

export default App
