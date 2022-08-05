import React, {FunctionComponent} from 'react';
import { Trash } from "../../types/trash.type";
import Card from "./components/Card/Card";
import {Container} from "@mui/material";
import {useTranslation} from "react-i18next";
import { NoRemoval } from './TodaysRemoval.style';

interface OwnProps {
    readonly removal: Trash | null
}

export type TodaysRemovalProps = OwnProps;

const TodaysRemoval: FunctionComponent<TodaysRemovalProps> = ({ removal}) => {

    const renderCard = () => !!removal ? <Card {...removal} /> : <NoRemovalForToday />

    return (
        <Container>
            {renderCard()}
        </Container>
    )
};

const NoRemovalForToday = () => {
    const { t } = useTranslation();
    return (
        <NoRemoval>
            <img src={`${process.env.PUBLIC_URL}/img/no-removal.svg`} alt="Relax"/>
            <p>{t('trash.noRemovalForToday')}</p>
        </NoRemoval>
    )
}

export default TodaysRemoval;