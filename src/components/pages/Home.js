import React from "react";
import headshot from '../../headshot.jpg';
import Header from '../Header';

function Home() {
    return (
        <div className="row homeBody">
            <div class="col-md-12">
                <Header value="About Me" />
                <div class="row">
                    <div class="col-md-3 mt-5">
                        <img src={headshot} alt="headshot" width="267" height="240" />

                    </div>

                    <div class="col-md-9 p-5">
                        <p>My name is Ryan Kaplan. I am looking to make a big change in careers so that I can better provide for my family and love what I do.</p>

                        <p>I received a Bachelor of Business Administration degree with a concentration in marketing from the George Washington University in Washington D.C. I also have an MBA in Entrpreneurial Studies from Pace University in NYC.</p>

                        <p>For the last 8 years I have been working in marketing and sales. I believe that my intelligence, creativity, and interests are better served by a career in coding.</p>

                        <p>I am currently married, have 3 kids, and live in West Orange, NJ. In my free time I love to listen to podcasts and music, see live shows, and play video games.</p>
                    </div>

                </div>
            </div>

        </div>

    );
}

export default Home;
