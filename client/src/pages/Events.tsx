import { Head, EventsComponent } from "../components";
import { getArrayAboutProject } from "../axios"
import { AboutProjectAPI } from '../interface';

const mockProjects: AboutProjectAPI[] = [
  // Здесь может быть ваш API вызов для получения проектов
  { id: 1, title: "Проект 1", description: "Описание проекта 1", image: "url1", latitude: 0, longitude: 0 },
  { id: 2, title: "Проект 2", description: "Описание проекта 2", image: "url2", latitude: 0, longitude: 0 },
  // ...
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4" style={{ maxWidth: '1140px' }}>
      <div className="flex flex-wrap -mx-4">
        {mockProjects.map((project) => (
          <EventsComponent key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;