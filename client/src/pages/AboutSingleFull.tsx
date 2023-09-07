import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { AboutFullComponent, Head } from "../components";
import { getSingleAboutProject } from "../axios";
import { setProject } from "../redux/project";
import { AboutProjectAPI } from "../interface";

function AboutSingle() {

  const navigate = useNavigate()

  const apiState: AboutProjectAPI = {
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

  const { aboutId } = useParams();
  const dispatch = useDispatch();
  const [dataRest, setDataRest] = useState(apiState);

  useEffect(() => {

    getSingleAboutProject(Number(aboutId)).then((data) => {
      
      if (data.id === Number(aboutId)){
        dispatch(setProject(data));
        setDataRest(data);
      } else {
        navigate('/404')
      }

    });
  }, [aboutId, dispatch]);

  return (
    <>
      <Head title={dataRest?.title} description={dataRest?.description} />
      <AboutFullComponent />
    </>
  );
}

export default AboutSingle;