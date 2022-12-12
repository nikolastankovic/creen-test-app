import { render, screen } from "@testing-library/react";
import  SelectMenu  from "./SelectMenu";

const mockData = ['Menu Item 1', 'Menu Item 2'];

test('renders info component', () => {
  render(<SelectMenu data={mockData}  />);
  const selectComponent = screen.getByTestId('selectComponent');
  expect(selectComponent).toBeInTheDocument();
});
