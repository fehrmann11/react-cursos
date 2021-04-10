import {useState,useEffect} from 'react';
import data from '../../data';
import axios from 'axios'; 


const useGoogleAddress = address => {
    const[map,setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${data.api.google}`;

    useEffect(async()=>{
        const response = await axios(API);
        setMap(response.data.results[0].geometry.location);
    },[]);
    return map;

};

export default useGoogleAddress;