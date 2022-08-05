import Card, {CardProps} from "./Card";
import {render, screen} from "@testing-library/react";
import { Day, TrashVariant } from "../../../../types/trash.type";
import React from "react";
import {backgrounds} from "./Card.style";

const defaultProps: CardProps = {
    id: TrashVariant.Yellow,
    removalDays: [Day.Monday, Day.Wednesday],
    lastRemoval: '2022-07-25 14:02:51.993225+00'
}

jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
        return {
            t: (key: string) => key,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        };
    },
}));

describe('Trash Card component', () => {

test('it should display yellow trash can for removal', () => {
    render(<Card {...defaultProps} />);

    const trashCard = screen.getByRole('trashCard');
    const trashCardContent = screen.getByRole('trashCardContentWrapper');
    const trashCardIcon = screen.getByRole('trashCardIcon');
    const trashCardTitle = screen.getByRole('trashCardTitle');

    expect(trashCard).toHaveStyle(`background-image: url(${backgrounds[defaultProps.id].image})`);
    expect(trashCardContent).toHaveStyle(`background: ${backgrounds[defaultProps.id].gradient}`);
    expect(trashCardIcon).toHaveStyle(`background: ${backgrounds[defaultProps.id].icon}`);
    expect(trashCardTitle).toHaveTextContent('trash.yellow.name');
});

})

