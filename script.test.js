/**
 * @jest-environment jsdom
 */

const { getByText, getByLabelText, fireEvent } = require('@testing-library/dom');
require('@testing-library/jest-dom/extend-expect');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

global.document.body.innerHTML = html;

// Assuming you've exported your `addTask` function from `script.js`, like:
// module.exports = { addTask };
const { addTask } = require('./script');

describe('addTask', () => {
  it('adds a new task to the list', () => {
    document.body.innerHTML = html; // Reset DOM
    const newTaskInput = document.querySelector('#new-task');
    const addButton = document.querySelector('button');

    // Simulate user typing a new task and clicking "Add Task"
    fireEvent.change(newTaskInput, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    // Now, we check if the new task was added
    expect(document.querySelector('#tasks').textContent).toContain('New Task');
  });
});
