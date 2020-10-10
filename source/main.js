
@keyframes seq-preloader {
  50% {
    opacity: 1;
  }
  
  100% {
    opacity: 0;
  }
}

.seq-preloader {
  background: white;
  visibility: visible;
  opacity: 1;
  position: absolute;
  z-index: 99999999;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.seq-preloader.seq-preloaded {
  opacity: 0;
  visibility: hidden;
  transition: visibility 0s .5s, opacity .5s;
}

.seq-preload-indicator {
  overflow: visible;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.seq-preload-circle {
  display: inline-block;
  height: 12px;
  width: 12px;
  fill: #7a7a7a;
  opacity: 0;
  animation: seq-preloader 1.25s infinite;
}

.seq-preload-circle-2 {
  animation-delay: .15s;
}

.seq-preload-circle-3 {
  animation-delay: .3s;
}

.seq-preload-indicator-fallback {
  width: 42px;
  overflow: visible;
}

.seq-preload-indicator-fallback .seq-preload-circle {
  width: 8px;
  height:8px;
  background-color: #f4f4f4;
  border-radius: 100%;
  opacity: 1;
  display: inline-block;
  vertical-align: middle;
}

.seq-preload-indicator-fallback .seq-preload-circle-2 {
  margin-left: 3px;
  margin-right: 3px;
  width: 12px;
  height: 12px;
}

.seq-preload-indicator-fallback .seq-preload-circle-3 {
  width: 16px;
  height: 16px;
}


/* MAIN CSS */

@-webkit-keyframes fill {
  0% {
    width: 0%;
    height: 1px;
  }
  50% {
    width: 100%;
    height: 1px;
  }
  100% {
    width: 100%;
    height: 100%;
    background: #fff;
  }
}
@keyframes fill {
  0% {
    width: 0%;
    height: 1px;
  }
  50% {
    width: 100%;
    height: 1px;
  }
  100% {
    width: 100%;
    height: 100%;
    background: #fff;
  }
}
@-webkit-keyframes fillColour {
  0% {
    color: #fff;
  }
  50% {
    color: #fff;
  }
  100% {
    color: #333;
  }
}
@keyframes fillColour {
  0% {
    color: #fff;
  }
  50% {
    color: #fff;
  }
  100% {
    color: #333;
  }
}
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}

html {
	overflow: hidden;
}

body {
  overflow: hidden;
  font-size: 100%;
}

nav {
	top: 15%;
  text-align: center;
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  z-index: 100;
  height: 90%;
  left: 0;
  width: 15%;
  font-weight: 300;
  font-size: 1rem;
}
nav em {
	font-style: normal;
	font-size: 13px;
	text-transform: uppercase;
	display: block;
	margin-top: 15px;
	color: #fff;
}

nav ul li a {
	text-align: center;
}

nav ul {
	position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
	text-align: left;
	list-style-type: none;
	height: 70%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
	-ms-flex-pack: distribute;
  justify-content: space-around;
}
nav ul li {
	text-align: center;
	margin: 5px 0px;
}
nav a, nav a:visited, nav a:active {
  color: #fff;
}
nav a {
	text-decoration: none!important;
	display: inline-block;
	width: 140px;
	padding: 15px 0px;
	position: relative;
	z-index: 0;
	transition: all .5s;
}
nav a.active {
  background-color: rgba(0,0,0,0.8);
}
nav a::before {
  content: "";
  position: absolute;
  height: 0%;
  width: 0%;
  bottom: 0;
  left: 0;
  opacity: 1;
  z-index: -1;
}
.logo {
	margin-top: 0px;
  top: 0;
  left: 0;
  z-index: 999999;
  position: fixed;
 	display: inline-block;
  text-align: center;
	background-color: #faf5b2;
	height: 15%;
	width: 15%;
}
.logo h1 {
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 900;
  color: #111;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}
.logo h2 {
  display: none;
}
.slides {
  width: 500vw;
  height: 100vh;
  -webkit-transition: -webkit-transform 0.8s ease;
  transition: -webkit-transform 0.8s ease;
  transition: transform 0.8s ease;
  transition: transform 0.8s ease, -webkit-transform 0.8s ease;
}
.slides .slide {
  height: 100vh;
  width: 100vw;
  float: left;
  text-align: center;
  background-size: cover;
}
.slides .slide .content {
  overflow-y: scroll;
  position: relative;
  width: 80%;
  height: 80%;
  left: 20%;
  top: 10%;
}
.content::-webkit-scrollbar {
  display: none!important;
  opacity: 0!important;
  visibility: hidden!important;
}
/* Add a thumb */
.content::-webkit-scrollbar-thumb {
  display: none!important;
  opacity: 0!important;
  visibility: hidden!important;
}
.slides .slide {
  background-position: center center;
  background-size: cover;
  background-position: fixed;
}
.slides .slide:nth-child(1) {

}
.slides .slide:nth-child(2) {
  background-image: url(../images/about-bg.jpg);
  background-position: fixed;
}
.slides .slide:nth-child(3) {
  background-image: url(../images/gallery-bg.jpg);
  background-position: fixed;
}
.slides .slide:nth-child(4) {
  background-image: url(../images/contact-bg.jpg);
  background-position: fixed;
}

/* Slide 1 Stlye */
#slider-wrapper{
  max-width: 100%;
  width: 100%;
  height: 100%;
  position: relative;
}
#image-slider {
  width: auto;
  height: auto;
  position: relative;
  overflow: hidden;
  margin: auto;
  display: block;
}
#image-slider ul {
  margin-bottom: 0;
  width: 100%;
  height: 100vh;
  position: relative;
}
#image-slider ul li {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height:100%; 
}
#image-slider ul li {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
}
#image-slider ul li:nth-child(1) {
  background-image: url(../images/full-bg-01.jpg);
}
#image-slider ul li:nth-child(2) {
  background-image: url(../images/full-bg-02.jpg);
}
#image-slider ul li:nth-child(3) {
  background-image: url(../images/full-bg-03.jpg);
}
#image-slider ul li.active-img{
  left: 0;
}
#thumbnail {
  position: absolute;
  z-index: 99999;
  bottom: 30px;
  right: 30px;
}
#thumbnail ul {
  padding: 0px;
  margin: 0px;
}
#thumbnail ul li {
  display: inline-block;
  max-width: 120px;
  max-height: 120px;
  margin-left: 30px;
  cursor: pointer;
  border: 4px solid transparent;
  transition: all 0.5s;
}
#thumbnail ul li.active {
  border: 5px solid #faf5b2;
}
#thumbnail ul li img {
  max-width: 100%;
  overflow: hidden;
}
.slide-caption {
  text-align: right;
  right: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.slide-caption h6 {
  margin-top: 0px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
}
.slide-caption h2 {
  margin-top: 0px;
  font-size: 60px;
  text-transform: uppercase;
  font-weight: 900;
  color: #fff;
}




/* Slide 2 Style */
.second-content {
	top: 180%!important;
	transform: translateY(-180%);
}
#tabs {
  float: right;
  margin-right: 0px;
}
#tabs ul {
  margin: 0;
  padding: 0;
  float: left;
}
#tabs ul li {
  margin-top: 5px;
  margin-bottom: 25px;
  display: block;
  background-color: transparent;
}
#tabs ul li:last-child {
  margin-bottom: 0px;
}
#tabs ul li a {
  display: block;
  cursor: pointer;
  outline: 0;
  border: none;
  color: #6a6a6a;
  text-decoration: none;
  text-transform: uppercase;
}
#tabs ul li span {
  text-align: center; 
  background-color: transparent;
  border: 3px solid #fff;
  color: #fff;
  width: 90px;
  height: 90px;
  font-size: 32px;
  line-height: 84px;
  border-radius: 50%;
}
#tabs ul .ui-tabs-active span {
  background: #faf5b2;
  border: #faf5b2;
  line-height: 90px;
  border-bottom: none;
}
#tabs ul .ui-tabs-active a {
  color: #000;
}
#tabs ul .ui-tabs-active span {
  color: #1e1e1e;
}
.tabs-content {
  margin-left: 60px;
  width: 585px;
  text-align: left;
  display: inline-block;
  background: #fff;
  margin-right: 30px;
  padding: 60px;
}
.tabs-content h2 {
  font-size: 29px;
  text-transform: uppercase;
  font-weight: 900;
  color: #1e1e1e;
  margin-top: 0px;
}
.tabs-content span {
  font-size: 15px;
  color: #7a7a7a;
  text-transform: uppercase;
}
.tabs-content p {
  font-size: 14px;
  color: #7a7a7a;
  margin-top: 30px;
  margin-bottom: 0px;
}



