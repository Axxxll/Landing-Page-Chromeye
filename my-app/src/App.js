import './style.css'
import Navbar from './components/Navbar'
import NavbarDesk from './components/NavbarDesk'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import AgencyServices from './components/AgencyServices'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import {useState, useEffect} from 'react'



export default function App() {

    const [data, setData] = useState()

    useEffect(()=>{
        fetch('https://s3.eu-west-2.amazonaws.com/chromeye.tasks/data.json')
        .then(res => res.json())
        .then(dataj => setData(dataj))
    }, [])
    if (!data) {
        return null
    } 

    const screenWidth = window.innerWidth
    let mediaMobile;
    if (screenWidth < 768) {
        mediaMobile = true
    }

    const navbarMobile = <Navbar {...data}/>
    const navbarDesktop = <NavbarDesk menu={data.main_menu}/>

    return (
        <>
        {mediaMobile ? navbarMobile : navbarDesktop}
        <Hero {...data.hero}/>
        <Services {...data.services}/>
        <Portfolio {...data.portfolio}/>
        <hr className='divider'/>
        <AgencyServices {...data.agency_services}/>
        <CallToAction />
        <Footer {...data.company_data} footer_menu={data.footer_menu}/>
        </>
        
    )
}