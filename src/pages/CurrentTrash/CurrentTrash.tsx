import React, {FunctionComponent} from 'react';
import { Trash } from "../../types/trash.type";
import Card from "./components/Card/Card";
import {Container} from "@mui/material";

interface OwnProps {
    readonly trash: Trash | null
}

export type CurrentTrashProps = OwnProps;

const CurrentTrash: FunctionComponent<CurrentTrashProps> = ({ trash}) => {

    const renderCard = () => !!trash ? <Card {...trash} /> : <p>Pas de poubelle à sortir aujourd'hui</p>

    return (
        <Container>
            {renderCard()}
        </Container>
    )
};

export default CurrentTrash;