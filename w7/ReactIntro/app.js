const rootElement = document.getElementById('root');

const CreateElement = props => (<li>{props.name}</li>)

const CreateUl = props => (<ul>
    {props.items.map((item, i) => <CreateElement name = {item} key = {i} />) }
</ul>)

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (<div className="card blue-grey darken-1 card-content white-text">
                    <h1 class="card-title">{this.props.title}</h1>
                    <CreateUl  items = {this.props.fruits} />
                </div>)
    }
}


ReactDOM.render(<App title="Shopping list" fruits = {["Mango", "Papaya","RingeRingeRaya"]}/>,rootElement)

const AppFruits = new App (title="Shopping", fruits=["mango", "papaya"]);

AppFruits.render()

