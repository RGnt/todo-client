import React from 'react';

import ReactDOM from 'react-dom';

import { ToDoItem } from '../components/ToDoItem/todo-item.component';

describe('ToDoItem', () => {
    it('renders the ToDo header', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ToDoItem />, container);
        expect(document.body.textContent).toMatch('Create a todo');
    });
});