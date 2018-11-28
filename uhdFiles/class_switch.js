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
	  <form>\
	  <select name="CS_Classes" onchange="replace(this.value)">\
			<option value="" >Select A Class</option>\
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
	  <h1 align = "center">Tutorials for CS 3300 Object-Oriented Programming (based off the in-class textbook)</h1>\
	<br>\
	<select name = "cs_chapters" id = "cs_chapters" onchange="changeChapters(this)">\
		<option value="">Select Chapter</option>\
		<option value="CS3300 Chapter 1 Tutorial.html">Chapter 1</option>\
		<option value="CS3300 Chapter 2 Tutorial.html">Chapter 2</option>\
		<option value="CS3300 Chapter 3 Tutorial.html">Chapter 3</option>\
	</select>\
<h2> I. Chapter 1 Getting Started</h2>\
	<h3 class = "indentLv1">A. Ch1.1 Introduction to Java</h3>\
		<p class = "indentLv2">1) Running your first program</p>\
			<iframe class = "centerVid" width="720" height="480" src="https://www.youtube.com/embed/Hl-zzrqQoSE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
			<br><br><br>\
			<iframe class = "centerVid" width="720" height="480" src="https://www.youtube.com/embed/CE8UIbb_4iM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
			<br><br><br>\
			<iframe class = "centerVid" width="720" height="480" src="https://www.youtube.com/embed/SHIT5VkNrCg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
			<br><br><br><br><br><br>\
		<p class = "indentLv2">2) Byte-Code and the Java Virtual Machine</p>\
			<iframe class = "centerVid" width="720" height="480" src="https://www.youtube.com/embed/G1ubVOl9IBw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
			<br><br><br><br><br><br>\
	<h3 class = "indentLv1">B. Ch1.2 Expressions and Assignment Statements</h3>\
			<iframe class = "centerVid" width="720" height="480" src="https://www.youtube.com/embed/gtQJXzi3Yns" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
	<h3 class = "indentLv1">C. Ch1.3 The Class String</h3>\
			<iframe class = "centerVid" width="720" height="480" src="https://www.youtube.com/embed/yXtoSrGDkuc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
	<h3 class = "indentLv1">D. Ch1.4 Program Style</h3>\
			<iframe class = "centerVid" width="720" height="480" src="https://www.youtube.com/embed/mw7k70c4OHw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
		<br>\
	  <form></form>\
	<footer><ul id= "botNav">\
		<li><a href="https://www.uhd.edu/administration/university-relations/social-media/Pages/default.aspx" target="_blank">Social</a></li>\
		<li><a href="https://www.uhd.edu/advancement/Pages/give-to-uhd.aspx" target="_blank">Give</a></li>\
		<li><a href="https://www.uhd.edu/myuhd/Pages/default.aspx" target="_blank">myUHD</a></li>\
		<li><a href="https://www.uhd.edu/admissions/apply/Pages/admissions-application.aspx" target="_blank">Apply</a></li>\
	    <li><a href="https://www.uhd.edu/admissions/Pages/admissions-request.aspx" target="_blank">Request Info</a></li>\
	  </ul>\
	  <span style= "float: left; text-shadow: 1px 1px 1px #b3b3b3">\
		<h4>\
		Made by:\
		<a href = "Christopher Felicitas\' Personal Webpage/Personal Webpage.html">Christopher Felicitas</a>,\
		<a href = "(folder name)/(personal webpage name).html">Luis Moreno</a>, \
		<a href = "(folder name)/(personal webpage name).html">Carlos Parlour</a>, \
		<a href = "LuisMoreno_FirstWebPage/luisWEBPAGE.html">Luis Moreno</a>,\
		<a href = "BrandonWebPageDocs/index.html">Brandon Toppass</a>\
		</h4>\
	  </span>\
    </footer>\
  </body></html>';
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var cs1410 = '<html lang = "en"><head><meta charset = "utf-8" name="viewport" content="width=device-width, initial-scale=1.0">\
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
</ul>    \
<h1 style="color:black"> <!--<strong class="uhdblue">UH</strong><strong class="uhdred">D</strong>--> Computer Science External Help Page </h1>\
</header>    \
<br><br><br>\
<h2>CS 1410 Intro to Computer Science with C++</h2>\
<p class= "centerText">Credits: 4 Class: 4 Lab: 0<br>\
Prerequisite(s): Credit or enrollment in MATH 1404 or MATH 1505 or MATH 1306; and placement in ENG 1301 or above.<br>\
History, nature and uses of the computer; algorithms; number systems; information representation; and organization, with \
an overview of computer hardware and software, computing systems and major applications. Ethical and societal issues are\
discussed. An introduction to high-level languages with an emphasis on programming in C++. Control statements, subprograms,\
data types, arrays, and streams. Closed (supervised) laboratories are conducted on: an introduction to Microsoft Windows, and\
a C++ programming environment; appropriate programming exercises emphasizing top-down design methodology and simple and structured\
data types; and key topics of the discipline and areas of application. Designed as a first course for majors in Computer Science and\
Mathematics (COSC 1436)\
</p>\
<form>\
<select name="cClass" onchange="replace(this.value)">\
<option value="" >Select A Class</option>\
<option value="cs1410" >1410 Intro to CS with C++</option>\
<option value="cs2301" >2301 Intro to Computer Organization</option>\
<option value="cs2302" >2302 Digital Logic</option>\
<option value="cs2410" >2410 Data Structures and Algorithms</option>\
<option value="cs3300" >3300 Object-Oriented Programming</option>\
<option value="cs3304" >3304 Data and Info Structures</option>\
<option value="cs3306" >3306 Intro to Theory of Computation</option>\
<option value="cs3321" >3321 Software Engineering</option>\
<option value="cs4300" >4300 Web Programming</option>\
<option value="cs4303" >4303 Programming Language Concepts</option>\
<option value="cs4315" >4315 Operating Systems</option>\
<option value="cs4318" >4318 Database Systems</option>\
</select>\
</form>\
<iframe width="720" height="480" src="https://www.youtube.com/embed/watch?v=tvC1WCdV1XU&list=PLAE85DE8440AA6B83">\
</iframe>\
<iframe width="720" height="480" src="https://www.youtube.com/embed/watch?v=QsKkG9gWxF4&list=PLnyCMitOFXWa4Byr4FlPVD8SV8fSSVcC1">\
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
		<h4>\
		Made by:\
		<a href = "Christopher Felicitas\' Personal Webpage/Personal Webpage.html">Christopher Felicitas</a>,\
		<a href = "(folder name)/(personal webpage name).html">Luis Moreno</a>, \
		<a href = "(folder name)/(personal webpage name).html">Carlos Parlour</a>, \
		<a href = "BrandonWebPageDocs/index.html">Brandon Toppass</a>\
		</h4>\
	  </span>\
