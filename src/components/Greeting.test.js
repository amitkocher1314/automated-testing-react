import { render,screen } from "@testing-library/react"
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";
describe("Greeting component" , ()=>{
test('render hello world as a test' ,()=>{
    //arrange
    render(<Greeting />);

    //act
    //nothing to do now


    //assert
   const elementGet =  screen.getByText('Hello world' , {exact:false})              //exact-true match lower and upper case to i.e exact by default its exact
   expect(elementGet).toBeInTheDocument();                                                                           //expect its globally available
});

test(
     'render "changed!" when button NOt clicked' ,()=>{
    //arrange
    render(<Greeting />);

    //act
   

    //assert
   const outputElement =  screen.getByText('changed', {exact:false} )              //exact-true match lower and upper case to i.e exact by default its exact
   expect(outputElement).toBeInTheDocument();                                                                           //expect its globally available
})

test(
    'render "its good to see you" when button NOt clicked' ,()=>{
   //arrange
   render(<Greeting />);

   //act
   const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);



   //assert
  const outputElement =  screen.getByText('its good to see you' )           
  expect(outputElement).toBeInTheDocument();                                                                           
})

test("does not render 'its good to see you' when button was clicked ",()=>{
    //arrange
    render(<Greeting />);

    //act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);


    //assert
   const outputElement =  screen.queryByText('its good to see you')                //query to check null              
   expect(outputElement).toBeNull();                                                 
})

})