import React from 'react'
import singleProjectImg from "../assets/images/projects/single-project.jpg"
import singleProject1 from "../assets/images/projects/single-project1.jpg"
import singleProject2 from "../assets/images/projects/single-project2.jpg"
import singleProject3 from "../assets/images/projects/single-project3.jpg"
import singleProject4 from "../assets/images/projects/single-project4.jpg"

const SingleProject = () => {
    return (
        <div class="single-project-page-design">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center pb-30">
                        <p>BRANDING - BENTO STUDIO</p>
                        <h1>Beautiful design for brand
                            new Business</h1>
                    </div>
                </div>
            </div>
            <div class="single-project-image">
                <img src={singleProjectImg} alt="image" />
            </div>
            <div class="container pt-30">
                <div class="row">
                    <div class="col-lg-4">
                        {/* <!-- START SINGLE LEFT DESIGN AREA --> */}
                        <div class="single-project-page-left wow fadeInUp delay-0-2s">
                            <div class="single-info">
                                <p>Year</p>
                                <h3>2024</h3>
                            </div>
                            <div class="single-info">
                                <p>Client</p>
                                <h3>Bento Studio</h3>
                            </div>
                            <div class="single-info">
                                <p>Services</p>
                                <h3>Web Design</h3>
                            </div>
                            <div class="single-info">
                                <p>Project</p>
                                <h3>Creative</h3>
                            </div>
                        </div>
                        {/* <!-- / END SINGLE LEFT DESIGN AREA --> */}
                    </div>
                    {/* <!-- START SINGLE RIGHT DESIGN AREA --> */}
                    <div class="col-lg-8">
                        <div class="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>
                                Description
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo.</p>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sourc consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                        </div>
                    </div>
                    {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
                </div>
                {/* <!-- START SINGLE PAGE GALLERY DESIGN AREA --> */}
                <div class="row pt-30">
                    <div class="col-lg-6">
                        <div class="single-image wow fadeInUp delay-0-2s">
                            <img src={singleProject1} alt="gallery" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="single-image wow fadeInUp delay-0-4s">
                            <img src={singleProject2} alt="gallery" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="single-image wow fadeInUp delay-0-6s">
                            <img src={singleProject3} alt="gallery" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="single-image wow fadeInUp delay-0-8s">
                            <img src={singleProject4} alt="gallery" />
                        </div>
                    </div>
                </div>
                {/* <!--  / END SINGLE PAGE GALLERY DESIGN AREA --> */}
            </div>
        </div>
    )
}

export default SingleProject