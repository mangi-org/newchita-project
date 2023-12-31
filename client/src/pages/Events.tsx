import { Head, EventsComponent } from "../components";
import { getArrayAboutProject } from "../axios"
import { AboutProjectAPI } from '../interface';
import { useEffect, useState } from 'react';

function ProjectsPage() {
  const [projects, setProjects] = useState<AboutProjectAPI[]>([]);

  useEffect(() => {
    getArrayAboutProject().then(data => {
      setProjects([...data])
    }).catch(err => console.log(err));
  }, []);

  return (
    <div className="container mx-auto my-4 px-4">
      <Head title="Достопримечательности Читы" description="Достопримечательности Читы все мероприятия" />
      <div className="flex flex-wrap -mx-4">
        {projects.map((project) => (
          <EventsComponent key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
