import { Link } from "react-router-dom";
import { AboutProjectAPI } from "../../interface";
import { detectBgColor } from "../../utils";

interface ProjectCardProps {
  project: AboutProjectAPI;
}

function EventsComponent({ project }: ProjectCardProps) {

  const bgColor = detectBgColor(String(project.color));

  const smallDescription = project.description.length > 100 ? project.description.substring(0, 100) + '...' : project.description

  return (
    <div className="w-full p-4 h-full md:w-1/3">
      <div className="bg-white rounded shadow-lg h-full overflow-hidden">
        {project.image && <div className="container flex">
          <img className="w-full" src={project.image} alt={project.title} />
        </div>}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{project.title}</div>
          <p className="text-gray-700 text-base mb-8">{smallDescription}</p>
          <Link to={"/about/" + project.id + "/full"} className={"mb-4 px-6 py-4 text-white font-bold text-sm uppercase rounded shadow hover:shadow-lg inline-block bg-red-700 hover:bg-white hover:text-red-700 border border-transparent hover:border-red-700 transition duration-200 ease-in-out" + bgColor}>
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventsComponent;