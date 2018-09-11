import React, { Component } from 'react';
import Title from './../../Components/Title';
import HomeRow from './../../Components/HomeRow';
import './home.css';
import outdoorsPic from './../../images/outdoors.jpg';
import bikingPic from './../../images/biking.jpg';
import backpackingPic from './../../images/backpacking.jpg';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            outdoorsDesc: false,
            bikingDesc: false,
            backpackingDesc: false
        };
        this.handleTopicClick = this.handleTopicClick.bind(this);
    }

    componentDidMount() {
        console.log("components mounted")
    }

    handleTopicClick(event) {
        //declare two variables for dynamically changing the state based on what was clicked in the component.
        let section = event.target.id;
        console.log(event.target)
        let clickedTopic = `${section}Desc`;
        console.log(clickedTopic)
        let changeState = {};
        changeState[clickedTopic] = (this.state[clickedTopic] ? false : true);
        this.setState(
            changeState
        );
        console.log(clickedTopic)
        console.log(this.state[clickedTopic])
        if(this.state[clickedTopic]){
            setTimeout(function(){
                document.getElementById(section + "Info").style.display = "none";
                console.log(document.getElementById(section + "Info"))
			}, 1000)
        } else {
            document.getElementById(section + "Info").style.display = "block";
        }
    }
    
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
                <div className="divContainer">
                    <div className="description" >
                        <p>Bacon ipsum dolor amet ribeye shoulder frankfurter, meatloaf cow leberkas pork loin shank shankle turducken jerky drumstick. Turducken shoulder pancetta, burgdoggen drumstick ham sausage swine chicken buffalo. Flank porchetta ham, boudin fatback ground round tongue pork pastrami chuck bresaola turkey beef ribs jowl. Beef ribs meatloaf pork loin doner. Kielbasa beef picanha andouille biltong fatback buffalo. Ground round shoulder capicola frankfurter, meatloaf pastrami filet mignon turkey.</p>
                        <p>Jowl shankle cupim, brisket bresaola short ribs doner tri-tip spare ribs short loin strip steak buffalo. Tenderloin shank sausage, sirloin leberkas short ribs pork belly rump meatball. Prosciutto meatball tail biltong picanha swine kielbasa strip steak meatloaf kevin drumstick ball tip ham hock burgdoggen shoulder. Chicken short ribs andouille filet mignon landjaeger. Flank cow swine, tongue prosciutto landjaeger shoulder frankfurter pork belly beef pork picanha. Pastrami shoulder cupim beef ribs burgdoggen meatball tri-tip swine flank t-bone. Pig spare ribs sausage t-bone chuck jerky turkey chicken boudin landjaeger pork loin beef buffalo.</p>
                    </div>
                </div>

                <HomeRow
                    title="Outdoors"
                    titleClass="secTitle"
                    description={(this.state["outdoorsDesc"] ? "show" : "hide")}
                    descriptionText={
                        <div>
                            <strong>This worked</strong>
                            <p>This section is all about the outdoors and really awesome hiking places.</p>
                        </div>}
                    click={this.handleTopicClick}
                    image={outdoorsPic}
                    >
                </HomeRow>

                <HomeRow
                    title="Biking"
                    titleClass="secTitle"
                    description={(this.state.bikingDesc ? "show" : "hide")}
                    click={this.handleTopicClick}
                    image={bikingPic}>                    
                </HomeRow>

                <HomeRow
                    title="Backpacking"
                    titleClass="secTitle"
                    description={(this.state.backpackingDesc ? "show" : "hide")}
                    click={this.handleTopicClick}
                    image={backpackingPic}>                    
                </HomeRow>

                <div className="test">testing</div>
            </div>
        );
    }
}

export default Home;