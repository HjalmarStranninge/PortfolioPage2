import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <section className="home">
                <div className="home-content">
                    <h1>Hi, I'm Hjalmar Stranninge</h1>
                    <h3>Fullstack Developer</h3>
                    <p>Passionate about web development, I specialize in building intuitive and scalable digital solutions. With
                        a focus on
                        creativity and problem-solving, I strive to deliver impactful results.
                    </p>
                    <div className="button-box">
                        <a href="#">Download CV</a>
                        <a href="#contact-form">Get In Touch</a>
                    </div>

                    <div id="contact-form" className="modal">
                        <div className="modal-content">
                            <a href="#" className="close-btn">&times;</a>
                            <div className="modal-content-left">
                                <img id="modal-img" src="src/assets/Contact2.svg" alt="" />
                            </div>
                            <div className="modal-content-right">
                                <form action="/" method="post" className="modal-form" id="form">
                                    <h1 id="contact-header">Get in touch with me!</h1>
                                    <div className="form-validation">
                                        <p className="form-header">Name</p>
                                        <input type="text" className="modal-input" id="name" name="name"
                                            placeholder="Enter your name" />
                                    </div>
                                    <div className="form-validation">
                                        <p className="form-header">Email</p>
                                        <input type="email" className="modal-input" id="email" name="email"
                                            placeholder="Enter your email" />
                                    </div>
                                    <div className="form-validation">
                                        <p className="form-header">Message</p>
                                        <textarea className="modal-message" id="message" name="message"
                                            placeholder="Enter your message"></textarea>
                                    </div>
                                    <input type="submit" className="modal-input-btn" value="Submit" />

                                </form>
                            </div>
                        </div>
                    </div>



                </div>

            </section>
        </>
    )
}

export default HomePage