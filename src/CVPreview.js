import React from 'react';

const CVPreview = ({ cvData }) => {const generatePDF = () => {
    window.print();
  };

  return (
    <div className='pr-14 pl-14' onClick={generatePDF}>
      <h2 className='text-center font-bold  mt-10' onClick={generatePDF}>{cvData.name}</h2>
      <p className='text-center'>{cvData.contact} / {cvData.website} / {cvData.linkedin}</p>
      <h2 className='font-bold mt-5'>Summary</h2>
      <hr className='mb-5'></hr>
      <p>{cvData.summary}</p>
      <h2 className='font-bold mt-5'>Education</h2>
      <hr className='mb-5'></hr>
      {cvData.education.map((edu, index) => (
        <div key={index}>
            <div className='grid grid-cols-2'>
                <div className='font-bold'> - {edu.school}</div>
                <div className='font-bold text-right'>{edu.startYear} - {edu.endYear}</div>
            </div>
          <p className='mb-2'>{edu.major} ( {edu.gpa} ) </p>
        </div>
      ))}
      <h2 className='font-bold mt-5'>Work Experience</h2>
      <hr className='mb-5'></hr>
      {cvData.workExperience.map((exp, index) => (
        <div key={index}>
            <div className='grid grid-cols-2'>
                <div className='font-bold'>
                - {exp.company} - {exp.position}
                </div>
                <div className='font-bold text-right'>{exp.startYear} - {exp.endYear}</div>
            </div>
          <p className='mb-2'>{exp.description}</p>
        </div>
      ))}
      
      <h2 className='font-bold mt-5'>Projects</h2>
      <hr className='mb-5'></hr>
      {cvData.projects.map((project, index) => (
        <div key={index}>
            <div className='grid grid-cols-2'>
                <div className='font-bold'>
                - {project.name}
                </div>
                <div className='font-bold text-right'>{project.year}</div>
            </div>
            <p className='mb-2'>{project.technology}</p>
        </div>
      ))}
      <h2 className='font-bold mt-5'>Certifications</h2>
      <hr className='mb-5'></hr>
      {cvData.certifications.map((cert, index) => (
        <div key={index}>
             <div className='grid grid-cols-2'>
                <div className='font-bold'>
                - {cert.name}
                </div>
                <div className='font-bold text-right'>{cert.year}</div>
            </div>
        </div>
      ))}
      <h2 className='font-bold mt-5'>Skills</h2>
      <hr className='mb-5'></hr>
      <p>{cvData.skills}</p>
    </div>
  );
};

export default CVPreview;
