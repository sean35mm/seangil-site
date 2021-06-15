import React from "react";
import "./Portfolio.scss";
import { makeStyles } from "@material-ui/core/styles";
import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 300,
	},
});

export default function Portfolio() {
	const classes = useStyles();
	return (
		<div className='portfolio' id='portfolio'>
			<div className='portfolio__card'>
				<Card className={classes.root}>
					<CardActionArea>
						<CardMedia component='img' alt='' height='300' image='' title='' />
						<CardContent>
							<h3>InStock</h3>
							<p>Warehouse and Inventory Management System</p>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size='small' color='primary'>
							Learn More
						</Button>
					</CardActions>
				</Card>
			</div>
			<div className='portfolio__card'>
				<Card className={classes.root}>
					<CardActionArea>
						<CardMedia component='img' alt='' height='300' image='' title='' />
						<CardContent>
							<h3>InStock</h3>
							<p>Warehouse and Inventory Management System</p>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size='small' color='primary'>
							Learn More
						</Button>
					</CardActions>
				</Card>
			</div>
			<div className='portfolio__card'>
				<Card className={classes.root}>
					<CardActionArea>
						<CardMedia component='img' alt='' height='300' image='' title='' />
						<CardContent>
							<h3>InStock</h3>
							<p>Warehouse and Inventory Management System</p>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size='small' color='primary'>
							Learn More
						</Button>
					</CardActions>
				</Card>
			</div>
		</div>
	);
}
