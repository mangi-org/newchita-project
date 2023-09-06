import { Head, EventsComponent } from "../components";
import { getArrayAboutProject } from "../axios"
import { AboutProjectAPI } from '../interface';
import React, { useEffect, useState } from 'react';

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<AboutProjectAPI[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const fetchedProjects = await getArrayAboutProject();
        setProjects(fetchedProjects);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto px-4" style={{ maxWidth: '1140px' }}>
      <div className="flex flex-wrap -mx-4">
        {projects.map((project) => (
          <EventsComponent key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;