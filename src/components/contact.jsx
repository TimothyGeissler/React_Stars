import React from "react";
import imageOverlay from "../img/earth.jpg";

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Links</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Feel free to explore the links below,
                          <br />
                          Download a copy of my resumé, explore my Github page, or visit my LinkedIn profile.
                        </p>
                        {/* <!-- <ul class="list-ico">
                                <li><span class="ion-ios-location"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                                <li><span class="ion-ios-telephone"></span> (617) 557-0089</li>
                                <li><span class="ion-email"></span> contact@example.com</li>
                                </ul> --> */}
                      </div>
                      <div className="socials" tex>
                        <ul>
                          <li>
                            <a
                              href="https://drive.google.com/drive/folders/1ZdyQ3_VgnAwDLEYeRmVDNPnp_abGKrJK?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-android-download"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/TimothyGeissler"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/tim-geissler-20a469221/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
