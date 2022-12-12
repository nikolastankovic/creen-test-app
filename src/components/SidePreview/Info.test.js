import { render, screen } from "@testing-library/react";
import  Info  from "./Info";
import renderer from 'react-test-renderer';


const mockData = {
  "id": 1,
  "isbn": 1,
  "title": "Things Fall Apart",
  "nameOfAuthor": "Chinua Achebe",
  "dateOfBirthAuthor": "1930-11-16",
  "numberOfPages": 209,
  "yearOfPublishing": 1958,
  "quantity": 56,
  "coverPhoto": "https://book-store.mvsoft.co.rs/assets/images/things-fall-apart.jpg"
}


test('renders info component', () => {
  render(<Info data={mockData} />);
  const infoElement = screen.getByTestId('info');
  expect(infoElement).toBeInTheDocument();
});


describe('Info Snapshot', () => {
  it('Should matches DOM snapshot', () => {
    const tree = renderer.create(<Info data={mockData} />).toJSON()
    expect(tree).toMatchSnapshot();
  })
})
