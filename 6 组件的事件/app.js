const Comp =React.createClass({
	getInitialState(){
		return{
			top:0,
			left:0
		}
	},
	keyup(event){
		switch(event.keyCode){
			case 37:
				this.setState({
					left:this.state.left-5
				});
			break;
			case 38:
				this.setState({
					top:this.state.top-5
				});
			break;
			case 39:
				this.setState({
					left:this.state.left+5
				});
			break;
			case 40:
				this.setState({
					top:this.state.top+5
				});
			break;
		}
	},
	render(){
		return<div ref={dom=>{if(dom) dom.focus()}} onKeyDown={this.keyup} style={{position:'relative',width:'450px',height:'450px',background:'yellow'}} tabIndex={1}>
			<div style={{top:this.state.top+'px',left:this.state.left+'px',position:'absolute',width:"45px",height:"45px",background:'red'}}></div>
		</div>
	}
});
ReactDOM.render(<Comp/>,document.getElementById('container'))