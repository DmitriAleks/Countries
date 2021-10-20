import axios from 'axios'
import {IoArrowBack} from "react-icons/io5";
import {useHistory, useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import {searchByCountry} from "../config";
import {Button} from "../component/Button";
import {Info} from "../component/Info";


export const Details = ({match}) => {
    const {name} = useParams()
    const {push, goBack} = useHistory()
    const [country, setCountry] = useState(null)
    useEffect(() => {
        axios.get(searchByCountry(name)).then(
            ({data}) => setCountry(data[0])
        );
    }, [name])
    return (<div>
        <Button onClick={goBack}><IoArrowBack/>Back</Button>
        {country && (
            <Info push={push} {...country}/>
        )}

    </div>)
}