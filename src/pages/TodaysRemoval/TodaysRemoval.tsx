import React, {FunctionComponent} from 'react';
import { Trash } from "../../types/trash.type";
import Card from "./components/Card/Card";
import {Container} from "@mui/material";
import {useTranslation} from "react-i18next";
import { NoRemoval, Loader } from './TodaysRemoval.style';
import {useAppSelector} from "../../hooks";
import {selectTrashDataStatus} from "../../store/trash/trash.slice";
import {DataStatus} from "../../types/dataStatus.type";

interface OwnProps {
    readonly removal: Trash | null
}

export type TodaysRemovalProps = OwnProps;

const TodaysRemoval: FunctionComponent<TodaysRemovalProps> = ({ removal}) => {

    const status = useAppSelector(selectTrashDataStatus);
    const renderCard = () => !!removal ? <Card {...removal} /> : <NoRemovalForToday />

    // TODO: display a message when status === error
    return (
        <Container>
            {status !== DataStatus.Success && DataStatus.Error && (
                <Loader />
            )}

            {status === DataStatus.Success && (
                renderCard()
            )}
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