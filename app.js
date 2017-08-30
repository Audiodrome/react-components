// TODO

let App = () => (
    <div>
        <h2>My Todo List</h2>
        <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
    </div>
);

let TodoList = (props) => (
    <ul>
        {props.todos.map((todo, i) =>
            <TodoListItem todo={todo} key={i} />
        )}
    </ul>
);

class TodoListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{this.props.todo}</li>
        );
    }

}

let Grocery = () => (
    <div>
        <h2>Grocery List</h2>
        <GroceryList items={['Peanut Butter', 'Bananas', 'Tea']}/>
    </div>
);

let GroceryList = (props) => (
    <ul>
        {props.items.map(item =>
            <GroceryListItem item={item} />
        )}
    </ul>
);

class GroceryListItem extends React.Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>{this.props.item}</li>
        );
    }
}

ReactDOM.render(<Grocery />, document.getElementById('app'));
