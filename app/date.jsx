import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {Button, Modal, ModalTrigger} from 'amazeui-react';

const loadingModal = (
	<Modal title="正在加载" closeViaDimmer={true}>
		正在连接到outlook日历, 马上就好..
	</Modal>
);

const DatePage = React.createClass({
	getInitialState() {
		return {showModal: true};
	},
	closeModal(){
		this.setState({showModal:false});
		console.log(this.state.showModal);
	},
	componentDidMount(){
		this.interval = setInterval(this.closeModal, 2000);
	},
	componentWillUnmount() {
		clearInterval(this.interval);
	},
	render(){
		return(
			<div>
				<Link to="/"><Button amStyle="primary" style={{position:"absolute", right:0, width:330}}>回首页</Button></Link>
				<iframe 
					src="https://outlook.live.com/owa//calendar/8d120968-ff3c-488e-a036-2d0056de74cb/8888d70a-7b67-4096-9ed9-a1d732e362e4/cid-820FF0510D3252E0/index.html" 
					width={window.screen.width}
					height={window.screen.height}
				/>	
				<ModalTrigger
		          modal={loadingModal}
		          show={this.state.showModal}
		          onClose={()=>this.setState({showModal:false})}
		        />
			</div>
		)
	}
});

export default DatePage;