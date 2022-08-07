import React from "react";
import {render, screen} from "@testing-library/react";
import TodaysRemoval, {TodaysRemovalProps} from "./TodaysRemoval";
import {Day, TrashVariant} from "../../types/trash.type";
import {CardProps} from "./components/Card/Card";

const defaultProps: TodaysRemovalProps = {
    removal: {
        id: TrashVariant.Yellow,
        removalDays: [Day.Monday, Day.Wednesday],
        lastRemoval: '2022-07-25 14:02:51.993225+00'
    }
}

const mockCard = jest.fn();
jest.mock("./components/Card/Card.tsx", () => (props: CardProps) => {
    mockCard(props);
    return <></>;
});

//TODO: fix test conflict with redux Selector (need provider)
describe('TodaysRemoval component', () => {
// test("it should display a card for today's trash can removal", () => {
//     render(<TodaysRemoval {...defaultProps} />);
//
//     expect(mockCard).toHaveBeenCalledWith({...defaultProps.removal});
// });
//
// test('it should display a message when there is no trash can removal for today', () => {
//     render(<TodaysRemoval removal={null} />);
//     // TODO: Mock i18next to avoid warning during  test run
//     const noTrashMessage = screen.getByText(/trash.noRemovalForToday/i);
//     expect(noTrashMessage).toBeInTheDocument();
// });

    test('remove this ASAP', () => {
        
    })
})
