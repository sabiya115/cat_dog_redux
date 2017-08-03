import React from "react";

var PetComponent =function(props) {
	var disabled=false;
	var result=null;
	if(props.result!==""){
		disabled=true;
		if(props.result==="WINNER" || props.result==="TIE"){
			result= <h3 style={{color:"green"}}>{props.result} </h3>;
		}
		else if(props.result==="LOSER")
			result=<h3 style={{color:"red"}}>{props.result} </h3>;
	}
  

	return (
		<div style={compStyle}>
			{result}
			{(props.result)?
				(<h3>{props.petName} Likes : {props.likeCounts}</h3>):
				(<h3>{props.petName}</h3>)}
        
			<img style={{height:400, width:400}} src={props.petImageUrl} alt={props.petName +" Dog"} />
			<div>
				<button disabled={disabled} style={btnStyle} value={props.petName} onClick={props.onLikeBtnClick}>Like</button>
				<button disabled={disabled} style={btnStyle} value={props.petName} onClick={props.onDislikeBtnClick}>Dislike</button>
			</div>
		</div>
	);
  
  
};


var compStyle = {
	display: "inline-block",
	marginLeft: "auto",
	marginRight: "auto"
};

var btnStyle = {
	height: "25px",
	width: "70px",
	marginTop: "10px",
	marginLeft: "5px",
	marginRight: "5px"
};

export default PetComponent;