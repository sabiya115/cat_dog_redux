const reducer=(prevState,action)=>{
	console.log("hello from reducer");
	var nextState=Object.assign({},prevState);
	if(prevState=== undefined)
	{
		nextState={
			cat:{likesCount:0,result:"",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gRqfGF8AOysFCbPj7FQEkvPD7EJxficJ3hG3jAnKHqk7OSnDww"},
			dog:{likesCount:0,result:"",imageUrl:"https://www.what-dog.net/Images/faces2/scroll0015.jpg"}
		};
		console.log(nextState);
		return nextState;
	}
	switch(action.type){
	case "LIKE":
		console.log("inside like");
		if(action.category==="CAT"){
			nextState.cat={
				likesCount:prevState.cat.likesCount+1,
				result: prevState.cat.result,
				imageUrl:prevState.cat.imageUrl
			};
		}
		else{
			nextState.dog={likesCount:prevState.dog.likesCount+1,result:prevState.dog.result,imageUrl:prevState.dog.imageUrl};
		}
		console.log(nextState);
		return nextState;

	case "DISLIKE":
		console.log("inside dislike");
		if(action.category==="CAT"){
			nextState.cat={
				likesCount:prevState.cat.likesCount-1,
				result: prevState.cat.result,
				imageUrl:prevState.cat.imageUrl
			};
		}
		else{
			nextState.dog={
				likesCount:prevState.dog.likesCount-1,
				result:prevState.dog.result,
				imageUrl:prevState.dog.imageUrl
			};
		}
		console.log(nextState);
		return nextState;
	case "SHOW_WINNER":
		var catLikesCount=prevState.cat.likesCount;
		var dogLikesCount=prevState.dog.likesCount;
		var catResult="TIE";
		var dogResult="TIE";
		if(catLikesCount > dogLikesCount) {
			catResult="WINNER";
			dogResult="LOSER";
		}
		else if(dogLikesCount > catLikesCount){
			catResult="LOSER";
			dogResult="WINNER";
		}

		nextState.cat={likesCount:prevState.cat.likesCount,result:catResult,imageUrl:prevState.cat.imageUrl};
		nextState.dog={likesCount:prevState.dog.likesCount,result:dogResult,imageUrl:prevState.dog.imageUrl};
		return nextState;
	case "START_OVER":
		nextState.cat={likesCount:0,result:"",imageUrl:""};
		nextState.dog={likesCount:0,result:"",imageUrl:""};
		return nextState;
	case "UPDATE_IMAGE":
		if(action.category==="CAT")
		{
			nextState.cat={likesCount:prevState.cat.likesCount,result:prevState.cat.result,imageUrl:action.imageUrl};
		}
		else{
			nextState.dog={likesCount:prevState.dog.likesCount,result:prevState.dog.result,imageUrl:action.imageUrl};
		}
		return nextState;
	default:
		return nextState;

	}
}
export default reducer;