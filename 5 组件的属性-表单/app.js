const Form=React.createClass({
	getInitialState(){
		return{
			inputValue:'leo',
			checkboxValue:false,
			radioValue:false
		}
	},
	changeHandle(event){

			inputValue:event.target.value//界面不会刷新

			

	},
	changeCheckbox(){
		this.setState({
			checkboxValue:!this.state.checkboxValue
		})
	},
	changeRadio(){
		this.setState({
			radioValue:!this.state.radioValue
		})
	},
	// selectHandle(event){
	// 	event.target.value
	// },
	refsss(){
		this.refs.myinput.focus()
	},
	render(){
		return<form>
			<input type='text' defaultValue="wang" ref="myinput" onChange={this.changeHandle}/>
			<button onClick={this.refsss} value="123">123</button>
			<input type='checkbox' defaultChecked/>
			<input type='radio' checked={this.state.radioValue} onChange={this.changeRadio}/>
			<select>
				<option value="A">A</option>
				<option value="B">B</option>
				<option value="C">C</option>
			</select>
			<select multiple defaultValue={['A','B']}>
				<option value="A">A</option>
				<option value="B">B</option>
				<option value="C">C</option>
			</select>
			<textarea defaultValue="ookk"></textarea>
		</form>
	}
});
ReactDOM.render(
	<Form/>,
	document.getElementById("container")
	)