/* Slide 3 Style */
.third-content {
	top: 120%!important;
	transform: translateY(-120%);
}
.third-slide a {
  text-decoration: none;
}
.featured-item {
  transition: all 0.5s;
  text-align: left;
}
.featured-item img {
  width: 100%;
}
.featured-item .down-content {
  background-color: #fff;
  border: 5px solid #faf5b2;
  padding: 15px;
}
.featured-item h4 {
  margin-top: 0px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 900;
  color: #1e1e1e;
  transition: all 0.5s;
}
.featured-item h6 {
  color: #1e1e1e;
  font-size: 14px;
  font-weight: 900;
  margin-bottom: 0px;
}
.owl-dots {
  text-align: center;
  margin-top: 30px;
}
.owl-dots .owl-dot {
  outline: none;
  display: inline-block;
}
.owl-dots .active span {
  background-color: #faf5b2!important;
}
.owl-dots .owl-dot span {
  background-color: #fff;
  width: 12px;
  height: 12px;
  display: inline-block;
  margin: 0px 5px;
  outline: none;
  cursor: pointer;
}



/* Slide 4 Style */
.fourth-content {
	top: 140%!important;
  height: 100%;
	transform: translateY(-140%);
}
#contact {
  text-align: center;
  margin: 0 auto;
  max-width: 750px;
  margin-bottom: 100px;
  padding: 40px;
  background-color: rgba(0,0,0,0.9);
}
#contact h2 {
  font-size: 29px;
  text-transform: uppercase;
  font-weight: 900;
  color: #fff;
  margin-top: 0px;
  margin-bottom: 50px;
}
#contact input,
#contact textarea {
  padding-left: 15px;
  background-color: rgba(0,0,0,0.1);
  border: 1px solid #fff;
  border-radius: 0px;
  height: 40px;
  font-size: 14px;
  color: #fff;
  margin-bottom: 30px;
}
#contact input:focus,
#contact textarea:focus {
  color: #fff;
  outline: none;
  box-shadow: none;
  border: 1px solid rgba(250,245,178,1);
  background-color: rgba(0,0,0,0.1);
}
#contact textarea {
  height: 160px;
  padding: 15px;
}
#contact button {
  border: 2px solid #fff;
  font-size: 15px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  background-color: transparent;
  height: 44px;
  line-height: 40px;
  display: inline-block;
  padding: 0px 20px;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;
}
#contact button:hover {
  background-color: #faf5b2;
  border-color: #faf5b2;
  color: #1e1e1e;
}




