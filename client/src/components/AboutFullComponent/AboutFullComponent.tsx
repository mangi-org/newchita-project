import { useEffect, useState } from "react"
import { RootState } from "../../redux"
import { useSelector } from "react-redux"
import ReactMarcdown from "react-markdown"
import { AboutProjectAPI } from "../../interface"
import { getSingleAboutProject } from "../../axios"
import { EventsComponent } from ".."

function AboutFullComponent() {

    const stateDefault: AboutProjectAPI = {
        id: -1,
        title: "",
        address: "",
        description: "",
        image: "",
        createdAt: "",
        updatedAt: "",
        color: "",
        latitude: 0,
        longitude: 0
    }

    const data = useSelector((state: RootState) => state.project)
    const [nextEvent, setNextEvent] = useState(stateDefault)
    const [prevEvent, setPrevEvent] = useState(stateDefault)

    useEffect(() => {
        async function fetchData() {
            try {
                const next = await getSingleAboutProject(Number(data.id) + 1)
                console.log(next)
                if (next?.id) {
                    setNextEvent(next)
                }
            } catch (e) {
                console.log(e)
            }

            try {
                const prev = await getSingleAboutProject(Number(data.id) - 1)
                console.log(prev)
                if (prev?.id) {
                    setPrevEvent(prev)
                }
            } catch (e) {
                console.log(e)
            }

        }
        fetchData().then()
    }, [data.id])


    return (
        <>
            <div className="content">
                <img src={data.image} alt={data.title} />
                <h1>{data.title}</h1>
                <p>Адресс: {data.address}</p>
                <hr />
                <p><ReactMarcdown>{data.description}</ReactMarcdown></p>
            </div>
            <div className="flex flex-row">
                {prevEvent.id !== -1 && <div className="float-left">
                    <EventsComponent project={prevEvent} />
                </div>}
                {nextEvent.id !== -1 && <div className="float-right">
                    <EventsComponent project={nextEvent} />
                </div>}
            </div>
        </>
    )
}

export default AboutFullComponent