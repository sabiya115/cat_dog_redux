
const showWinner = () => ({type:"SHOW_WINNER"});

const startOver = () =>({type:"START_OVER"});

const like = category => ({type:"LIKE",category:category});

const dislike = category => ({type:"DISLIKE",category:category});

const updateImage = (category,imageUrl) => ({type:"UPDATE_IMAGE",category:category,imageUrl:imageUrl});

const actions={
	showWinner,
	startOver,
	like,
	dislike,
	updateImage
};
export default actions;