import React, { Component } from 'react'
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import Dialog from 'react-md/lib/Dialogs';

class Modal extends Component {
	constructor(props) {
	  super(props);

	  this.state = { visible: false };

		this.openDialog = this.openDialog.bind(this)
		this.closeDialog = this.closeDialog.bind(this)

	}

	openDialog = () => {
	  this.setState({ visible: true });
	};

	closeDialog = () => {
	  this.setState({ visible: false });
	};

	render(){
		const { visible } = this.state;

		const items = [
		  'Single line text goes here',
		  'Two line wrapped text goes here making it wrap to next line',
		  'Single line text goes here',
		  'Three line wrapped text goes here making it wrap to the next line and continues longer to be here',
		].map((primaryText, i) => (
		  <ListItem key={i} onClick={this.closeDialog} primaryText={primaryText} />
		));

		return (
			<div className = 'modal-container'>  
				<button onClick={this.openDialog}> Modals </button>
				<Dialog
				  id="simpleDialogExample"
				  visible={visible}
				  title="Simple Title"
				  onHide={this.closeDialog}
				>
				  <List>
				    what is this shit{items}
				  </List>
				</Dialog>
			</div>
			)
	}
}

export default Modal