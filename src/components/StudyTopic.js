import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StudyTopic = () => {
  const { topic } = useParams();
  const navigate = useNavigate();
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const formattedTopic = topic.charAt(0).toUpperCase() + topic.slice(1);

  useEffect(() => {
    setTimeout(() => {
      setResources([
        { type: "Tutorial", title: `${formattedTopic} Tutorial`, url: "https://www.w3schools.com" },
        { type: "Documentation", title: `${formattedTopic} Reference`, url: "https://developer.mozilla.org" },
        { type: "Examples", title: `${formattedTopic} Examples`, url: "https://www.w3schools.com" }
      ]);
      setIsLoading(false);
    }, 500);
  }, [topic]);

  return (
    <div className="study-topic-container">
      <button onClick={() => navigate("/study")} className="back-button">
        <span>←</span> Back to Topics
      </button>
      <h1>{formattedTopic} Resources</h1>
      {isLoading ? (
        <div className="loading-message">Loading resources...</div>
      ) : (
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <a key={index} href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-card">
              <div className="resource-type">{resource.type}</div>
              <h3>{resource.title}</h3>
              <p className="resource-url">{resource.url}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudyTopic;