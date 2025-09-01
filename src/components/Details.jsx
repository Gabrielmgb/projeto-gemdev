const Details = () => {
  return (
    <div id="details" className="basic-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-7">
            <div className="image-container">
              <img
                className="img-fluid"
                src="src/assets/details-1.svg"
                alt="alternative"
              />
            </div>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="text-container">
              <h2>Easy to download</h2>
              <p>
                It takes no more than 10 minutes to download the framework, set
                it up and start working on your project. You'll see impressive
                results in a couple of hours
              </p>
              <ul className="list-unstyled li-space-lg">
                <li className="media">
                  <i className="fas fa-square"></i>
                  <div className="media-body">
                    <strong>For startups</strong> which have less data and
                    operations
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square"></i>
                  <div className="media-body">
                    <strong>For big companies</strong> with a lot of data and
                    daily inputs
                  </div>
                </li>
              </ul>
              <a
                className="btn-solid-reg popup-with-move-anim"
                href="#details-lightbox"
              >
                Lightbox
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
