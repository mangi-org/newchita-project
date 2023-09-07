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
            <div className="content">
                <img src={data.image} alt={data.title} />
                <h1>{data.title}</h1>
                <p>Адресс: {data.address}</p>
                <hr />
                <p><ReactMarcdown>{data.description}</ReactMarcdown></p>
            </div>
            <div className="flex flex-row mx-4">
                <button onClick={handleClick} className={"px-4 h-8 text-white rounded self-center flex items-center justify-center " + BgColor}>Назад</button>
            </div>
        </>
    )
}

export default AboutFullComponent