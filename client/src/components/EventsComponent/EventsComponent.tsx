import { AboutProjectAPI } from "../../interface";

interface ProjectCardProps {
  project: AboutProjectAPI;
}

const EventsComponent: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="w-1/2 p-4">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        {project.image && <img className="w-full" src={project.image} alt={project.title} />}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{project.title}</div>
          <p className="text-gray-700 text-base">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventsComponent;