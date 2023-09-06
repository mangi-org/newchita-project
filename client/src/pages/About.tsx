import { Head, AboutComponent } from "../components";

function About() {
  return (
    <div>
      <Head title="About" description="About page" />
      <AboutComponent />
      {/* Остальной контент страницы */}
    </div>
  );
}

export default About;
