import React from "react";
import Pet from "./PetComponent";
import axios from "axios";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import actions from "../actions/index";



var API_KEY="123456789";
var CAT_URL="http://localhost:63000/cat/?api_key=" +API_KEY;
var DOG_URL="http://localhost:63000/dog/?api_key=" +API_KEY;

class AppComponent extends React.Component
{ 
	constructor(props){
		super(props);
		this.handleShowWinnerBtnClick=this.handleShowWinnerBtnClick.bind(this);
		this.handleStartOverBtnClick=this.handleStartOverBtnClick.bind(this);
		this.handleDislikeBtnClick=this.handleDislikeBtnClick.bind(this);
		this.handleLikeBtnClick=this.handleLikeBtnClick.bind(this);
	}
	componentDidMount = () => {
		this.fetchImages();
	}
	fetchImages = () =>{
		this.getCatImageUrl();
		this.getDogImageUrl();
	}
	getCatImageUrl = () =>{
		console.log(this.props);
		axios.get(CAT_URL).then((resp) => {
			this.props.action.updateImage("CAT",resp.data.imageUrl);
			
		});
	}
	getDogImageUrl = () =>{
		axios.get(DOG_URL).then((resp) => {
			this.props.action.updateImage("DOG",resp.data.imageUrl);
			
		});
	}

	handleLikeBtnClick = event => {
		this.fetchImages();
		console.log("inside buton click");
		if(event.target.value==="Cat"){
			this.props.action.like("CAT");
			
		}
		else{
			console.log("inside else");
			this.props.action.like("DOG");
		}
      
	}
  
	handleDislikeBtnClick = event => {
		this.fetchImages();
		if(event.target.value==="Cat"){
			this.props.action.dislike("CAT");
		}
		else{
			this.props.action.dislike("DOG");
			
		}
	}
	handleShowWinnerBtnClick = () => {
		this.props.action.showWinner();
	}
	handleStartOverBtnClick = () => {
		this.fetchImages();
		this.props.action.startOver();
		
	}
	render(){
		console.log("hey");
		return(
			<div>
				<h1 style={style}>
        Welcome to Cat and Dog Cuteness Fight Game!!!
				</h1>
				<h5>{this.winner}</h5>
				<div style={{marginTop: 60, textAlign: "center"}}>
					<Pet petName='Dog' result={this.props.dog.result} petImageUrl={this.props.dog.imageUrl} likeCounts={this.props.dog.likesCount} onLikeBtnClick={this.handleLikeBtnClick} onDislikeBtnClick={this.handleDislikeBtnClick}/>
					<Pet petName='Cat' result={this.props.cat.result} petImageUrl={this.props.cat.imageUrl}  likeCounts={this.props.cat.likesCount} onLikeBtnClick={this.handleLikeBtnClick} onDislikeBtnClick={this.handleDislikeBtnClick}/>
				</div> 
				<div style={btnStyle}>
					{!this.props.dog.result && <button style={{marginRight:3}} onClick={this.handleShowWinnerBtnClick}> Show Winner</button>}
					<button onClick={this.handleStartOverBtnClick}> Start Over</button>
				</div>
			</div>
		);
	}
}
var btnStyle={
	marginTop:30,
	textAlign:"center"
};
var style = {
	textAlign: "center",
	fontSize: "2em",
	color: "rebeccapurple"
};
const mapStateToProps = state => ({
	cat: state.pet.cat,
	dog:state.pet.dog
});
const matchDispatchToProps = dispatch => ({action:bindActionCreators(actions,dispatch)});

export default connect(mapStateToProps,matchDispatchToProps)(AppComponent);