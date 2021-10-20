import axios from "axios";
import {useHistory} from 'react-router-dom'
import {useEffect, useState} from "react";
import {Card} from "../component/Card";
import {List} from "../component/List";
import {ALL_COUNTRIES} from "../config";
import {Controls} from "../component/Controls";


export const HomePage = ({countries, setCountries}) => {

    const {push} = useHistory()
    const [filterCountries, setFilterCountries] = useState([countries])
    const handlerSearch = (search, region) => {
        let data = [...countries];
        if (region) {
                data = data.filter(el => el.region.includes(region))
        }
        if(search) {
            data = data.filter(el=> el.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFilterCountries(data)
    }

    useEffect(() => {
        if (!countries.length) {
            axios.get(ALL_COUNTRIES)
                .then(
                    ({data}) => setCountries(data))
        }
    }, [])

    return (
        <>
            <Controls onSearch={handlerSearch}/>
            <List>
                {countries.map((el) => {
                        const countyInfo = {
                            img: el.flags.png,
                            name: el.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: el.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: el.region,
                                },
                                {
                                    title: 'Capital',
                                    description: el.capital,
                                }
                            ],
                        };
                        return (
                            <Card key={el.name} onClick={() => push(`/country/${el.name}`)} {...countyInfo} />
                        )
                    }
                )}
            </List>
        </>
    )
}