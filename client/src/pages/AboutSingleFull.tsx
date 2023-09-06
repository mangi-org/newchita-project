import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { Head } from "../components";
import { getSingleAboutProject } from "../axios";
import { setProject } from "../redux/project";

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
      <h1>{aboutId}</h1>
    </>
  );
}

export default AboutSingle;