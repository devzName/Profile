import './App.css'
import { useTranslation } from 'react-i18next'
import NavBar from "../src/components/NavBar"
import Banner from "../src/components/Banner"
import Skills from "../src/components/Skills"
import Projects from "../src/components/Projects"
import Contact from "../src/components/Contact"
import Footer from "../src/components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const { t, i18n, ready } = useTranslation('common')
    return (
        <div>
            <title>{t('lng_title')}</title>
            <NavBar t={t}/>
            <Banner t={t}/>
            <Skills t={t}/>
            <Projects t={t}/>
            <Contact t={t}/>
            <Footer/>
        </div>
    )
}

export default App
