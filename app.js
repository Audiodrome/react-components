// TODO
// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class TodoListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
// let App = () => (
//     <div>
//         <h2>My Todo List</h2>
//         <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
//     </div>
// );

// let TodoList = (props) => (
//     <ul>
//         {props.todos.map((todo, i) =>
//             <TodoListItem todo={todo} key={i} />
//         )}
//     </ul>
// );

// class TodoListItem extends React.Component {

//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <li>{this.props.todo}</li>
//         );
//     }

// }

// let Grocery = () => (
//     <div>
//         <h2>Grocery List</h2>
//         <GroceryList items={['Peanut Butter', 'Bananas', 'Tea']}/>
//     </div>
// );

// let GroceryList = (props) => (
//     <ul>
//         {props.items.map(item =>
//             <GroceryListItem item={item} />
//         )}
//     </ul>
// );

// class GroceryListItem extends React.Component {
    
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <li>{this.props.item}</li>
//         );
//     }
// }


