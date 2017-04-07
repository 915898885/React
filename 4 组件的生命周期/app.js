const Item=React.createClass({
	displayName:'Item',
	getDefaultProps(){//只运行一次
		return{
			group:123
		}
	},
	getInitialState(){//多少实例就运行多少次
		return{
			name:'wang'
		}
	},
	componentWillMount(){//组件加载前  1
		this.state.name="ya";
	},
	componentDidMount(){//调用一次
		const dom=ReactDOM.findDOMNode(this);
		console.log(dom)
		let isYellow=true;
		
		
		this.state.loopNum=setInterval(function(){
			if(isYellow){
			dom.style.backgroundColor="yellow";
			isYellow=false;
		}else{
			dom.style.backgroundColor="red";
			isYellow=true;
		}
		},3000)
	},
	update(){
		this.setState({
			name:'xin'
		})
	},
	componentWillReceiveProps(nextProps){//类似于组件的挂载
		//state
	},
	componentWillUpdate(nextProps,nextState){
		console.log('component will update')
	},
	componentDidUpdate(prevProps,prevState){
		console.log('component did update')
	},
	render(){
		return<div>{this.props.group+this.state.name}<button onClick={this.update}>update</button></div>
	},
	componentWillUnmount(){
		clearInterval(this.state.loopNum);
	}
});



function render(bool){
	ReactDOM.render(<div>
					<Item/>
					{bool?<Item/>:''}</div>,
	document.getElementById('container'));
}
render();
render();//此时调用组件的更新
document.getElementById('container').onclick=render;