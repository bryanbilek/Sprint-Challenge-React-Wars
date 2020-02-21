import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";
import { Container, Row } from 'reactstrap';

function StarWarsPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
                // console.log(response.data);
                setData(response.data.results);
            })
            .catch(error => {
                console.log("the data was not returned", error);
            });
    }, []);
    return (
        <Container>
            <Row>
                {data.map(d => {
                    return (
                        <StarWarsCard
                            name={d.name}
                            birth_year={d.birth_year}
                        />
                    )
                })}
            </Row>
        </Container>
    )
}

export default StarWarsPage;