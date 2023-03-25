import './style.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import AgencyServices from './components/AgencyServices'
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
    return (
        <>
        <Navbar {...data}/>
        <Hero {...data.hero}/>
        <Services {...data.services}/>
        <Portfolio {...data.portfolio}/>
        <hr className='divider'/>
        <AgencyServices {...data.agency_services}/>
        </>
        
    )
}