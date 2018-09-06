import React, { Component } from 'react';
import Title from './../../Components/Title';
import HomeRow from './../../Components/HomeRow';
import './home.css';
import outdoors from './../../images/outdoors.jpg';
//import { TextBox } from './../Components/Textbox';
//import { TextSubmit } from './../Components/TextSubmit';

class Home extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         messages: ["This is message 1",
    //             "This is message 2",
    //             "This is message 3"
    //         ]
    //     };
    //     this.handleChatSubmit = this.handleChatSubmit.bind(this);
    // }

    componentDidMount() {
        console.log("components mounted")
    }

    // handleChatSubmit = (comment) => {
    //     document.getElementById("textInput").value = "";
    //     let newMessages = this.state.messages.concat(comment);
    //     this.setState({
    //         messages: newMessages
    //     });
    // }
    
    render() {
        return (
            <div className="homePage">

                {/* <div className="introduction">
                    <h1>this is the home page</h1>
                </div> */}
                <Title
                    title="REVIEW HUB"
                    verbiage="Real reviews, no beating around the bush">
                </Title>
                <HomeRow
                    image={outdoors}>                    
                </HomeRow>
            </div>
        );
    }
}

export default Home;