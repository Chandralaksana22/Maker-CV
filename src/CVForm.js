import React, { useState } from 'react';

const CVForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [website, setWebsite] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [summary, setSummary] = useState('');
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [skills, setSkills] = useState('');

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleWorkExperienceChange = (index, field, value) => {
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience[index][field] = value;
    setWorkExperience(updatedWorkExperience);
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const handleCertificationChange = (index, field, value) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index][field] = value;
    setCertifications(updatedCertifications);
  };

  const handleAddEducation = () => {
    setEducation([...education, { school: '', major: '', startYear: '', endYear: '', gpa: '' }]);
  };

  const handleAddWorkExperience = () => {
    setWorkExperience([...workExperience, { company: '', position: '', description: '', startYear: '', endYear: '' }]);
  };

  const handleAddProject = () => {
    setProjects([...projects, { name: '', technology: '', year: '' }]);
  };

  const handleAddCertification = () => {
    setCertifications([...certifications, { name: '', year: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name,
      contact,
      website,
      linkedin,
      summary,
      education,
      workExperience,
      projects,
      certifications,
      skills,
    });
  };

  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Unlock Your Career Potential with a Powerful ATS CV Builder - Your Gateway to Success!</p>
            </div>
        </div>
        </div>
        
      <h1 className='font-bold text-center mt-5'>CV Builder</h1>
      <form onSubmit={handleSubmit} className="container mx-auto p-5">
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">What is your name?</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full " value={name} onChange={(e) => setName(e.target.value)} required  />
        </div>
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Contact</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full " value={contact} onChange={(e) => setContact(e.target.value)} required  />
        </div>
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Website</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full " value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">LinkedIn</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full "  value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
        </div>
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Summary</span>
            </label>
            <textarea type="text" placeholder="Type here" className="textarea textarea-bordered h-24 w-full "  value={summary} onChange={(e) => setSummary(e.target.value)} />
        </div>
      
        <h2  className='font-bold text-center mt-5'>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" value={edu.school} onChange={(e) => handleEducationChange(index, 'school', e.target.value)} required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Major</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full"  value={edu.major}
                    onChange={(e) => handleEducationChange(index, 'major', e.target.value)}
                    required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Start Year</span>
                    </label>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full"  value={edu.startYear}
                    onChange={(e) => handleEducationChange(index, 'startYear', e.target.value)}
                    required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">End Year</span>
                    </label>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full"  value={edu.endYear}
                    onChange={(e) => handleEducationChange(index, 'endYear', e.target.value)}
                    required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">GPA</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full"  value={edu.gpa}
                    onChange={(e) => handleEducationChange(index, 'gpa', e.target.value)} />
                </div>
          </div>
        ))}
        <button type="button" className="btn btn-active btn-neutral mt-2" onClick={handleAddEducation}>
          Add Education
        </button>

        <h2 className='font-bold text-center mt-5'>Work Experience</h2>
        {workExperience.map((exp, index) => (
          <div key={index}>
            <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Company</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full"  value={exp.company}
                    onChange={(e) => handleWorkExperienceChange(index, 'company', e.target.value)}
                    required />
            </div>
            <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Position</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full"  value={exp.position}
                    onChange={(e) => handleWorkExperienceChange(index, 'position', e.target.value)}
                    required />
            </div>
            <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Start Year</span>
                    </label>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full"   value={exp.startYear}
                    onChange={(e) => handleWorkExperienceChange(index, 'startYear', e.target.value)}
                    required />
            </div>
            <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">End Year</span>
                    </label>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full"    value={exp.endYear}
                    onChange={(e) => handleWorkExperienceChange(index, 'endYear', e.target.value)}
                    required />
            </div>
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Description</span>
            </label>
            <textarea type="text" placeholder="Type here" className="textarea textarea-bordered h-24 w-full "   value={exp.description}
              onChange={(e) => handleWorkExperienceChange(index, 'description', e.target.value)} />
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-active btn-neutral mt-2" onClick={handleAddWorkExperience}>
          Add Work Experience
        </button>

        <h2 className='font-bold text-center mt-5'>Projects</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <div className="form-control w-full">
                <label className="label">
                        <span className="label-text">Name Peoject</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full"     value={project.name}
                onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                required />
            </div>
            <div className="form-control w-full">
                <label className="label">
                        <span className="label-text">Technology</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full"     value={project.technology}
                onChange={(e) => handleProjectChange(index, 'technology', e.target.value)}
                required />
            </div>
            <div className="form-control w-full">
                <label className="label">
                        <span className="label-text">Year</span>
                </label>
                <input type="number" placeholder="Type here" className="input input-bordered w-full"      value={project.year}
                onChange={(e) => handleProjectChange(index, 'year', e.target.value)}
                required />
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-active btn-neutral mt-2" onClick={handleAddProject}>
          Add Project
        </button>

        <h2 className='font-bold text-center mt-5'>Certifications</h2>
        {certifications.map((cert, index) => (
          <div key={index}>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full"        value={cert.name}
                onChange={(e) => handleCertificationChange(index, 'name', e.target.value)}
                required/>
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Year</span>
                </label>
                <input type="number" placeholder="Type here" className="input input-bordered w-full"        value={cert.year}
                onChange={(e) => handleCertificationChange(index, 'year', e.target.value)}
                required/>
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-active btn-neutral mt-2" onClick={handleAddCertification}>
          Add Certification
        </button>
        <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-bold text-center mt-5">Skills</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" value={skills} onChange={(e) => setSkills(e.target.value)}/>
            </div>
        <button type="submit" className="btn btn-info mt-2">View and Print CV</button>
      </form>
    </div>
  );
};

export default CVForm;
