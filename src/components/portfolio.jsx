import React from "react";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

import keeper_add from "../img/keeper/keeper_add.png";
import keeper_home from "../img/keeper/keeper_home.png";
import keeper_icon from "../img/keeper/keeper_icon.jpg";
import keeper_all_white from "../img/keeper/keeper_all_white.png";
import keeper_all from "../img/keeper/keeper_all.png";
import keeper_login from "../img/keeper/keeper_login.png";
import keeper_search from "../img/keeper/keeper_search.png";
import keeper_info from "../img/keeper/keeper_info.png";

import do_square from "../img/do/do_squareish.png";
import do_stacked from "../img/do/do_stacked.png";
import do_triplets from "../img/do/do_triplets.png";
import do_red_yellow from "../img/do/do_red_yellow.png";
import do_green_timer from "../img/do/do_green_timer.png";
import do_green_msg from "../img/do/do_green_msg.png";
import do_blue_msg from "../img/do/do_blue_msg.png";
import do_blue_red from "../img/do/do_blue_red.png";
import do_red from "../img/do/do_red.png";
import do_yellow_msg from "../img/do/do_yellow_msg.png";
import do_purple_msg from "../img/do/do_purple_msg.png";
import do_desc from "../img/do/do_description.png";

import time_info from "../img/timetabler/time_info.png";
import time_mock_home from "../img/timetabler/time_mock_home.png";
import time_desc from "../img/timetabler/time_desc.png";
import time_sett_sql from "../img/timetabler/time_settings_sql.png";
import time_ui_table from "../img/timetabler/time_ui_table.png";
import time_dash_home from "../img/timetabler/time_dash_home.png";

import backstage_components from "../img/backstage/components.png";
import backstage_config from "../img/backstage/config&publish.png";
import backstage_swcatalog from "../img/backstage/swcatalog.png";
import backstage_templates from "../img/backstage/templates.png";
import backstage_logo_words from "../img/backstage/backstage_logo_words.png";

import stars_intro from "../img/react-stars/intro2.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Some of my favourite projects.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={time_desc} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={time_mock_home} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Timetabler</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            School administration system and Genetic Algorithm timetabler in Java, JavaFX & SQL
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={time_mock_home}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={time_ui_table}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={time_dash_home}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={time_sett_sql}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={keeper_info} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={keeper_all_white} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Keeper</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            A password storage app in Flutter
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={keeper_all_white}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={keeper_login}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={keeper_home}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={keeper_add}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={keeper_search}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={backstage_templates} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={backstage_logo_words} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Backstage for SailPoint</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            A centralized management and templating system for SailPoint's cloud microservices
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={backstage_config}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={backstage_swcatalog}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={backstage_components}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
          
          <div className="row">
          <div className="col-md-4">
              <div className="work-box">
                <a href={do_desc} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={do_square} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">DO:</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            An elegant reminders app for Android and iOS, written in Flutter
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={do_triplets}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={do_stacked}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={do_green_timer}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={do_green_msg}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={do_blue_msg}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={do_purple_msg}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={do_yellow_msg}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href={stars_intro} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={stars_intro} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">This website</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Written in React and NodeJS, hosted on Firebase
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Portfolio;
