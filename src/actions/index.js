
function showWinner(){
	return {type:"SHOW_WINNER"};
}

function startOver(){
	return {type:"START_OVER"};
}
function like(category){
	return {type:"LIKE",category:category};
}
function dislike(category){
	return {type:"DISLIKE",category:category};
}
function updateImage(category,imageUrl){
	return {type:"UPDATE_IMAGE",category:category,imageUrl:imageUrl};
}
const actions={
	showWinner:showWinner,
	startOver:startOver,
	like:like,
	dislike:dislike,
	updateImage:updateImage


};
export default actions;