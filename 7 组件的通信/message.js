const eventbus=new eventemitter.EventEmitter();
const Comp=React.createClass({
	getInitialState(){
		return{
			colorIndex:0,
			colors:['yellow','red']
		}
	},
	getDefaultProps(){
		
	},
	componentWillMount(){
		// this.state.color=this.state.props;
		eventbus.on('changeColor',function(id,color){
			if(this.props.id!==id&&this.state.colors[this.state.colorIndex]===color){
				this.changeColor();
			}
		}.bind(this))
	},
	// componentWillReceiveProps(nextProps){
	// 	if(this.props.color!==nextProps.color){
	// 		this.state.color=nextProps.color;

	// 	}
	// },
	changeColor(){
		this.setState({
					colorIndex:this.state.colorIndex?0:1
				});
		setTimeout(()=>{
			eventbus.emit('changeColor',this.props.id,this.state.colors[this.state.colorIndex])
		},1500)
		
	},
	render(){
		return<div style={{backgroundColor:this.state.colors[this.state.colorIndex]}}>
			<p>{this.props.name}</p>
			<button onClick={this.changeColor}>click me!</button>
		</div>
	}
})
ReactDOM.render(
	<div>
		<Comp id="one"/>
		<Comp id="two"/>
	</div>,
	document.getElementById('container')
	)
