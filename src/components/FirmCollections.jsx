import React,{useState,useEffect} from 'react'
import {API_URL} from '../api'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";


const FirmCollections = () => {
    const [firmData, setFirmData] = useState([]);
    const[selectedRegion,setSelectionRegion] = useState('All');

    const firmDataHandler = async()=>{
        try{
            const response = await fetch (`${API_URL}/vendor/all-vendors`)
            const newFirmData = await response.json()
            setFirmData(newFirmData.vendors);
        }
        catch(error)
        {
            alert('Firm data not fetched')
            console.error('firm data not fetched')
        }
    }
    useEffect(()=>{
        firmDataHandler()
    },[])

    const filterHandler= (region)=>{
        setSelectionRegion(region);
    }
  return (
    <>
    <h3>Restaurants with online food delivery in Hyderabad</h3>
    <div className="filterButtons">
        <button onClick={()=>filterHandler("All")}>All</button>
        <button onClick={()=>filterHandler("South-Indian")}>South-Indian</button>
        <button onClick={()=>filterHandler("North-Indian")}>North-Indian</button>
        <button onClick={()=>filterHandler("Chinese")}>Chinese</button>
        <button onClick={()=>filterHandler("Bakery")}>Bakery</button>

    </div>
    <section className='firmSection'>
        {firmData.map((apple)=>{
            return apple.firm.map((item)=>{
                if(selectedRegion == "All" || item.region.includes(selectedRegion.toLocaleLowerCase()))
                {
                    
                        return(
                            <Link to={`/products/${item._id}/${item.firmName}`} className='link'>
                            <div className='firmGroup'>
                            <div className='firmImage'>
                                <img src={`${API_URL}/uploads/${item.image }`}></img>
                                <div className="firmOffer">
                                {item.offer}
                                </div>
                            </div>
                            <div className='firmDetails'>
                            <strong>{item.firmName}</strong>
                            <div className='firmArea'>{item.region.join(', ')}</div>
                            <div className='firmArea'>{item.area}</div>
                            </div>
                            </div>
                            </Link>
                        )
                }
            })

            return null;
        })}
    </section>
    </>
  )
}

export default FirmCollections
