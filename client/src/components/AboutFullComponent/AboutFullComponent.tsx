import { RootState } from "../../redux"
import { useSelector } from "react-redux"
import ReactMarcdown from "react-markdown"
import { useNavigate } from "react-router-dom"
import { detectBgColor } from "../../utils"

function AboutFullComponent() {

    const navaigate = useNavigate()

    const data = useSelector((state: RootState) => state.project)

    const BgColor = detectBgColor(String(data.color))

    const handleClick = () => {
        navaigate(-1)
    }

    return (
        <>
            <div className="container max-w-[960px] mx-auto my-4 px-4 p-6">
                <img className="mb-8 rounded-lg shadow-md" src={data.image} alt={data.title} />
                <h1 className="mb-4 text-2xl font-bold text-gray-800">{data.title}</h1>
                <p className="text-gray-700">Адрес: {data.address}</p>
                <hr className="my-4 border-gray-300"/>
                <p className="text-gray-800"><ReactMarcdown>{data.description}</ReactMarcdown></p>
                <div className="flex flex-row mt-4">
                    <button onClick={handleClick} className={"px-4 h-8 text-white rounded self-center flex items-center justify-center transition duration-300 ease-in-out " + BgColor}>Назад</button>
                </div>
            </div>

        </>
    )
}

export default AboutFullComponent