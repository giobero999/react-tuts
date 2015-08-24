var Badge = React.createClass({
	render:function(){
		return(
			<button>
				{this.props.title} - {this.props.number}
			</button>
			)
	}
});	

var Form = React.createClass({
	render:function(){
		return(
				<div>
					<Badge title={this.props.title}  number={this.props.number}  />
				</div>
			)
	}
});
var options={
	title='inbox',
	number=5
}
React.createElement(Form, options);

React.render(Form, document.body);