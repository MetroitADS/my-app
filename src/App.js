import React, { useState } from 'react';
import './App.css';
import MainForm from './components/MainForm';
import MainPage from './components/MainPage';
import MainInfo from './components/Info';
import ButtonForm from './components/Button/ButtonForm';
import ButtonPage from './components/Button/ButtonPage';
import MainResume from './components/Resume/Main';
import DownloadButton from './components/Button/DownloadButtonForm';
import ContactForm from "./components/EmailService";
import DownloadPDF from './components/DownloadPDF';
function App() {
  
  const [mainPages, setMainPages] = useState([]);
  const [mainForms, setMainForms] = useState([]);
  const [formDataList, setFormDataList] = useState([]);
  const [pageDataList, setPageDataList] = useState([]);
  const [infoData, setInfoData] = useState([]);
  const [infoIndex, setInfoIndex] = useState(0);

  const handleSetInfoData = (index, data) => {
    const newData = [...infoData];
    newData[index] = data;
    setInfoData(newData);
  };

  const addMainForm = () => {
    const newIndex = mainForms.length;
    const newFormData = {};

    setMainForms((prevMainForms) => [
      ...prevMainForms,
      <MainForm 
        key={newIndex} 
        formIndex={newIndex}
        setFormData={handleSetFormData}
        formData={formDataList[newIndex] || {}}
      />,
    ]);

    setFormDataList((prev) => [...prev, newFormData]);
  };

  const handleSetFormData = (index, data) => {
    setFormDataList(prev => {
      const newFormData = [...prev];
      newFormData[index] = { ...data };
      return newFormData;
    });
  };

  const addMainPage = () => {
    const newIndex = mainPages.length;
    const newPageData = {};

    setMainPages((prevMainPages) => [
      ...prevMainPages,
      <MainPage 
        key={newIndex} 
        pageIndex={newIndex}
        setPageData={handleSetPageData}
        pageData={pageDataList[newIndex] || {}}
      />,
    ]);

    setPageDataList((prev) => [...prev, newPageData]);
  };

  const handleSetPageData = (index, data) => {
    setPageDataList(prev => {
      const newPageData = [...prev];
      newPageData[index] = { ...data };
      return newPageData;
    });
  };

  const removeMainForm = (index) => {
    setMainForms((prevMainForms) => {
      const updatedMainForms = [...prevMainForms];
      updatedMainForms.splice(index, 1);
      return updatedMainForms;
    });
    removeFormData(index);
  };

  const removeFormData = (index) => {
    setFormDataList((prevFormData) => {
      const newFormData = [...prevFormData];
      newFormData.splice(index, 1);
      return newFormData;
    });
  };

  const removeMainPage = (index) => {
    setMainPages((prevMainPages) => {
      const updatedMainPages = [...prevMainPages];
      updatedMainPages.splice(index, 1);
      return updatedMainPages;
    });
    removePageData(index);
  };

  const removePageData = (index) => {
    setPageDataList((prevPageData) => {
      const newPageData = [...prevPageData];
      newPageData.splice(index, 1);
      return newPageData;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='main-info-container'>
          <MainInfo
            infoIndex={infoIndex}
            setInfoData={handleSetInfoData}
            infoData={infoData[infoIndex] || {}}
          />
          <DownloadPDF contentId="resume-content" />
          <ContactForm/>
        </div>
        <div className='main-page-container'>
        <h3 style={{ color: '#4A4A4A', marginBottom: '1px' }}>Опыт работы</h3>
        <p style={{ fontSize: '14px', color: '#7A7A7A', marginBottom: '1px' }}>
          Тут вы пишите где работали раньше
        </p>
          <button className="outline-hover-button-add" onClick={addMainPage}>
            Добавить
          </button>
          <button className="outline-hover-button-delete" onClick={removeMainPage}>
            Удалить
          </button>
          {mainPages.map((page, index) => (
            <div className="main-center" key={index}>
              {page}
            </div>
          ))}
        </div>
        <div className='main-form-container'>
        <h3 style={{ color: '#4A4A4A', marginBottom: '1px' }}>Добавление языков</h3>
        <p style={{ fontSize: '14px', color: '#7A7A7A', marginBottom: '1px' }}>
          Тут вы пишите программы/языки которые умеете пользоваться
        </p>
          <button className="outline-hover-button-add" onClick={addMainForm}>
            Добавить
          </button>
          <button className="outline-hover-button-delete" onClick={removeMainForm}>
            Удалить
          </button>
          {mainForms.map((form, index) => (
            <div className="main-center" key={index}>
              {form}
            </div>
          ))}
          
        </div>
      </header>
      <div className="App-Center">
        <MainResume formData={formDataList} pageData={pageDataList} infoData={infoData}/>
      </div>
    </div>
  );
}

export default App;
