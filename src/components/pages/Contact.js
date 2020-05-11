import React from "react";
import Header from '../Header';


function Contact() {
    return (
        <div>
            <Header value="Contact" />

            <form>
                <ul>
                    <li >
                        <label for="name">Name</label> <br></br>
                        <input type="text" id="name" name="name" placeholder="John Smith"
                            required="required">
                        </input>
                    </li>
                    <li>
                        <label for="email">Email</label> <br></br>
                        <input type="email" id="email" name="email"
                            placeholder="example@gmail.com" required="required">
                        </input>
                    </li>
                    <li>
                        <label for="message">Message</label> <br></br>
                        <textarea id="message" name="message" required="required"></textarea>
                    </li>
                </ul >
            </form >


        </div >
    );
}

export default Contact;
