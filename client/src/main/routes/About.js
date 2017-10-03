import React, { Component } from "react";

class About extends Component {
    // function myFunction() {
    //     var str = "Free Web Building Tutorials!";
    //     var result = str.link("http://historycooperative.org/a-short-history-of-beard-styles/");
    //     document.getElementById("demo").innerHTML = result;
    // }
    
    render() {
        return (
            <div>
                <p>The purpose of this site is to provide a centralized location where anyone can enter various beard and or mustache competitions. You can also view pictures of past winners</p>
                <p >Beards have been malinged, revered and stylized. They add flair and masculinity to a man's appearence adding warmth in cold climates and intimidation in battle, "A beard on a man’s face creates the look of a stronger looking jaw line; this exaggeration helped them appear more intimidating."</p>
                <a href="http://historycooperative.org/a-short-history-of-beard-styles/">Follow this link for more beard history</a>
            </div>
        );
    }
}

export default About;