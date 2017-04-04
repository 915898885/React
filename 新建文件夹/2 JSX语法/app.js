const Item=React.createClass({
	render(){
		return<li>
			one two three!!! Item
		</li>
	}
})
const bool=false;
const result=[];
if(bool){//复杂的运算在外层写
	result.push(<Item/>);
	result.push(<Item/>);
}else{
	result.push(<h1>111</h1>)
}
// ReactDOM.render(//jsx语法   abc为自定义属性  //支持三元运算不支持if复杂运算
// 		<ul style={ {backgroundColor:'red'} } abc="123">
//		{result}
// 		{bool?<Item />:<h1>My name is h1</h1>}
// 		<Item />
// 		</ul>,
// 		document.getElementById('container')
// )

// ReactDOM.render(<h1>title</h1>,document.getElementById('container'));
// 翻译为javascript如下 1.执行类型2.指定属性3.设置子元素
//-webkit-
//-ms-
//正确前缀 ms Webkit其他首字母都为大写

if(bool){//复杂的运算在外层写
	result.push(React.createElement(Item));
	result.push(React.createElement(Item));
}else{
	result.push(React.createElement('h1',null,'222'))
}
ReactDOM.render(//javascript语法
	React.createElement('ul',
		{style:{backgroundColor:'yellow'},abc:123},
		[
		// bool ? React.createElement(Item):React.createElement('h1',null,'my name is h1'),
		result,
		React.createElement(Item),
		React.createElement(Item)
		]),
	document.getElementById('container')
);