</footer>\
</body></html>'
//---------------------------------------------------------------------------------------------------------------------------------------------------------//
var cs2301 = '<html lang = "en"><head><meta charset = "utf-8" name="viewport" content="width=device-width, initial-scale=1.0">\
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
</ul>    \
<h1 style="color:black"> <!--<strong class="uhdblue">UH</strong><strong class="uhdred">D</strong>--> Computer Science External Help Page </h1>\
</header>    \
<br><br><br>\
<h2>CS 2301 Intro to Computer Organization</h2>\
<p class= "centerText">Credits: 3 Class: 3 Lab: 0<br>\
Prerequisite(s): Grade of C or better in CS 1410 or CS 1408.<br>\
Organization of general-purpose computers; data representation and arithmetic;\
instruction sets architectures and addressing modes; memory hierarchies, input/output\
and storage, and alternative architecture. (COSC 2425)\
</p>\
<form>\
<select name="cClass" onchange="replace(this.value)">\
<option value="" >Select A Class</option>\
<option value="cs1410" >1410 Intro to CS with C++</option>\
<option value="cs2301" >2301 Intro to Computer Organization</option>\
<option value="cs2302" >2302 Digital Logic</option>\
<option value="cs2410" >2410 Data Structures and Algorithms</option>\
<option value="cs3300" >3300 Object-Oriented Programming</option>\
<option value="cs3304" >3304 Data and Info Structures</option>\
<option value="cs3306" >3306 Intro to Theory of Computation</option>\
<option value="cs3321" >3321 Software Engineering</option>\
<option value="cs4300" >4300 Web Programming</option>\
<option value="cs4303" >4303 Programming Language Concepts</option>\
<option value="cs4315" >4315 Operating Systems</option>\
<option value="cs4318" >4318 Database Systems</option>\
</select>\
</form>\
<iframe width="720" height="480" src="https://www.youtube.com/embed/watch?v=tvC1WCdV1XU&list=PLAE85DE8440AA6B83">\
</iframe>\
<iframe width="720" height="480" src="https://www.youtube.com/embed/watch?v=QsKkG9gWxF4&list=PLnyCMitOFXWa4Byr4FlPVD8SV8fSSVcC1">\
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
		<h4>\
		Made by:\
		<a href = "Christopher Felicitas\' Personal Webpage/Personal Webpage.html">Christopher Felicitas</a>,\
		<a href = "(folder name)/(personal webpage name).html">Luis Moreno</a>, \
		<a href = "(folder name)/(personal webpage name).html">Carlos Parlour</a>, \
		<a href = "BrandonWebPageDocs/index.html">Brandon Toppass</a>\
		</h4>\
	  </span>\
