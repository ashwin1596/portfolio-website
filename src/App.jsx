import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";
import ProjectGrid from "./components/ProjectGrid.jsx";

const App = () => {
    return (
        <main className="max-w-fit mx-auto">
            <Navbar />
            <Hero />
            <Experience />
            <ProjectGrid />
            <Contact />
            <Footer />
        </main>
    )
}
export default App
