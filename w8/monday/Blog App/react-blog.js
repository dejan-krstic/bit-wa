
class Application extends React.Component {
    constructor (props){
        super (props);
    }
    render() {
        return (
            <div>
                <Header title = {this.props.title}/>
                <Content list = {this.props.blogList}/>
            </div>
        ) 
    }
}

const Header = (props) => {
        return (<nav>
                    <div className="nav-wrapper">
                        <a className="brand-logo center">{props.title}</a>
                    </div>
                </nav>) 
}

const Content = (props) => {
    return(<ul>
        {props.list.map((element, i) => <Article body = {element.body} title = {element.title} key ={i} />)}
    </ul>)
}

const Article = (props) => {
        return (<li className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <h3 className="card-title">{props.title} </h3>
                        <p>{props.body}</p>
                     </div>
                </li>)
}

ReactDOM.render ( <Application title = 'Nesto bezveze' blogList = {postsData} />, rootElement)