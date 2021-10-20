import axios from "axios";
import {Controls} from "./component/Controls";
import {useEffect, useState} from "react";
import {ALL_COUNTRIES} from "./config";
import {List} from "./component/List";
import {Card} from "./component/Card";
import {Main} from "../component/Main";


export const HomePage = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        axios.get(ALL_COUNTRIES)
            .then(
                ({data}) => setCountries(data)
            )
    }, [])
    console.log(countries)
    return (
        <>
            <Controls/>
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
                            <Card key={el.name} {...countyInfo} />
                        )
                    }
                )}
            </List>
        </>
    )
}