</footer>\
</body></html>';
//---------------------------------------------------------------------------------------------------------------------------------------------------------//
var cs2302='<html lang = "en"><head><meta charset = "utf-8" name="viewport" content="width=device-width, initial-scale=1.0">\
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
</ul>    \
<h1 style="color:black"> <!--<strong class="uhdblue">UH</strong><strong class="uhdred">D</strong>--> Computer Science External Help Page </h1>\
</header>    \
<br><br><br>\
<h2>CS 2302 Digital Logic</h2>\
<p class= "centerText">Credits: 3 Class: 3 Lab: 0<br>\
Prerequisite(s): Grade of C or better in CS 1410 and MATH 2305.<br>\
Boolean expressions and theorems. Analysis and synthesis of combinational and sequential \
switching networks; optimization methods using random logic gates, multiplexers, decoders, \
registers, counters, and programmable logic devices. Exercises involve the design and simulation of \
digital circuits. Emphasis is on the use of Boolean Algebra, Truth Table, and Karnaugh Maps in the \
design, simulation, simplification, and testing of digital circuits.\
</p>\
<form>\
<select name="cClass" onchange="replace(this.value)">\
<option value="" >Select A Class</option>\
<option value="cs1410" >1410 Intro to CS with C++</option>\
<option value="cs2301" >2301 Intro to Computer Organization</option>\
<option value="cs2302" >2302 Digital Logic</option>\
<option value="cs2410" >2410 Data Structures and Algorithms</option>\
<option value="cs3300" >3300 Object-Oriented Programming</option>\
<option value="cs3304" >3304 Data and Info Structures</option>\
<option value="cs3306" >3306 Intro to Theory of Computation</option>\
<option value="cs3321" >3321 Software Engineering</option>\
<option value="cs4300" >4300 Web Programming</option>\
<option value="cs4303" >4303 Programming Language Concepts</option>\
<option value="cs4315" >4315 Operating Systems</option>\
<option value="cs4318" >4318 Database Systems</option>\
</select>\
</form>\
<iframe width="720" height="480" src="https://www.youtube.com/embed/watch?v=tvC1WCdV1XU&list=PLAE85DE8440AA6B83">\
</iframe>\
<iframe width="720" height="480" src="https://www.youtube.com/embed/watch?v=QsKkG9gWxF4&list=PLnyCMitOFXWa4Byr4FlPVD8SV8fSSVcC1">\
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
		<h4>\
		Made by:\
		<a href = "Christopher Felicitas\' Personal Webpage/Personal Webpage.html">Christopher Felicitas</a>,\
		<a href = "(folder name)/(personal webpage name).html">Luis Moreno</a>, \
		<a href = "(folder name)/(personal webpage name).html">Carlos Parlour</a>, \
		<a href = "BrandonWebPageDocs/index.html">Brandon Toppass</a>\
		</h4>\
	  </span>\
