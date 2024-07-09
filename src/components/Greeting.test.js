import { render,screen } from "@testing-library/react"
import Greeting from "./Greeting"
describe("Greeting component" , ()=>{
test('render hello world as a test' ,()=>{
    //arrange
    render(<Greeting />);

    //act
    //nothing to do now


    //assert
   const elementGet =  screen.getByText('Hello world' , {exact:false})              //exact-true match lower and upper case to i.e exact by default its exact
   expect(elementGet).toBeInTheDocument();                                                                           //expect its globally available
})
})
