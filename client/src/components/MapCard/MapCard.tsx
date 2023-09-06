import { useEffect } from 'react';
import { useNavigate } from 'react-router';
function MapCard() {

    const navigate = useNavigate()

    useEffect(() => {

        const interval = setInterval(() => {
            const MapNavigate = JSON.parse(String(localStorage.getItem('mapNavigate')))
            if (MapNavigate) {
                navigate(MapNavigate.data.url)
            }


        }, 1000)

        return () => {
            clearInterval(interval)
        }
    })

    return <></>;
}

export default MapCard