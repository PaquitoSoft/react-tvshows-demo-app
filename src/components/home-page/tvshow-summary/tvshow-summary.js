import React from 'react';
import {
	Card,
	CardTitle,
	CardText,
	CardActions,
	CardMenu,
	Button,
	IconButton
} from 'react-mdl';

function MovieSummary({ width = '100%'}) {
	return (
		<Card shadow={0} style={{width}}>
			<CardTitle
				style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
				Welcome
			</CardTitle>
			<CardText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Mauris sagittis pellentesque lacus eleifend lacinia...
			</CardText>
			<CardActions border>
				<Button colored>Get Started</Button>
			</CardActions>
			<CardMenu style={{color: '#fff'}}>
				<IconButton name="share" />
			</CardMenu>
		</Card>
	);
}

export default MovieSummary;
