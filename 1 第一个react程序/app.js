// ReactDOM.render(
// 		<div>
// 			<button className="btn btn-default">Add</button>
// 			<ul className="list-group">
// 				<li className="list-group-item">Cars justs odio <span className="right glyphicon glyphicon-edit">删除</span><span className="right glyphicon glyphicon-remove">编辑</span>
// 				</li>
// 				<li className="list-group-item">
// 					<input className="item-edit" /><span className="glyphicon glyphicon-share">分享</span><span className="glyphicon glyphicon-remove">删除</span>
// 				</li>
// 			</ul>
// 		</div>,
// 		document.getElementById("container")
// );

const List=React.createClass({
	getInitialState(){
		return{
			key:0,
			list:new Map(),
			editList:new Map()
		}
	},
	save(id,value){
		this.state.editList.delete(id);
		this.state.list.set(id,value);
		this.forceUpdate();
	},
	edit(id,value){
		this.state.list.delete(id);
		this.state.editList.set(id,value);
		this.forceUpdate();
	},
	add(){
		const key=++this.state.key;
		this.state.editList.set(key,'');
		this.forceUpdate();
	},
	removeItem(id){
		this.state.list.delete(id);
		this.forceUpdate();
	},
	removeItemEditor(id){
		this.state.editList.delete(id);
		this.forceUpdate();
	},
	render(){
		const listDOM=[];
		const editListDOM=[];
		for(let entity of this.state.list){
			listDOM.push(<Item onRemove={this.removeItem} onEdit={this.edit} key={entity[0]} id={entity[0]} value={entity[1]} />);
		}
		for(let entity of this.state.editList){
			editListDOM.push(<ItemEditor onSave={this.save} onRemove={this.removeItemEditor} key={entity[0]} id={entity[0]} value={entity[1]} />);
		}
		return<div>
			<button onClick={this.add} className="btn btn-default">Add</button>
			<ul className="list-group">
				{listDOM}
				{editListDOM}
			</ul>
		</div>
	}
});
const Item=React.createClass({
	edit(){
		this.props.onEdit(this.props.id,this.props.value);
	},
	remove(){
		this.props.onRemove(this.props.id);
	},
	render(){
		return<li className="list-group-item">{this.props.value}
			<span className="right glyphicon glyphicon-edit" onClick={this.edit}>编辑</span>
			<span className="right glyphicon glyphicon-remove" onClick={this.remove}>删除</span>
		</li>
	}
});
const ItemEditor=React.createClass({
	getInitialState(){
		return{
			value:this.props.value
		}
	},
	remove(){
		this.props.onRemove(this.props.id);
	},
	save(){
		this.props.onSave(this.props.id,this.state.value);
	},
	changeHandle(event){
		this.setState({
			value:event.target.value
		})
	},
	render(){
		return<li className="list-group-item">
		{this.props.id}
 			<input className="item-edit" onChange={this.changeHandle} value={this.state.value}/>
 			<span className="glyphicon glyphicon-share" onClick={this.save}>分享</span>
 			<span className="glyphicon glyphicon-remove" onClick={this.remove}>删除</span>
		</li>
	}
});
ReactDOM.render(
	<List/>,
	document.getElementById('container')
)
