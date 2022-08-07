import {render, screen} from "@testing-library/react";
import MainHeader from "./MainHeader";

describe('MainHeader component', () => {
    test('it should render a MainHeader', () => {
        render(<MainHeader />);

        expect(screen.getByRole('appName')).toHaveTextContent('Trash Manager')
    })
})