import React from 'react';
import { jsPDF } from 'jspdf';
import Button from '@material-ui/core/Button';
import { callAddFont } from '../../assets/fonts/DejaVuSans-normal'; // Adjust the path if necessary

const DownloadButtonForm = ({ formData ,pageData}) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Call the font adding function with the correct context
    callAddFont.call(doc); 

    doc.setFont('DejaVuSans');

    let verticalOffset = 10;

    formData.forEach((data, index) => {
      doc.text(`Форма ${index + 1}`, 10, verticalOffset);
      verticalOffset += 10;

      doc.text(`Имя: ${data.first_name || ''}`, 10, verticalOffset);
      verticalOffset += 10;
      doc.text(`Фамилия: ${data.last_name || ''}`, 10, verticalOffset);
      verticalOffset += 10;
      doc.text(`Заголовок: ${data.title || ''}`, 10, verticalOffset);
      verticalOffset += 10;
      doc.text(`Фотопотом: ${data.photopotom || ''}`, 10, verticalOffset);
      verticalOffset += 10;
      doc.text(`Адресс: ${data.adress || ''}`, 10, verticalOffset);
      verticalOffset += 10;
      doc.text(`Номер телефона: ${data.phone_number || ''}`, 10, verticalOffset);
      verticalOffset += 10;
      doc.text(`Описание: ${data.description || ''}`, 10, verticalOffset);
      verticalOffset += 10;
      doc.text(`Email: ${data.email || ''}`, 10, verticalOffset);
      verticalOffset += 20;
    });  
    pageData.forEach((data, index) => {
      doc.text(`Форма ${index + 1}`, 60, verticalOffset);
      verticalOffset += 10;
      doc.text(`позиция: ${data.position || ''}`, 60, verticalOffset);
      verticalOffset += 10;
      doc.text(`Компания: ${data.company || ''}`, 60, verticalOffset);
      verticalOffset += 10;
      doc.text(`Город: ${data.cty || ''}`, 60, verticalOffset);
      verticalOffset += 10;
      doc.text(`С: ${data.from_year || ''}`, 60, verticalOffset);
      verticalOffset += 10;
      doc.text(`До: ${data.to_year || ''}`, 60, verticalOffset);
      verticalOffset += 10;
    });

    doc.save('form-data.pdf');
  };

  return (
    <Button variant="contained" color="primary" onClick={generatePDF}>
      Скачать PDF
    </Button>
  );
};

export default DownloadButtonForm;
