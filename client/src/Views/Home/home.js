import React, { Component } from 'react';
import Title from './../../Components/Home/Title';
import HomeRow from './../../Components/Home/HomeRow';
import TopicDescription from './../../Components/Home/TopicDescription';

import './home.css';
import outdoorsPic from './../../images/outdoors.jpg';
import bikingPic from './../../images/biking.jpg';
import backpackingPic from './../../images/backpacking.jpg';

//create the class (smart component) that represents the homepage.
class Home extends Component {
    //create and declare the state object for use throughout the application.
    constructor(props) {
        super(props);
        this.state = {
            site: "Review Hub",
            outdoorsDesc: false,
            bikingDesc: false,
            backpackingDesc: false
        };
        this.handleTopicClick = this.handleTopicClick.bind(this);
    }

    //this function will run after all of the components have been added to the site.
    componentDidMount() {
        console.log("components mounted")
    }

    //this function is ran based on a click event.
    //objective: expand the section to open up more information and provide a link to the reviews themselves.
    handleTopicClick(event) {
        //declare two variables for dynamically changing the state based on what was clicked in the component.
        let section = event.target.getAttribute('data-id');
        let clickedTopic = `${section}Desc`;
        let changeState = {};
        changeState[clickedTopic] = (this.state[clickedTopic] ? false : true);
        this.setState(
            changeState
        );
        if(this.state[clickedTopic]){
            setTimeout(function(){
                document.getElementById(section + "Info").style.display = "none";
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
                    title={this.state.site}
                    verbiage="Real reviews, no beating around the bush">
                </Title>
                <div className="divContainer">
                    <div className="description" >
                        <h2>What is {this.state.site}?</h2>
                        <p class="homeInfoTab">This is a site dedicated to giving you honest reviews of everything outdoors.
                            These are not "unbox and read the label" reviews, these are roll up the sleeves and see how the products hold up reviews.
                            Nothing is worse than relying on Johnny No Name over here to read you a product description when you are looking to spend hard earned money on equipment.
                            Rest assured, everything reviewed here has been put to the test. If you want an honest opinion from somebody that has tried it before, look no further.
                        </p>
                        <p class="homeInfoTab">Jowl shankle cupim, brisket bresaola short ribs doner tri-tip spare ribs short loin strip steak buffalo. Tenderloin shank sausage, sirloin leberkas short ribs pork belly rump meatball. Prosciutto meatball tail biltong picanha swine kielbasa strip steak meatloaf kevin drumstick ball tip ham hock burgdoggen shoulder. Chicken short ribs andouille filet mignon landjaeger. Flank cow swine, tongue prosciutto landjaeger shoulder frankfurter pork belly beef pork picanha. Pastrami shoulder cupim beef ribs burgdoggen meatball tri-tip swine flank t-bone. Pig spare ribs sausage t-bone chuck jerky turkey chicken boudin landjaeger pork loin beef buffalo.</p>
                        <h1 id="topicsTitle">Review Topics</h1>
                    </div>
                </div>
                <HomeRow
                    title="Outdoors"
                    titleClass="secTitle"
                    description={(this.state["outdoorsDesc"] ? "show" : "hide")}
                    descriptionText={
                        <TopicDescription
                            head="The Great Outdoors"
                            description={<div>
                                    <p>Do you stay awake at night just wondering where your next adventure will be?</p>
                                    <p>
                                        Well we do too. And guess what? When that happens we send our experts to wilderness to let us know first hand what we are missing.<br/>
                                        They will give you an in depth, in person, review about each particular area. Finally a good way to answer the age old question "Would this be worth my time?". Because just like you, we understand that time is precious.
                                    </p>
                                </div>}>
                        </TopicDescription>}
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
                    descriptionText={
                        <TopicDescription
                            head=""
                            description={<div>
                                    <p>A nice starry night, campfire slowly dying, you hiked 10 miles today and the view is amazing.
                                        I bet this all sounds amazing.... Except for the fact that you are freezing because your layering isn't enough!
                                    </p>
                                    <p>
                                        Let us load up our packs and put the gear to the test before you make your decisions. This isn't childs play, these are primitive wilderness' we are talking about here.
                                        From backbacks, boots, clothing, and gear we will let you know what we found good and bad about a plethora of backcountry choices.
                                    </p>
                                </div>}>
                        </TopicDescription>
                    }
                    click={this.handleTopicClick}
                    image={backpackingPic}>                    
                </HomeRow>

                <div className="test">testing</div>
            </div>
        );
    }
}

export default Home;