</footer>\
</body></html>';
//---------------------------------------------------------------------------------------------------------------------------------------------------------//
var cs2410='<html lang = "en"><head><meta charset = "utf-8" name="viewport" content="width=device-width, initial-scale=1.0">\
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
</ul>    \
<h1 style="color:black"> <!--<strong class="uhdblue">UH</strong><strong class="uhdred">D</strong>--> Computer Science External Help Page </h1>\
</header>    \
<br><br><br>\
<h2>CS 2410 CS II-Introduction to Data Structures and Algorithms</h2>\
<p class= "centerText">Credits: 4 Class: 4 Lab: 0<br>\
Prerequisite(s): Grade of C or better in CS 1410 and credit or enrollment in MATH 2401.<br>\
Arrays, records (C++ structs), classes and data abstraction, object-oriented software development, pointers, dynamic data structures, linked structures, elementary and searching and sorting algorithms, recursion, an introduction to algorithm complexity analysis. (COSC 1437);\
</p>\
<form>\
<select name="cClass" onchange="replace(this.value)">\
<option value="" >Select A Class</option>\
<option value="cs1410" >1410 Intro to CS with C++</option>\
<option value="cs2301" >2301 Intro to Computer Organization</option>\
<option value="cs2302" >2302 Digital Logic</option>\
<option value="cs2410" >2410 Data Structures and Algorithms</option>\
<option value="cs3300" >3300 Object-Oriented Programming</option>\
<option value="cs3304" >3304 Data and Info Structures</option>\
<option value="cs3306" >3306 Intro to Theory of Computation</option>\
<option value="cs3321" >3321 Software Engineering</option>\
<option value="cs4300" >4300 Web Programming</option>\
<option value="cs4303" >4303 Programming Language Concepts</option>\
<option value="cs4315" >4315 Operating Systems</option>\
<option value="cs4318" >4318 Database Systems</option>\
</select>\
</form>\
<iframe width="720" height="480" src="https://www.youtube.com/embed/watch?v=16yji8At2UI&index=2&list=PLF541C2C1F671AEF6&ab_channel=thenewboston">\
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
		<h4>\
		Made by:\
		<a href = "Christopher Felicitas\' Personal Webpage/Personal Webpage.html">Christopher Felicitas</a>,\
		<a href = "(folder name)/(personal webpage name).html">Luis Moreno</a>, \
		<a href = "(folder name)/(personal webpage name).html">Carlos Parlour</a>, \
		<a href = "BrandonWebPageDocs/index.html">Brandon Toppass</a>\
		</h4>\
	  </span>\
