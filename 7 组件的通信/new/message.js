//父与子组件的通信
const eventbus=eventemitter.EventEmitter();

const Item=React.createClass({
	render(){
		let style=this.props.actived?{border:'solid 1px green'}:{}
		return<li onClick={this.props.callback} style={style}>
		{this.props.name}
		</li>
	}
});

const Comp=React.createClass({
	getInitialState(){
		return{
			list:[]
		}
	},
	componentWillMount(){
		this.state.list=this.props.data.map(item=>{return{name:item,actived:false}});
	},
	componentDidMount(){
		setTimeout( ()=>{
			// console.log(list);
			this.state.list[1].actived=true;
			this.forceUpdate();
		},3000);
	},
	callback(item){
		alert(item.name);
	},
	render(){
		return<ul>
			{this.state.list.map(item=> <Item callback={this.callback.bind(this,item)} actived={item.actived} name={item.name}/>)}
		</ul>
	}
});
const list=[
	"AAA",
	"BBB",
	"CCC",
	"DDD"
];
	
ReactDOM.render(
	<Comp data={list}/>,
	document.getElementById('container')
)