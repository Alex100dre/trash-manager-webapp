import React from "react";
import {render, screen} from "@testing-library/react";
import CurrentTrash, {CurrentTrashProps} from "./CurrentTrash";
import {Day, Trash, TrashVariant} from "../../types/trash.type";
import Card, {CardProps} from "./components/Card/Card";

const defaultProps: CurrentTrashProps = {
    trash: {
        id: TrashVariant.Yellow,
        takeOutDays: [Day.Monday, Day.Wednesday],
        lastTakeOutDate: null
    }
}

const mockCard = jest.fn();
jest.mock("./components/Card/Card.tsx", () => (props: CardProps) => {
    mockCard(props);
    return <></>;
});

test("it should display a card for today's trash can removal", () => {
    render(<CurrentTrash {...defaultProps} />);

    expect(mockCard).toHaveBeenCalledWith({...defaultProps.trash});
});

test('it should display a message when there is no trash can removal for today', () => {
    render(<CurrentTrash trash={null} />);
    const noTrashMessage = screen.getByText(/Pas de poubelle à sortir aujourd'hui/i);
    expect(noTrashMessage).toBeInTheDocument();
});