import React from 'react'
import '../App.css'

export default function Home () {
    return (
        <>           
        <div className="mainpage"> 
        <img className="mainimage" src="/images/HatchfulExport-All/logo_transparent.png"></img>
            <br></br>
            <h2>Some Skills I immersed myself into : </h2>
            <div> 
            <hr></hr>
                <ul className="skillscontainer">
                    <img className="skillsitem" src="/images/html-5.svg" alt="triangle with all three sides equal" height="87" width="100" />
                    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

                    <img className="skillsitem" src="/images/css.svg" alt="triangle with all three sides equal" height="87" width="100" />
                    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

                    <img className="skillsitem" src="/images/javascript.svg" alt="triangle with all three sides equal" height="87" width="100" />
                    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

                    <img className="skillsitem" src="/images/React-icon.svg" alt="triangle with all three sides equal" height="87" width="100" />
                    {/* WIKIPEDIA */}

                    <img className="skillsitem" src="/images/nodejs.svg" alt="triangle with all three sides equal" height="87" width="100" />
                    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

                    <img className="skillsitem" src="/images/expressjs.svg" alt="triangle with all three sides equal" height="87" width="100" />
                    {/* https://www.vectorlogo.zone/logos/expressjs/index.html */}

                    <img className="skillsitem" src="/images/mongodb.svg" alt="triangle with all three sides equal" height="87" width="100" />
                    {/* https://worldvectorlogo.com/downloaded/mongodb */}

                    <img className="skillsitem" src="/images/ruby.svg" alt="triangle with all three sides equal" height="87" width="100" />
                    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

                    <img className="skillsitem" src="/images/database.svg" alt="triangle with all three sides equal" height="87" width="100" />
                    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/phatplus" title="phatplus">phatplus</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                </ul>
            </div>
            <div className="maintext">
                <h2>Professional Experience : </h2><hr></hr>
                <h3>General Assembly -  Software Engineering Fellowship</h3>
                <h5>JUL 2020 - OCT 2020</h5>
                <br></br>
                <br></br>
                <div>
                    <li>
                        Fellowship for 12 weeks which included designing, developing, testing, debugging and troubleshooting Full Stack Apps / projects in an agile environment. 
                    </li>
                    <br></br>
                    <li>
                        Created Minesweeper Game using JQUERY.
                    </li>
                    <br></br>
                    <li>
                        Created a cryptocurrency trading app with React.
                    </li>
                    <br></br>
                </div>
                <br></br><br></br><br></br>
                <hr></hr>
                <h3>SITA, India — Team Leader</h3>
                <h5>AUG 2016 - AUG 2019</h5>
                <br></br>
                <br></br>
                <div>
                    <li>
                    Testing In-house custom software for Business Operations and improved code logic and User Interface. 
                    </li>
                    <br></br>
                    <li>
                    Strengthened relationships with 5  strategic Travel Websites based in Germany with Product and Content management.
                    </li>
                    <br></br>
                </div>
            </div>
            <hr></hr><hr></hr>
            <div className="maintext">
                <h2>Educational Experience : </h2><hr></hr>
                <h3>General Assembly -  Software Engineering Immersive</h3>
                <h5>JUL 2020 - OCT 2020</h5>
                <br></br>
                <br></br>
                <div>
                    <li>
                        Fellowship for 12 weeks which included designing, developing, testing, debugging and troubleshooting Full Stack Apps / projects in an agile environment. 
                    </li>
                    <br></br>
                    <li>
                        Created Minesweeper Game using JQUERY.
                    </li>
                    <br></br>
                    <li>
                        Created a cryptocurrency trading app with React.
                    </li>
                    <br></br>
                </div>
                <br></br><br></br><br></br>
                <hr></hr>
                <h3>IITTM, India — MBA - International Business</h3>
                <h5>AUG 2012 - AUG 2014</h5>
                <br></br>
                <br></br>
                <div>
                    <li>
                    MBA in International Business 
                    </li>
                    <br></br>                   
                </div>
                <hr></hr>
                <h3>GGSIPU, India — BBA</h3>
                <h5>AUG 2008 - AUG 2011</h5>
                <br></br>
                <br></br>
                <div>
                    <li>
                    MBA in International Business 
                    </li>
                    <br></br>                   
                </div>
            </div>
        </div>
        </>
    )
}