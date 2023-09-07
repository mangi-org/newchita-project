import { useSelector } from "react-redux"
import { RootState } from "../../redux"
import { Link, useNavigate } from "react-router-dom"
import { clearMapStorage, detectBgColor } from "../../utils"

function CardAbout() {

    const project = useSelector((state: RootState) => state.project)

    const navigate = useNavigate()

    const handlerClick = () => {
        // Clear localstorage
        localStorage.removeItem('mapNavigate')
    }

    const bgColor: string = detectBgColor(String(project.color));

    const handleClick = () => {
        navigate('/')
        clearMapStorage()
    }

    return (
        <div className="absolute z-10 h-full w-full flex flex-row">
            <div className="w-1/4 md:w-3/4 bg-gray-100 opacity-50 left-0" onClick={handleClick}></div>
            <div className="w-3/4 md:w-1/4 text-lg overflow-y-auto bg-white absolute h-full right-0">
                <div className="relative w-full">
                    <img src={project.image} alt={project.title} className="w-full" />
                    <h2>{project.title}</h2>
                </div>
                <div className="content">
                    <p>{project.address}</p>
                    <hr />
                    <p>{project.description}</p>
                </div>
                <div className="flex justify-center items-center align-middle pb-4">
                    <Link to={"/about/" + project.id + "/full"} onClick={handlerClick} className={"w-40 h-8 text-white rounded self-center flex items-center justify-center " + bgColor}>
                        Читать полностью
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardAbout