import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import starwarslogo from "../assets/starwarslogo.jpg";
import styled from "styled-components";

const CardStyling = styled.div`
margin: 5% 0;
color: yellow;
border: 5px solid yellow;
`

const CardH1 = styled.h1`
text-align: center;
font-weight: bold;
font-size: 1.4rem;
`

const CardH2 = styled.h2`
text-align: center;
font-size: 1rem;
`

const StarWarsCard = props => {
    return (
        <Col xs="6" med="4" xl="3">
            <CardStyling>
                <CardImg top width="100%" src={starwarslogo} alt="Star Wars logo" />
                <CardBody>
                    <CardH1>{props.name}</CardH1>
                    <CardH2>Birth Year: {props.birth_year}</CardH2>
                </CardBody>
            </CardStyling>
        </Col>
    );
}
export default StarWarsCard;