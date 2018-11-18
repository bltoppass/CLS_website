//Javascript File for UHD External Help Page
var cs3300 = '<html lang = "en"><head><meta charset = "utf-8" name="viewport" content="width=device-width, initial-scale=1.0">\
	  <title>UHD CS External Help</title>\
	<link rel="stylesheet" type="text/css" href="bg_style.css">\
	<script src="class_switch.js"></script>\
  </head>\
  <body id="header">\
	<header>\
	  <div class="topimage"><!--The UHD logo to click for homepage-->\
		<a href="https://www.uhd.edu/Pages/home.aspx" target="_blank"><img src="180pxUHD.png" style= "float: left" width="180px"></a>\
	  </div>\
	  <ul id= "topNav">\
		<li><a href="https://www.uhd.edu/administration/university-relations/social-media/Pages/default.aspx" target="_blank">Social</a></li>\
		<li><a href="https://www.uhd.edu/advancement/Pages/give-to-uhd.aspx" target="_blank">Give</a></li>\
		<li><a href="https://www.uhd.edu/myuhd/Pages/default.aspx" target="_blank">myUHD</a></li>\
		<li><a href="https://www.uhd.edu/admissions/apply/Pages/admissions-application.aspx" target="_blank">Apply</a></li>\
		<li><a href="https://www.uhd.edu/admissions/Pages/admissions-request.aspx" target="_blank">Request Info</a></li>\
	  </ul>\
	  <ul id="nav">\
		<li><a href="https://www.udacity.com/" target="_blank">Udacity</a></li>\
		<li><a href="https://www.pluralsight.com/codeschool" target="_blank">Code School</a></li>\
		<li><a href="https://coderdojo.com/" target="_blank">Coder Dojo</a></li>\
		<li><a href="https://teamtreehouse.com/" target="_blank">Treehouse</a></li>\
	  </ul>	\
	  <h1 style="color:black"> <!--<strong class="uhdblue">UH</strong><strong class="uhdred">D</strong>--> Computer Science External Help Page </h1>\
	</header>	\
	  <br><br><br>\
	  <h2>CS 3300</h2>\
	  <p class= "centerText">Credits: 3 Class: 3 Lab: 0<br>\
							Prerequisite(s): Grade of C or better in CS 2410.<br>\
							Provides practical guidance on the construction of object-oriented systems. The Unified Modeling Language (UML) is used as a tool for analysis and design and the JAVA language is used for implementation. Key concepts of object-oriented programming methodology are discussed.\
	  </p>\
	  <form>\
	  <select name="cClass" onchange="replace(this.value)">\
			<option value="" >Select A Class</option>\
			<option value="cs1408" >1408 Intro to CS with Visual Basic</option>\
			<option value="cs1410" >1410 Intro to CS with C++</option>\
			<option value="cs2301" >2301 Intro to Computer Organization</option>\
			<option value="cs2302" >2302 Digital Logic</option>\
			<option value="cs2410" >2410 Data Structures and Algorithms</option>\
			<option value="cs3300" >3300 Object-Oriented Programming</option>\
			<option value="cs3304" >3304 Data and Info Structures</option>\
			<option value="cs3306" >3306 Intro to Theory of Computation</option>\
			<option value="cs3321" >3321 Software Engineering</option>\
			<option value="cs3324" >3324 Computer Network Architecture</option>\
			<option value="cs4300" >4300 Web Programming</option>\
		</select>\
	  </form>\
	  <iframe width="720" height="480" src="https://www.youtube.com/embed/watch?v=Hl-zzrqQoSE&list=PLFE2CE09D83EE3E28">\
	  </iframe>\
	  <iframe width="720" height="480" src="https://www.youtube.com/embed/watch?v=UI6lqHOVHic&list=PLnyCMitOFXWZ9oaXyPI_VsGyR-xadfLXS">\
	  </iframe>\
	  <form></form>\
	<footer><ul id= "botNav">\
		<li><a href="https://www.uhd.edu/administration/university-relations/social-media/Pages/default.aspx" target="_blank">Social</a></li>\
		<li><a href="https://www.uhd.edu/advancement/Pages/give-to-uhd.aspx" target="_blank">Give</a></li>\
		<li><a href="https://www.uhd.edu/myuhd/Pages/default.aspx" target="_blank">myUHD</a></li>\
		<li><a href="https://www.uhd.edu/admissions/apply/Pages/admissions-application.aspx" target="_blank">Apply</a></li>\
	    <li><a href="https://www.uhd.edu/admissions/Pages/admissions-request.aspx" target="_blank">Request Info</a></li>\
	  </ul>\
	  <span style= "float: left; text-shadow: 1px 1px 1px #b3b3b3">\
		<h6>Made by: Christopher Felicitas, Luis Moreno, Carlos Parlour, Brandon Toppass</h6>\
	  </span>\
    </footer>\
  </body></html>';
  var HW = 'Hello World';
//function ReplacePage(i){
	//document.open();
	//document.write(i);
	//document.close();
//}
function replace(someValue){
	if (someValue==""){
		return;
	}else if(someValue=="cs3300"){
		document.open();
		document.write(cs3300);
		document.close();
	}else if(someValue=="HW"){
		document.open();
		document.write(HW);
		document.close();
	}
}