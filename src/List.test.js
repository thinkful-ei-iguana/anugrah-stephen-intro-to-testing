import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import App from './App';
import { exportAllDeclaration } from '@babel/types';


describe('<List />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<List 
            key="abcde"
            header="Example Header"
            cards={[{ id: 'a', title: 'First card', content: 'lorem ipsum' },
            { id: 'b', title: 'First card', content: 'lorem ipsum' }]} />, div);

        ReactDOM.unmountComponentAtNode(div);
    });   
} );


describe('<List />', () => {
    it('renders this UI as expected', () =>{
        const list = renderer.create(<List 
            key="abcde"
            header="Example Header"
            cards={[{ id: 'a', title: 'First card', content: 'lorem ipsum' },
            { id: 'b', title: 'First card', content: 'lorem ipsum' }]}       
            />).toJSON();
        expect(list).toMatchSnapshot();
    });
});