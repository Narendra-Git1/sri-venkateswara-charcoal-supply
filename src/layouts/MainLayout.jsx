import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import StickyContactBar from "../components/contact/StickyContactBar"

function MainLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {children}
      </main>
      
      <Footer />
      <StickyContactBar />
    </div>
  )
}

export default MainLayout