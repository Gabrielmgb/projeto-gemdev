import aboutImage from "/src/assets/about.svg";

const About = () => {
  return (
    <section id="about" className="basic-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="text-container">
              <h2>Award wining framework</h2>
              <p>
                Gemdev has been used in thousand of popular web projects. The
                feedback has been great so we decided to keep working.
              </p>
              <p>
                Naturally we can't please everyone because it's not our
                objective to fit all styles. Our style is based on speed and
                performance.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="image-container">
              <img className="img-fluid" src={aboutImage} alt="alternative" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="text-container">
              <h2>Reasons to download</h2>
              <ul className="list-unstyled li-space-lg">
                <li>
                  1. Very easy to download with minimum number of clicks and no
                  registration required
                </li>
                <li>
                  2. Large pool of components for any part of the project from
                  sliders to tabbed content
                </li>
                <li>
                  3. Simple licensing for any type and any number of projects.
                  Free MIT download
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
