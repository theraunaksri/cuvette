
import React from 'react';
import './index.css';
import "./component/modal";
import Modal from './component/modal';




function App() {

  return (
    <div className="app">
  <header className="header">
    <img className="company-logo" src='.\image\logo.74bda650.svg' alt="Company Logo" />
    <div className="login-info">
      <img className="login-logo" src='.\image\raunaksphoto.jpg' alt="Login Logo" />
      <span className="username">Raunak Srivastava</span>
    </div>
  </header>
  <div className="horizontal-line"></div>
  <div className="vertical-line"></div>
  <div className="info-box">
  <img className="image-boxs1" src='.\image\Untitled design (8).png'alt="img" />
  <img className="image-boxs2" src='.\image\Untitled design (9).png'alt="img" />
  <img className="image-boxs3" src='.\image\Untitled design (7).png'alt="img" />
    <div className="dashboard">Dashboard</div>
    <div className="skill-test">Skill Test</div>
    <div className="internship">Internship</div>
  </div>
  <div className="skills-test">Skill Test</div>
  <div className="skills-box">
    <div className="inner-box">
      <img className="image-box" src='./image/html.png'alt="img" />
      <div className="text-box">
        <div className="text-above">Hypertext Markup Language</div>
        <div className="text-below">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</div>
      </div>
    </div>
    
  <Modal><button className="update-button">Update</button></Modal>

  

  </div>

  
  <div className="new-box">
  <div className="quick-statistics-text">Quick Statistics</div>
  <div className="part1">
  <img className="image-boxs" src='.\image\throphy.png'alt="img" />
    <div className="text1-part1">12890</div>
    <div className="text2-part1">Your Rank</div>
  </div>
  <div className="vertical-line-part1"></div>
  <div className="part2">
  <img className="image-boxs" src='.\image\images.jpeg'alt="img" />
    <div className="text1-part2">37%</div>
    <div className="text2-part2">PERCENTILE</div>
  </div>
  <div className="vertical-line-part2"></div>
  <div className="part3">
  <img className="image-boxs" src='.\image\Greentick.png'alt="img" />
    <div className="text1-part3">07 / 15</div>
    <div className="text2-part3">CORRECT ANSWERS</div>
  </div>
</div>
<div className='graph'>
<div className="comparison-text">Comparison Graph</div>
<div className="score-text"><b>You scored 37% percentile</b> which is lower than the average percentile 72% of all the engineers who took this assessment</div>
<div class="graph-3">
        <div class="outer-rect"></div>
        <div class="inner-rect"></div>
        <div class="line-1"></div>
        <div class="line-2"></div>
        <div class="line-3"></div>
        <div class="line-4"></div>
        <div class="line-5"></div>
        <div class="line-6"></div>

        <div class="group-1">
            <div class="text-1">20%</div>
        </div>
        <div class="group-2">
            <div class="text-2">40%</div>
        </div>
        <div class="group-3">
            <div class="text-3">60%</div>
        </div>
        <div class="group-4">
            <div class="text-4">80%</div>
        </div>
        <div class="text-5">100%</div>
        <div class="vector-1"></div>
        <div class="vector-2"></div>
        <div class="ellipse-1"></div>
        <div class="ellipse-2"></div>
        <div class="group-5">
            <div class="group-6">
                <div class="inner-rect-2"></div>
            </div>
            <div class="polygon-1"></div>
        </div>
        <div class="group-7">
            <div class="score-text-1">Your score</div>
            <div class="percentile-text">37% Percentile</div>
        </div>
</div>
</div>
<img className="graph-image-box" src='.\image\graph.png'alt="img" />




<div class="syllabus">
<div class="syllabus-title">Syllabus wise Analysis</div>
<div class="syllabus-text">HTML Tools, Forms, History</div>
<div class="outer-bar"></div>
<div class="inner-bar"></div>
<div class="text-80-percent">80%</div>
<div class="syllabus-text1">Tags & References in HTML</div>
<div class="outer-bar1"></div>
<div class="inner-bar1"></div>
<div class="text-60-percent">60%</div>
<div class="syllabus-text2">Tables & CSS Basics</div>
<div class="outer-bar2"></div>
<div class="inner-bar2"></div>
<div class="text-24-percent">24%</div>
<div class="syllabus-text3">Tables & CSS Basics</div>
<div class="outer-bar3"></div>
<div class="inner-bar3"></div>
<div class="text-96-percent">96%</div>
</div>
<div class="graph-2">
<div class="question-analysis">Question Analysis</div>
<div class="score-info">You scored 7 question correct out of 15. However it
still needs some improvements</div>
<div class="score-text">07/15</div>
<div class="box-2">
<img className="image-boxs4" src='.\image\Untitled design (6).png.png'alt="img" />
<div class="circle-graph"></div>
<div class="white-circle"></div>

</div>

</div>

</div>


  );
}

export default App;