</footer>\
</body></html>';
//---------------------------------------------------------------------------------------------------------------------------------------------------------//
var cs3304='<html lang = "en"><head><meta charset = "utf-8" name="viewport" content="width=device-width, initial-scale=1.0">\
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
</ul>    \
<h1 style="color:black"> <!--<strong class="uhdblue">UH</strong><strong class="uhdred">D</strong>--> Computer Science External Help Page </h1>\
</header>    \
<br><br><br>\
<h2>CS 3304 Data and Information Structures</h2>\
<p class= "centerText">Credits: 3 Class: 3 Lab: 0<br>\
Prerequisite(s): Grade of C or better in CS 2410 and MATH 2405.<br>\
Development of methods for organizing and processing data sets. Types of data structures analyzed include linear lists, stacks, queues, trees, and graphs. Algorithm analysis methods are used throughout to analyze the various data structures and algorithm design alternatives.\
</p>\
<form>\
<select name="cClass" onchange="replace(this.value)">\
<option value="" >Select A Class</option>\
<option value="cs1410" >1410 Intro to CS with C++</option>\
<option value="cs2301" >2301 Intro to Computer Organization</option>\
<option value="cs2302" >2302 Digital Logic</option>\
<option value="cs2410" >2410 Data Structures and Algorithms</option>\
<option value="cs3300" >3300 Object-Oriented Programming</option>\
<option value="cs3304" >3304 Data and Info Structures</option>\
<option value="cs3306" >3306 Intro to Theory of Computation</option>\
<option value="cs3321" >3321 Software Engineering</option>\
<option value="cs4300" >4300 Web Programming</option>\
<option value="cs4303" >4303 Programming Language Concepts</option>\
<option value="cs4315" >4315 Operating Systems</option>\
<option value="cs4318" >4318 Database Systems</option>\
</select>\
</form>\
<iframe width="720" height="480" src="https://www.youtube.com/embed/watch?v=xfgcEjCd9as&list=PL318A5EB91569E29A&ab_channel=programminghelporg">\
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
		<h4>\
		Made by:\
		<a href = "Christopher Felicitas\' Personal Webpage/Personal Webpage.html">Christopher Felicitas</a>,\
		<a href = "(folder name)/(personal webpage name).html">Luis Moreno</a>, \
		<a href = "(folder name)/(personal webpage name).html">Carlos Parlour</a>, \
		<a href = "BrandonWebPageDocs/index.html">Brandon Toppass</a>\
		</h4>\
	  </span>\
</footer>\
</body></html>';
//---------------------------------------------------------------------------------------------------------------------------------------------------------//
var cs3306='<html lang = "en"><head><meta charset = "utf-8" name="viewport" content="width=device-width, initial-scale=1.0">\
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
</ul>    \
<h1 style="color:black"> <!--<strong class="uhdblue">UH</strong><strong class="uhdred">D</strong>--> Computer Science External Help Page </h1>\
</header>    \
<br><br><br>\
<h2>CS 3306 Introduction to Theory of Computation</h2>\
<p class= "centerText">Credits: 3 Class: 3 Lab: 0<br>\
Prerequisite(s): Grade of C or better in CS 1410 and MATH 2405.<br>\
An introduction to the modern theory of computing. Topics selected from abstract algebra, finite automata, regular expressions, regular languages, pushdown automata, context-free languages, and Turing machines. The capabilities and limitations of abstract computing devices are investigated from a theoretical perspective.;\
</p>\
<form>\
<select name="cClass" onchange="replace(this.value)">\
<option value="" >Select A Class</option>\
<option value="cs1410" >1410 Intro to CS with C++</option>\
<option value="cs2301" >2301 Intro to Computer Organization</option>\
<option value="cs2302" >2302 Digital Logic</option>\
<option value="cs2410" >2410 Data Structures and Algorithms</option>\
<option value="cs3300" >3300 Object-Oriented Programming</option>\
<option value="cs3304" >3304 Data and Info Structures</option>\
<option value="cs3306" >3306 Intro to Theory of Computation</option>\
<option value="cs3321" >3321 Software Engineering</option>\
<option value="cs4300" >4300 Web Programming</option>\
<option value="cs4303" >4303 Programming Language Concepts</option>\
<option value="cs4315" >4315 Operating Systems</option>\
<option value="cs4318" >4318 Database Systems</option>\
</select>\
</form>\
<iframe width="720" height="480" src="https://www.youtube.com/embed/watch?v=58N2N7zJGrQ&index=1&list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev&ab_channel=NesoAcademy">\
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
		<h4>\
		Made by:\
		<a href = "Christopher Felicitas\' Personal Webpage/Personal Webpage.html">Christopher Felicitas</a>,\
		<a href = "(folder name)/(personal webpage name).html">Luis Moreno</a>, \
		<a href = "(folder name)/(personal webpage name).html">Carlos Parlour</a>, \
		<a href = "BrandonWebPageDocs/index.html">Brandon Toppass</a>\
		</h4>\
	  </span>\
