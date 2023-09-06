import { useSelector } from "react-redux"
import { RootState } from "../../redux"

function CardAbout() {

    const project = useSelector((state: RootState) => state.project)

    return (
        <div className="absolute z-10 h-full w-full flex flex-row">
            <div className="w-1/4 md:w-3/4 bg-gray-100 opacity-50 left-0"></div>
            <div className="w-3/4 md:w-1/4 text-lg overflow-y-auto bg-white absolute h-full right-0">
                <div className={"relative w-full h-10" + `bg-[url('${project.image}')]`}>
                    {/* <img src={project.image} alt={project.title} className="w-full"/> */}
                    <h2>{project.title}</h2>
                </div>
                <p>{project.address}</p>
                <hr />
                <p>{project.description}</p>
            </div>
        </div>
    )
}

export default CardAbout