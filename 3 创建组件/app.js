// const exf={
// 	test(){
// 		alert('ok test mixins'+this.props.group);
// 	}
// }

// const Item=React.createClass({
// 	displayName:'Item',//test检测
	// getInitialState(){
	// 	reutrn{
	// 		result:'123'
	// 	}
	// }
// 	getDefaultProps(){//设置props默认值
// 		return{
// 			group:'javascript'
// 		}
// 	},
// 	mixins:[exf],//混合写法
// 	//prptotype
// 	render(){
// 		//null false Element object
// 		return<div>
// 			{this.props.group}
// 			<button onClick={this.test}>Click me!</button>
// 		</div>
// 		// return React.createElement('div',null,this.props.group)
// 	}
// })


//es6
class Item extends React.Component{
	constructor(props){
		super(props);
		this.state={//getInitialState
			result:123
		}
	}
	static get defaultProps(){//设置props默认值 getter
 		return{
			group:'javascript'
		}
 	}
 	//es6不支持混合写法
 	test(){
 		alert('ok test mixins'+this.props.group);
 	}
	render(){
			//null false Element object
 		return<div>
 			{this.props.group}
 			<button onClick={this.test.bind(this)}>Click me!</button>
 		</div>
 		// return React.createElement('div',null,this.props.group)
 	}
}
// Item.defaultProps={
// 	group:"javascript"
// }
ReactDOM.render(<Item group="hello"/>,document.body);//内部自动创建displayName