</footer>\
</body></html>';
//---------------------------------------------------------------------------------------------------------------------------------------------------------//
var cs3321='<html lang = "en"><head><meta charset = "utf-8" name="viewport" content="width=device-width, initial-scale=1.0">\
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
</ul>    \
<h1 style="color:black"> <!--<strong class="uhdblue">UH</strong><strong class="uhdred">D</strong>--> Computer Science External Help Page </h1>\
</header>    \
<br><br><br>\
<h2>CS 3321 Software Engineering</h2>\
<p class= "centerText">Credits: 3 Class: 3 Lab: 0<br>\
To provide students with the theoretical and practical understanding of the development of large software systems using the Unified Modeling Language (UML). The theoretical component is supported with readings, lectures, and class discussions. The practical components are reinforced with the development of a large-scale group project involving all phases of the software development life-cycle.<br>\
</p>\
<form>\
<select name="cClass" onchange="replace(this.value)">\
<option value="" >Select A Class</option>\
<option value="cs1410" >1410 Intro to CS with C++</option>\
<option value="cs2301" >2301 Intro to Computer Organization</option>\
<option value="cs2302" >2302 Digital Logic</option>\
<option value="cs2410" >2410 Data Structures and Algorithms</option>\
<option value="cs3300" >3300 Object-Oriented Programming</option>\
<option value="cs3304" >3304 Data and Info Structures</option>\
<option value="cs3306" >3306 Intro to Theory of Computation</option>\
<option value="cs3321" >3321 Software Engineering</option>\
<option value="cs4300" >4300 Web Programming</option>\
<option value="cs4303" >4303 Programming Language Concepts</option>\
<option value="cs4315" >4315 Operating Systems</option>\
<option value="cs4318" >4318 Database Systems</option>\
</select>\
</form>\
<iframe width="720" height="480" src="https://www.youtube.com/embed/watch?v=WxkP5KR_Emk&list=PLrjkTql3jnm9b5nr-ggx7Pt1G4UAHeFlJ&ab_channel=Education4u">\
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
		<h4>\
		Made by:\
		<a href = "Christopher Felicitas\' Personal Webpage/Personal Webpage.html">Christopher Felicitas</a>,\
		<a href = "(folder name)/(personal webpage name).html">Luis Moreno</a>, \
		<a href = "(folder name)/(personal webpage name).html">Carlos Parlour</a>, \
		<a href = "BrandonWebPageDocs/index.html">Brandon Toppass</a>\
		</h4>\
	  </span>\
</footer>\
</body></html>';
//---------------------------------------------------------------------------------------------------------------------------------------------------------//
var cs4303='<html lang = "en"><head><meta charset = "utf-8" name="viewport" content="width=device-width, initial-scale=1.0">\
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
</ul>    \
<h1 style="color:black"> <!--<strong class="uhdblue">UH</strong><strong class="uhdred">D</strong>--> Computer Science External Help Page </h1>\
</header>    \
<br><br><br>\
<h2>CS 4303 Programming Language Concepts</h2>\
<p class= "centerText">Credits: 3 Class: 3 Lab: 0<br>\
Prerequisite(s): Grade of C or better in CS 3304 or CS 3306.<br>\
This course provides students with a foundation in the concepts and implementation of modern programming languages. It also covers imperative, functional, logic, and object-oriented programming paradigms. Programming assignments and/or closed labs will be conducted for syntax and semantics analysis and different paradigms.;\
</p>\
<form>\
<select name="cClass" onchange="replace(this.value)">\
<option value="" >Select A Class</option>\
<option value="cs1410" >1410 Intro to CS with C++</option>\
<option value="cs2301" >2301 Intro to Computer Organization</option>\
<option value="cs2302" >2302 Digital Logic</option>\
<option value="cs2410" >2410 Data Structures and Algorithms</option>\
<option value="cs3300" >3300 Object-Oriented Programming</option>\
<option value="cs3304" >3304 Data and Info Structures</option>\
<option value="cs3306" >3306 Intro to Theory of Computation</option>\
<option value="cs3321" >3321 Software Engineering</option>\
<option value="cs4300" >4300 Web Programming</option>\
<option value="cs4303" >4303 Programming Language Concepts</option>\
<option value="cs4315" >4315 Operating Systems</option>\
<option value="cs4318" >4318 Database Systems</option>\
</select>\
</form>\
<iframe width="720" height="480" src="https://www.youtube.com/embed/">\
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
		<h4>\
		Made by:\
		<a href = "Christopher Felicitas\' Personal Webpage/Personal Webpage.html">Christopher Felicitas</a>,\
		<a href = "(folder name)/(personal webpage name).html">Luis Moreno</a>, \
		<a href = "(folder name)/(personal webpage name).html">Carlos Parlour</a>, \
		<a href = "BrandonWebPageDocs/index.html">Brandon Toppass</a>\
		</h4>\
	  </span>\
