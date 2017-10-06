import React, { Component } from "react";

class PhotoComponent extends Component {
    render() {
        return (
            <div className="photo-wrapper">
                <div className="row">
                    <div className="col-md-3">
                        <div>
                            <img src="http://i.dailymail.co.uk/i/pix/2017/09/04/06/43E2926200000578-4849844-MJ_Johnson-a-81_1504504493122.jpg" alt="Warcraft peon" />
                        </div>
                            <h1> Orc peon &nbsp;&nbsp;</h1>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <img src="http://i.dailymail.co.uk/i/pix/2017/09/04/06/43E2B1D600000578-4849844-Norbert_Topf-a-77_1504504493037.jpg" alt="Santa with attitude" />
                        </div>
                            <h1> Santa with an attitude &nbsp;&nbsp;</h1>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <img src="http://i.dailymail.co.uk/i/pix/2017/09/04/06/43E2C5A300000578-4849844-A_competitor_attends_the_2017_Remington_Beard_Boss_World_Beard_M-a-79_1504504493099.jpg" alt="Elton-John on steriods" />
                        </div>
                            <h1> Elton-John on steriods &nbsp;&nbsp;</h1>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <img src="http://i.dailymail.co.uk/i/pix/2017/09/04/06/43E2CEF700000578-4849844-Jon_Alex_Bailey_left_shows_of_his_star_styled_beard_and_matching-a-95_1504504493870.jpg" alt="Stars and moons" />
                        </div>
                            <h1> Dreams of being an astronaut &nbsp;&nbsp;</h1>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <img src="http://i.dailymail.co.uk/i/pix/2017/09/04/07/43E2C39800000578-4849844-James_McMahon_left_and_John_Banks_right_pulled_out_their_best_su-a-6_1504506999352.jpg" alt="Barnum bros" />
                        </div>
                            <h1> Barnum Bros frm Ringling Ciscus &nbsp;&nbsp;</h1>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <img src="http://i.dailymail.co.uk/i/pix/2017/09/04/06/43E2C8C700000578-4849844-Nate_Johnson_Steffen_Rasile_and_Cody_Hall_competed_in_the_partia-a-85_1504504493353.jpg" alt="Three amigos" />
                        </div>
                            <h1> Three amigos: Wolverine's brother, Quad-horn and Big Wave  &nbsp;&nbsp;</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoComponent;

// <div class="container">
//     <div id="slideshow">
//         <img src="http://i.dailymail.co.uk/i/pix/2017/09/04/06/43E2926200000578-4849844-MJ_Johnson-a-81_1504504493122.jpg" alt="carousel" id="imgClickAndChange" onclick="changeImage()" />
//     </div>
// </div>
// <script>
//     let imgs = ["http://i.dailymail.co.uk/i/pix/2017/09/04/06/43E2B1D600000578-4849844-Norbert_Topf-a-77_1504504493037.jpg", "http://i.dailymail.co.uk/i/pix/2017/09/04/06/43E2C5A300000578-4849844-A_competitor_attends_the_2017_Remington_Beard_Boss_World_Beard_M-a-79_1504504493099.jpg", "http://i.dailymail.co.uk/i/pix/2017/09/04/06/43E2CEF700000578-4849844-Jon_Alex_Bailey_left_shows_of_his_star_styled_beard_and_matching-a-95_1504504493870.jpg", "http://i.dailymail.co.uk/i/pix/2017/09/04/07/43E2C39800000578-4849844-James_McMahon_left_and_John_Banks_right_pulled_out_their_best_su-a-6_1504506999352.jpg", "http://i.dailymail.co.uk/i/pix/2017/09/04/06/43E2C8C700000578-4849844-Nate_Johnson_Steffen_Rasile_and_Cody_Hall_competed_in_the_partia-a-85_1504504493353.jpg"];

//     function changeImage(dir) {
//         let img = document.getElementById("imgClickAndChange");
//         img.src = imgs[imgs.indexOf(img.src) + (dir || 1)] || imgs[dir ? imgs.length - 1 : 0];
//     }

//     document.onkeydown = function(e) {
//         e = e || window.event;
//         if (e.keyCode == '37') {
//             changeImage(-1) //left <- show Prev image
//         } else if (e.keyCode == '39') {
//             // right -> show next image
//             changeImage()
//         }
//     }
// </script>
