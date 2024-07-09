import {render,screen} from  '@testing-library/react';
import Async from './Async';

describe('Async Component', ()=>{
    test('renders post if request succeed', async ()=>{
            
        render(<Async />)

        // const listItemElements = screen.getAllByRole('listitem');   we commented this out as first time when our page load see async.js it has initial empty array so we see output "unable to find list item" so to overcome this we use findAllByRole -- which return promise
        //find all by roles has 3 argument first is listItem second is "expect"  and third is we can specify here timeout in which default timeout is one second so unlike getAllByRole it waits for http request
        //since it return promise so we should use await
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    })
})