</footer>\
</body></html>';
//---------------------------------------------------------------------------------------------------------------------------------------------------------//
var cs4315='<html lang = "en"><head><meta charset = "utf-8" name="viewport" content="width=device-width, initial-scale=1.0">\
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
</ul>    \
<h1 style="color:black"> <!--<strong class="uhdblue">UH</strong><strong class="uhdred">D</strong>--> Computer Science External Help Page </h1>\
</header>    \
<br><br><br>\
<h2>CS 4315 Operating Systems</h2>\
<p class= "centerText">Credits: 3 Class: 3 Lab: 0<br>\
Prerequisite(s): Grade of C or better in CS 2401, CS 2402, and CS 3304.<br>\
Basic concepts of operating systems including concurrent process management, I/O device management, process scheduling, synchronization, deadlock, and memory management. UNIX used for standard examples.;\
</p>\
<form>\
<select name="cClass" onchange="replace(this.value)">\
<option value="" >Select A Class</option>\
<option value="cs1410" >1410 Intro to CS with C++</option>\
<option value="cs2301" >2301 Intro to Computer Organization</option>\
<option value="cs2302" >2302 Digital Logic</option>\
<option value="cs2410" >2410 Data Structures and Algorithms</option>\
<option value="cs3300" >3300 Object-Oriented Programming</option>\
<option value="cs3304" >3304 Data and Info Structures</option>\
<option value="cs3306" >3306 Intro to Theory of Computation</option>\
<option value="cs3321" >3321 Software Engineering</option>\
<option value="cs4300" >4300 Web Programming</option>\
<option value="cs4303" >4303 Programming Language Concepts</option>\
<option value="cs4315" >4315 Operating Systems</option>\
<option value="cs4318" >4318 Database Systems</option>\
</select>\
</form>\
<iframe width="720" height="480" src="https://www.youtube.com/embed/watch?v=lXBOlZr9qNM&list=PLNC6lmsIySCOAP_dlmSveNgzFk6IVL-My&ab_channel=CMPT300Videos">\
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
		<h4>\
		Made by:\
		<a href = "Christopher Felicitas\' Personal Webpage/Personal Webpage.html">Christopher Felicitas</a>,\
		<a href = "(folder name)/(personal webpage name).html">Luis Moreno</a>, \
		<a href = "(folder name)/(personal webpage name).html">Carlos Parlour</a>, \
		<a href = "BrandonWebPageDocs/index.html">Brandon Toppass</a>\
		</h4>\
	  </span>\
