import Chance from 'chance';
import React, { Component } from 'react';
import { Field, Errors, Form, actions, track } from 'react-redux-form';
import { connect } from 'react-redux';

// Random stuff generator
const chance = new Chance();

// Just to make it prettier
const Wow = ({ children, title }) =>
  <div className="container">
    <div className="page-header">
      <h1>{ title }</h1>
    </div>
    { children }
  </div>;

const createTodo = () => {
  return {
    id: chance.guid(),
    title: chance.name(),
  }
}

const addTodo = dispatch => e => {
  e.preventDefault();
  const todo = createTodo();
  dispatch(actions.push('todos.todos', todo));
}

const removeTodo = ({ dispatch, id, index })=> e => {
  e.preventDefault();
  console.log('Request deletion of Todo with id: ', id);
  dispatch(actions.remove('todos.todos', index))
}

const Todo = ({ dispatch, id, index }) =>
  <div>
    <button
      className="btn btn-danger"
      onClick={ removeTodo({ dispatch, id, index }) }
      style={{
        WebkitTransform: 'translate(-36px, 34px)',
        transform: 'translate(-36px, 34px)',
      }}
      type="button"
    >
      x
    </button>
    <Field
      className="form-group"
      model={ track('todos.todos[].title', todo => todo.id === id) }
      validators={{
        required: val => val && val.length
      }}
    >
      <input
        className="form-control"
        type="text"
      />
    </Field>
    <Errors
      model={ track('todos.todos[].title', todo => todo.id === id) }
      messages={{
        required: '* REQUIRED *',
      }}
      style={{
        color: 'red',
      }}
    />
  </div>;

class Todos extends Component {
  render() {
    const { dispatch, todos: { todos }, todosForm } = this.props;
    return (
      <Wow title="RRF Todos">
        <h3>Form status: { todosForm.valid ? 'valid' : 'invalid' }</h3>
        <Form model="todos">
          { todos.map(({ id }, index) =>
            <Todo
              dispatch={ dispatch }
              id={ id }
              index={ index }
              key={ id }
            />
          )}
          <button
            className="btn btn-default btn-primary"
            onClick={ addTodo(dispatch) }
            style={{ marginTop: '3em'}}
            type="button"
          >
            Add random Todo
          </button>
        </Form>
      </Wow>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    todosForm: state.todosForm,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
