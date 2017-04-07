const list=[];
const database={
	add(article){
		list.push(article);
		return list.length-1;
	},
	del(index){
		list[index]=null;
	},
	update(index,newArticle){
		list.splice(index,1,newArticle);
	},
	get list(){
		return list;
	}
}

const Item=React.createClass({
	displayName:'Item',
	getDefaultProps(){//只运行一次
		return{
			value:'no value'
		}
	},
	getInitialState(){//多少实例就运行多少次
		return{
			value:this.props.value,
			curryHistoryIndex:0,
			history:[this.props.value]
		}
	},
	componentWillMount(){//组件加载前  1
		this.state.dbkey=database.add({value:this.state.value});
	},
	componentDidMount(){//调用一次
		
		let isYellow=false;
		
		const dom=ReactDOM.findDOMNode(this);
		this.state.loopNum=setInterval(function(){
			if(isYellow){
			dom.style.backgroundColor="yellow";
			isYellow=false;
		}else{
			dom.style.backgroundColor="red";
			isYellow=true;
		}
		},1000)
	},
	componentWillReceiveProps(nextProps){//类似于组件的挂载
		this.state.value=nextProps.value;
	},
	shouldComponentUpdate(nextProps,nextState){
		return true;
	},
	componentWillUpdate(nextProps,nextState){

		let dbkey=this.state.dbkey;
		database.update(dbkey,{value:this.state.value})
	},
	componentDidUpdate(oldvProps,oldState){
		let dom=ReactDOM.findDOMNode(this);
		let oldStyle=dom.style.border;
		dom.style.border="1px solid #f00";
		setTimeout(function(){
			dom.style.border=oldStyle;
		},2000)
	},
	changeValue(){
		this.setState({
			value:event.target.value
		});
	},
	pre(){
		let curryHistoryIndex=this.state.curryHistoryIndex;
		let history=this.state.history;
		if(curryHistoryIndex!==0){
			curryHistoryIndex-=1;
			this.setState({
				curryHistoryIndex
			})
		}
	},
	next(){
		let curryHistoryIndex=this.state.curryHistoryIndex;
		if(curryHistoryIndex!==this.state.history.length-1){
			curryHistoryIndex+=1;
			this.setState({
				curryHistoryIndex
			})
		}
	},
	save(){
		// this.state.history.push(this.state.value);
		// this.state.curryHistory=this.state.value;
		const value=this.state.value;
		const history=this.state.history;
		history.push(value);
		const curryHistoryIndex=history.length;
		this.setState({
			history,
			curryHistoryIndex
		})
	},
	render(){
		return<div>
			<div><button onClick={this.pre}>前</button><span>{this.state.history[this.state.curryHistoryIndex]}</span><button onClick={this.next}>后</button></div>
			<input value={this.state.value} onChange={this.changeValue}/>
			<button onClick={this.save}>save</button>
		</div>
	},
	componentWillUnmount(){
		clearInterval(this.state.loopNum);
	}
});


ReactDOM.render(
	<div>
		<Item/>
	</div>,
	document.getElementById('container')
	)