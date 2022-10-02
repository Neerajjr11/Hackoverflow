


<!-- PROJECT LOGO -->

<br />
<div><a  href="#top"></a><div/>

<img  src="diagrams/placeIndia.jpg"  alt="Logo" >

  

<h2 align="center">PlaceIndia</h2>

<h3 align="center">Solution for Cyscom's HackOverflow Hackathon 2022</h3>
 
   
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Neerajjr11/Hackoverflow?logo=github&style=for-the-badge)](https://github.com/Neerajjr11/Hackoverflow)
[![GitHub last commit](https://img.shields.io/github/last-commit/Neerajjr11/Hackoverflow?style=for-the-badge&logo=git)](https://github.com/Neerajjr11/Hackoverflow)
[![Languages](https://img.shields.io/github/languages/count/Neerajjr11/Hackoverflow?style=for-the-badge)](https://github.com/Neerajjr11/Hackoverflow)
</br>
  
<!-- TABLE OF CONTENTS -->
<details>
<summary>Table of Contents</summary>
<ol>
<li><a  href="#getting-started">Getting Started</a>
<ul>
<li><a  href="#problem-statement">Problem Statement</a></li>
</ul>
<ul>
<li><a  href="#about-the-problem">About The Problem</a></li>
</ul>
<ul>
<li><a  href="#our-approach">Our Approach</a></li>
</ul>
</li>
<li><a  href="#flow-diagram">Flow Diagram</a></li>
<li><a  href="#tech-architecture">Tech Architecture</a></li>
<li><a  href="#built-with">Built With</a></li>
<li><a  href="#features-and-interfaces">Features and Interfaces</a></li>
<li><a  href="#discussions">Discussions</a></li>
</ol>
</details>


<!-- GETTING STARTED -->
##  Getting Started
###  Problem Statement
* Colleges in India don't have a central database regarding campus placement in technical and business institutes and universities.
* By mapping and collating the placement details from throughout the county, the percentage of unemployability, the average salary and benefits, and other details can be identified in various fields of education.
* Help the policy makers to come out with appropriate solutions through framing of policies, based on data from this database, for tackling the unemployability in the country.
###  About The Problem
* Unemployment in India is rising at an alarming rate in India, despite several technical and business institutes booming across the country.
* Though education level in recent years has improved, skill development is still a crucial issue.
* India has the largest population of youth in the world. Around 65 per cent of the population of India is under the age of 35, so the impact of the declining financial market and the lack of job opportunities has the worst effect in India.

###  Our Approach
* Unemployment in India is rising at an alarming rate in India, despite several technical and business institutes booming across the country.
* Though education level in recent years has improved, skill development is still a crucial issue.
* India has the largest population of youth in the world. Around 65 per cent of the population of India is under the age of 35, so the impact of the declining financial market and the lack of job opportunities has the worst effect in India.
<p align="right">(<a  href="#top">back to top</a>)</p>

  
  
  

<!-- ARCHITECTURE DIAGRAMS -->

##  Flow Diagram

<img  src="diagrams/flowDiagram.jpg"  alt="flowdiagram" >

<p align="right">(<a  href="#top">back to top</a>)</p>

  

<!-- ARCHITECTURE DIAGRAMS -->

##  Tech Architecture

<img  src="diagrams/techArch.jpg"  alt="techArchitecture">

<p align="right">(<a  href="#top">back to top</a>)</p>

##  Built With
To achieve our goal, we made use of the following tools and languages,
<p align="left">
<img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg"  alt="nextjs"  width="50"  height="50"/> 
 <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg"  alt="tailwindcss"  width="50"  height="50"/> <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"  alt="mongodb"  width="50"  height="50"/>  <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg"  alt="python"  width="50"  height="50"/>  <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg"  alt="django"  width="50"  height="50"/> <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original-wordmark.svg"  alt="pytorch"  width="50"  height="50"/>  <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original-wordmark.svg"  alt="express"  width="50"  height="50"/> <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original-wordmark.svg"  alt="express"  width="50"  height="50"/>  
 <p>
 and other technologies like,
 Google Auth, NLTK, PyPdf2, SpaCy for extracting keywords from pdfs, Gensim for NLP, Recharts, Machine Learning Algorithms like Logistic Regression, SVM, Artificial Neural Networks and so on.
 <p/>
<p align="right">(<a  href="#top">back to top</a>)</p>

##  Features and Interfaces
* Data Analytics Dashboard
<img  src="diagrams/dashboard1.jpeg"  alt="dashboard1">
<img  src="diagrams/dashboard.jpeg"  alt="dashboard">
<img  src="diagrams/dashboard2.jpeg"  alt="dashboard2">

* Policy Generation
<img  src="diagrams/policygen.jpeg"  alt="policygen">

* Chat Bot for FAQs
<img  src="diagrams/chatbot.jpeg"  alt="chatbot">

* Resume Rater
<img  src="diagrams/resumerater.jpeg"  alt="resumerater">

<p align="right">(<a  href="#top">back to top</a>)</p>
<!-- DISCUSSIONS -->

##  Discussions
- Centralized Database
  Columns include,
  - gender
  - category
  - sscp (10th percentage)
  - ssc (10th board)
  - hscp (12th percentage)
  - hsc (12th board)
  - hsc_stream (12th stream science/biology/commerce)
  - batch (year of joining degree)
  - degree_p (cgpa)
  - sat (standardized test scores)
  - workex (previous work experience)
  - hosteller 
  - backlogs
  - status (placed or not)
  - package
  - year_of_placement
  - college

- Populating the dataset
  - Heatmap of dataset
  - <img  src="diagrams/heatmap.png"  alt="heatmap">
  - The heatmap gives us the correlation between two columns. Using this information we can see how if correlation increases with one feature, it decreases with the other, to maintain the correlation of the overall dataset. This is to prevent outliers and extreme variation. We do this to populate our dataset to show how scalabe our solution is.
  
- ML prediction before applying policy
  - rate of unemployability
  - <img  src="diagrams/cli1.png"  alt="beforepolicyrate">
  - Status of placements
  - <img  src="diagrams/guio1.png"  alt="beforepolicychart">

 - ML prediction after Applying Policy
   - rate of unemployability
  - <img  src="diagrams/clio2.png"  alt="afterpolicyrate">
  - Status of placements
  - <img  src="diagrams/guio2.png"  alt="afterpolicychart">

 <p align="right">(<a  href="#top">back to top</a>)</p>
  
