import React from 'react';

const ProjectSection = ({ title, content, videoUrl, buttons }) => {
  return (
    <section className="project-section">
      <h2>{title}</h2>
      
      <p>{content}</p>

      {videoUrl && (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video Presentation"
          ></iframe>
        </div>
      )}

      {buttons && buttons.length > 0 && (
        <div className="button-container">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              {button.label}
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
