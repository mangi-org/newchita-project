import { useSelector } from "react-redux"
import { RootState } from "../../redux"
import { Link, useNavigate } from "react-router-dom"
import { clearMapStorage, detectBgColor, detectBorderColor } from "../../utils"

function CardAbout() {

    const project = useSelector((state: RootState) => state.project)

    const navigate = useNavigate()

    const handlerClick = () => {
        // Clear localstorage
        localStorage.removeItem('mapNavigate')
    }

    const bgColor: string = detectBgColor(String(project.color));
    const borderColor: string = detectBorderColor(String(project.color));

    const handleClick = () => {
        navigate('/')
        clearMapStorage()
    }

    return (
        <div className="absolute z-10 h-full w-full flex flex-row">
            <div className="w-1/4 md:w-3/4 bg-gray-100 opacity-50 left-0" onClick={handleClick}></div>
            <div className="flex flex-col absolute justify-center items-center align-middle pb-4 right-3/4 md:right-1/4 top-0 z-50">
                <Link to={"/"} onClick={handleClick} className={"px-4 h-8 text-black rounded self-center flex items-center justify-center bg-white border-2 border-solid " + borderColor}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                </Link>
                <Link to={"/about/" + project.id + "/full"} onClick={handlerClick} className={"px-4 h-8 text-white rounded self-center flex items-center justify-center " + bgColor}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </div>
            <div className="w-3/4 md:w-1/4 text-lg overflow-y-auto bg-white absolute h-full right-0">
                <div className="w-full">
                    <img src={project.image} alt={project.title} className="w-full" />
                    <h2>{project.title}</h2>
                </div>
                <div className="content">
                    <p>{project.address}</p>
                    <hr />
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardAbout