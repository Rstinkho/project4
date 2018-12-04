import React, { Component } from 'react';
// import { Route } from  'react-router-dom'
import MainPage from './../MainPage.js'

class Land extends Component {
    render() {

        return (



                <section id="showcase">
                  <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                      <li data-target="#myCarousel" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item carousel-image-1 active">
                        <div className="container">
                          <div className="carousel-caption d-none d-sm-block text-right mb-5">
                            <h1 className="display-3">For business</h1>
                            <p className="lead">We offer you step-by-step plan writing guidance, especially
                            if you need a plan in a SBA-approved format </p>
                            <a href="#" className="btn btn-danger btn-lg">Sign Up Now</a>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item carousel-image-2">
                        <div className="container">
                          <div className="carousel-caption d-none d-sm-block text-right mb-5">
                            <h1 className="display-3">For students</h1>
                            <p className="lead"><strong>Write credible academic business plan, using the reliable templates and latest changes
                            in marketing, management, HR, finance and many other fields</strong></p>
                            <a href="#" className="btn btn-primary btn-lg">Learn More</a>
                          </div>
                        </div>
                      </div>

                    <a href="#myCarousel" data-slide="prev" className="carousel-control-prev">
                      <span className="carousel-control-prev-icon"></span>
                    </a>

                    <a href="#myCarousel" data-slide="next" className="carousel-control-next">
                      <span className="carousel-control-next-icon"></span>
                    </a>
                  </div>
                </div>


                <section id="home-icons" class="py-5">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-4 mb-4 text-center">
                        <i class="fas fa-book fa-3x mb-2"></i>
                        <h3>Up-to-date templates</h3>
                        <p>We are always follow the trends and changes in business development, so you never miss a single detail</p>
                      </div>
                      <div class="col-md-4 mb-4 text-center">
                        <i class="fas fa-comments fa-3x mb-2"></i>
                        <h3>Discuss</h3>
                        <p>Comment existing business plans or ask for an opinion others</p>
                      </div>
                      <div class="col-md-4 mb-4 text-center">
                        <i class="fas fa-arrow-alt-circle-down fa-3x mb-2"></i>
                        <h3>Download plan</h3>
                        <p>Plan can be converted to PDF format for your convinience</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4 mb-4 text-center">
                        <i class="fas fa-chart-line fa-3x mb-2"></i>
                        <h3>Modify</h3>
                        <p>Use our build-in tools like gantt-chart or financial planner to enhance the quality of your BP</p>
                      </div>
                      <div class="col-md-4 mb-4 text-center">
                        <i class="fas fa-key fa-3x mb-2"></i>
                        <h3>Privacy</h3>
                        <p>Make your business plan unavailable for public view</p>
                      </div>
                      <div class="col-md-4 mb-4 text-center">
                        <i class="fas fa-hands-helping fa-3x mb-2"></i>
                        <h3>Follow the guideline</h3>
                        <p>You can always rely on our template, and follow the tips and advices we provide during your hard work</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="home-heading" class="p-5">
                  <div class="dark-overlay">
                    <div class="row">
                      <div class="col">
                        <div class="container pt-2">
                          <h1>Are You Ready To Get Started?</h1>
                            <div>   <div className="row">
                                        <div className="col col-1 text-right"> <i class="far fa-eye fa-2x"></i> </div>
                                        <div className="col col-11"> <a href="/bplans"><div><p>I'm just curious what other people have written</p></div></a></div>
                                    </div>

                                    <div className="row">
                                    <div className="col col-1 text-right"><i class="fab fa-creative-commons-remix fa-2x"></i></div>
                                    <div className="col col-11"><a href="/reg"><div><p>I want to create something by myself</p></div></a></div>
                                    </div>
                                    <MainPage />
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="info" class="py-3">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-6 align-self-center">
                        <h3>WARNING</h3>
                        <p>The app currently in development, check <a href="https://tturchinskiy.com"><i class="far fa-hand-point-right fa-2x">here</i></a> for the updates</p>

                      </div>
                      <div class="col-md-6">
                        <img src="img/laptop.png" alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                </section>
                </section>




            )
    }
}

export default Land;