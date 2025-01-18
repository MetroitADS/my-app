import React from 'react';
import html2pdf from 'html2pdf.js';

const DownloadPDF = ({ contentId }) => {
    const generatePDF = () => {
        const element = document.getElementById(contentId);
        if (!element) {
            console.error("Element not found!");
            return;
        }
        const options = {
            filename:     'resume.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 3 },
            jsPDF:        { unit: 'px', format: [1500, 1000], orientation: 'landscape' }
        };
        html2pdf()
            .from(element)
            .set(options)
            .toPdf()
            .get('pdf')
            .then((pdf) => {
                const totalPages = pdf.internal.getNumberOfPages();
                if (totalPages > 1) {
                    pdf.deletePage(2); 
                }
                pdf.save();
            });
    };
    return (
        <div className="button-wrapper" style={{ textAlign: 'center', margin: '4px 0' }}>
            <button className="outline-hover-button" onClick={generatePDF} style={{ padding: '10px 4px', fontSize: '16px' }}>
                Сохранить в PDF
            </button>
        </div>
    );
};

export default DownloadPDF;
