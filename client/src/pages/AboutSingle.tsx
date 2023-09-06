import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { Head, CardAbout } from "../components";
import { getSingleAboutProject } from "../axios";
import { setProject } from "../redux/project";
import { Map } from "../components";

function AboutSingle() {
  const { aboutId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getSingleAboutProject(Number(aboutId)).then((data) => {
      dispatch(setProject(data));
    });
  }, [aboutId, dispatch]);

  return (
    <>
      <Head title={aboutId} />
      <Map className="-z-10 absolute" />
      <CardAbout />
    </>
  );
}

export default AboutSingle;