/* Responsive Style */
@media (max-width: 991px) {

  .slides .slide .content {
	width: 100%;
	height: 90%;
	left: 0;
  }
  .second-content {
	top: 250%!important;
	transform: translateY(-250%);
  }
  .third-content {
	top: 140%!important;
	transform: translateY(-140%);
  }
  .fourth-content {
	top: 220%!important;
	transform: translateY(-220%);
  }
  .logo h1 {
    display: none;
  }
  .logo h2 {
  	margin-top: 0px;
    line-height: 100px;
    height: 100px;
    width: 15vw;
    top: 0;
    left: 0;
    z-index: 999999;
    position: fixed;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 900;
    color: #111;
    display: inline-block;
    text-align: center;
    background-color: #faf5b2;
  }
  nav {
    top: 0vh;
    height: 100px;
    width: 85vw;
    margin-left: 15vw;
  }
  nav ul {
    flex-direction: row;
  }
  nav ul li {
    display: inline;
    margin: 0px;
  }
  nav ul li img {
	width: 35%;
  }
  nav ul li em {
    display: none;
  }
  nav a {
  	text-align: center;
	  width: 60px;
	  height: 60px;
    line-height: 30px;
    display: inline-block;
  }
  .second-slide {
    top: 140px;
  }
  .slide-caption h2 {
  	font-size: 48px;
  }
  .tabs-content {
    width: auto;
    text-align: center;
    margin: 0px 30px;
    padding: 20px;
  }
  .tabs-content p {
    margin-top: 20px;
  }
  #tabs ul li {
    display: inline-block;
    margin: 0px 10px;
  }
  #tabs ul {
    float: none;
    margin-bottom: 30px;
    width: 100%;
    text-align: center;
  }
  #thumbnail ul li {
    max-width: 80px;
    max-height: 80px;
    margin-left: 10px;
  }
  .slide-caption {
    padding-left: 30px;
  }
  #tabs ul li span {
    width: 60px;
    height: 60px;
    font-size: 22px;
    line-height: 54px;
  }
  #tabs ul .ui-tabs-active span {
    line-height: 60px;
  }
  .featured-item {
    padding: 30px 15px;
  }
  .owl-dots {
    margin-top: 10px;
    padding-bottom: 30px;
  }
  .tabs-content h2 {
    font-size: 21px;
  }
  .third-slide {
    text-align: center;
    margin: 0px;
  }
  .fourth-slide {
    margin-left: 0;
    top: 0;
    transform: translateY(0%);
    margin-top: 140px;
  }
  .contact-form {
    padding: 20px;
  }
  .contact-form h2 {
    font-size: 29px;
    text-transform: uppercase;
    font-weight: 900;
    color: #fff;
    margin-top: 0px;
    margin-bottom: 20px;
  }

}
