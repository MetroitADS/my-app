import React from 'react';
import "./Resume.scss"
import DownloadPDF from '../DownloadPDF';
import "./App.css"

const MainResume = ({ formData= {} ,pageData,infoData }) => {
  return (
<div class="resume-wrapper" id="resume-content">
	<section class="profile section-padding">
		<div class="container">
			<div class="picture-resume-wrapper">
        <div class="picture-resume">
        <span><img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" alt="" /></span>
        <svg version="1.1" viewBox="0 0 350 350">
  
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
    </filter>
  </defs>
  
  
<g filter="url(#goo)" >  
  
  <circle id="main_circle" class="st0" cx="171.5" cy="175.6" r="130"/>
  
  <circle id="circle" class="bubble0 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble1 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble2 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble3 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble4 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble5 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble6 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble7 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble8 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble9 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble10 st1" cx="171.5" cy="175.6" r="122.7"/>

</g>  
</svg>
      </div>
         <div class="clearfix"></div>
 </div>
      <div class="name-wrapper">
      {infoData.length > 0 ? (
      infoData.map((data, index) => (
        <React.Fragment key={index}>
          <h1>{data.first_name || "Имя"} <br/>{data.last_name || "Фамилия"}</h1>
        </React.Fragment>
      ))
    ) : (
      <><h1>Имя<br/>Фамилия</h1></>
    )}
      </div>
      <div class="clearfix"></div>
      
      <div class="contact-info clearfix">
      	<ul class="list-titles">
      		<li>Телефон</li>
      		<li>Почта</li>
      		<li>Сайт</li>
      		<li>Адрес дома</li>
      	</ul>
        <ul class="list-content ">
        {infoData.length > 0 ? (
            infoData.map((data, index) => (
                <React.Fragment key={index}>
                    <li>{data.call || "Не указано"}</li>
                    <li>{data.mail || "Не указано"}</li>
                    <li>{data.web ? (<a href={data.web} target="_blank" rel="noopener noreferrer">Сайт</a>) :("Не указано")}</li>
                    <li>{data.home || "Не указано"}</li>
                </React.Fragment>
            ))
          ) : (
              <>
                  <li>Не указано</li>
                  <li>Не указано</li>
                  <li><a href="#">janderson.com</a></li>
                  <li>Не указано</li>
              </>
          )}
        </ul>
      </div>
      {infoData.map((data, index) => (
        <div>
            <div class="contact-presentation"> 
            </div>
            <div class="contact-social clearfix">
              <ul class="list-titles"> 
              {data.social_network1web && isValidURL(data.social_network1web) ? (
                <li>
                  <a href={data.social_network1web} target="_blank" rel="noopener noreferrer">
                    {new URL(data.social_network1web).hostname.split('.')[1]}  {}
                  </a>
                </li>
              ) : null}

              {data.social_network2web && isValidURL(data.social_network2web) ? (
                <li>
                  <a href={data.social_network2web} target="_blank" rel="noopener noreferrer">
                    {new URL(data.social_network2web).hostname.split('.')[1]}  {}
                  </a>
                </li>
              ) : null}

              {data.social_network3web && isValidURL(data.social_network3web) ? (
                <li>
                  <a href={data.social_network3web} target="_blank" rel="noopener noreferrer">
                    {new URL(data.social_network3web).hostname.split('.')[1]}  {}
                  </a>
                </li>
              ) : null}
              </ul>
            </div>
          </div>
          ))}

		</div>
	</section>
  
  <section class="experience section-padding">
  	<div class="container">
  		<h3 class="experience-title">Опыт</h3>
      {pageData.map((data, index) => (
      <div class="experience-wrapper">
      	<div class="company-wrapper clearfix">
      		<div class="experience-title">{data.company || "Компания"}</div>
          <div class="time">{data.to_year || "Год"}</div> 
      	</div>
        
        <div class="job-wrapper clearfix">
        	<div class="experience-title">{data.position || "Позиция"} </div> 
          <div class="company-tere">
          <p>{data.description ? data.description.split('\n').map((line, index) => <span key={index}>{line}<br /></span>) : "Описание"}</p> 
          </div>
        </div>
      </div>
      ))}
      {formData.map((data, index) => (
        <div class="experience-wrapper">
          <h3 class="experience-title">{data.opit || "Что-то"}</h3> 
           <div class="company-tere2">
           <p>{data.description ? data.description.split('\n').map((line, index) => <span key={index}>{line}<br /></span>) : "Описание"}</p>  
          </div>
        </div>
      ))}
  	</div>
  </section>
  
  <div class="clearfix"></div>
</div>
  );
};
function isValidURL(string) {
  try {
      new URL(string);
      return true;
  } catch (_) {
      return false;  
  }
}
export default MainResume;