</footer>\
</body></html>';
//---------------------------------------------------------------------------------------------------------------------------------------------------------//
var cs4318='<html lang = "en"><head><meta charset = "utf-8" name="viewport" content="width=device-width, initial-scale=1.0">\
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
</ul>    \
<h1 style="color:black"> <!--<strong class="uhdblue">UH</strong><strong class="uhdred">D</strong>--> Computer Science External Help Page </h1>\
</header>    \
<br><br><br>\
<h2>CS 4318 Database Systems</h2>\
<p class= "centerText">Credits: 3 Class: 3 Lab: 0<br>\
Prerequisite(s): Grade of C or better in CS 3304.<br>\
An introduction to the theory of database and file structures with an emphasis on general principles and algorithmic issues as well as a conceptual overview of the design, construction and maintenance of database and file processing systems. After the various models are considered, specific attention is given to advanced topics such as data integrity, optimization, and distributed environments.;\
</p>\
<form>\
<select name="cClass" onchange="replace(this.value)">\
<option value="" >Select A Class</option>\
<option value="cs1410" >1410 Intro to CS with C++</option>\
<option value="cs2301" >2301 Intro to Computer Organization</option>\
<option value="cs2302" >2302 Digital Logic</option>\
<option value="cs2410" >2410 Data Structures and Algorithms</option>\
<option value="cs3300" >3300 Object-Oriented Programming</option>\
<option value="cs3304" >3304 Data and Info Structures</option>\
<option value="cs3306" >3306 Intro to Theory of Computation</option>\
<option value="cs3321" >3321 Software Engineering</option>\
<option value="cs4300" >4300 Web Programming</option>\
<option value="cs4303" >4303 Programming Language Concepts</option>\
<option value="cs4315" >4315 Operating Systems</option>\
<option value="cs4318" >4318 Database Systems</option>\
</select>\
</form>\
<iframe width="560" height="315" src="https://www.youtube.com/embed/4Z9KEBexzcM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\
<form></form>\
<footer><ul id= "botNav">\
<li><a href="https://www.uhd.edu/administration/university-relations/social-media/Pages/default.aspx" target="_blank">Social</a></li>\
<li><a href="https://www.uhd.edu/advancement/Pages/give-to-uhd.aspx" target="_blank">Give</a></li>\
<li><a href="https://www.uhd.edu/myuhd/Pages/default.aspx" target="_blank">myUHD</a></li>\
<li><a href="https://www.uhd.edu/admissions/apply/Pages/admissions-application.aspx" target="_blank">Apply</a></li>\
<li><a href="https://www.uhd.edu/admissions/Pages/admissions-request.aspx" target="_blank">Request Info</a></li>\
</ul>\
<span style= "float: left; text-shadow: 1px 1px 1px #b3b3b3">\
		<h4>\
		Made by:\
		<a href = "Christopher Felicitas\' Personal Webpage/Personal Webpage.html">Christopher Felicitas</a>,\
		<a href = "(folder name)/(personal webpage name).html">Luis Moreno</a>, \
		<a href = "(folder name)/(personal webpage name).html">Carlos Parlour</a>, \
		<a href = "BrandonWebPageDocs/index.html">Brandon Toppass</a>\
		</h4>\
	  </span>\
</footer>\
</body></html>';
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

function replace(csClass){
	if (csClass==""){
		return;
	}else if(csClass=="cs3300"){
		document.open();
		document.write(cs3300);
		document.close();
	}else if(csClass=="cs1410"){
		document.open();
		document.write(cs1410);
		document.close();
	}else if(csClass=="cs2301"){
		document.open();
		document.write(cs2301);
		document.close();
	}else if(csClass=="cs2302"){
		document.open();
		document.write(cs2302);
		document.close();
	}else if(csClass=="cs2410"){
        document.open();
        document.write(cs2410);
        document.close();
    }else if(csClass=="cs3300"){
        document.open();
        document.write(cs3300);
        document.close();
    }else if(csClass=="cs3304"){
        document.open();
        document.write(cs3304);
        document.close();
    }else if(csClass=="cs3306"){
        document.open();
        document.write(cs3306);
        document.close();
    }else if(csClass=="cs3321"){
        document.open();
        document.write(cs3321);
        document.close();
    }else if(csClass=="cs4300"){
        document.open();
        document.write(cs4300);
        document.close();
    }else if(csClass=="cs4303"){
        document.open();
        document.write(cs4303);
        document.close();
    }else if(csClass=="cs4315"){
        document.open();
        document.write(cs4315);
        document.close();
    }else if(csClass=="cs4318"){
        document.open();
        document.write(cs4318);
        document.close();	
	}
}

//Open selected CS3300 chapter on the same page
function changeChapters(cs_chapter){
	window.open(cs_chapter.value, "_self");
}