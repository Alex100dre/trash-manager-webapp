import React, {FunctionComponent} from 'react';
import { Trash } from "../../types/trash.type";
import Card from "./components/Card/Card";
import {Container} from "@mui/material";

interface OwnProps {
    readonly removal: Trash | null
}

export type TodaysRemovalProps = OwnProps;

const TodaysRemoval: FunctionComponent<TodaysRemovalProps> = ({ removal}) => {

    const renderCard = () => !!removal ? <Card {...removal} /> : <p>Pas de poubelle à sortir aujourd'hui</p>

    return (
        <Container>
            {renderCard()}
        </Container>
    )
};

export default TodaysRemoval;