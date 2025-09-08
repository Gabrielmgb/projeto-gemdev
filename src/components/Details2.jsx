import detailsImg from "/src/assets/details-2.svg";

const Details2 = () => {
  return (
    <div className="basic-3">
      <div className="container">
        <div className="row">
          {/* Texto */}
          <div className="col-lg-6 col-xl-5">
            <div className="text-container">
              <h2>Simple to setup</h2>
              <p>
                Gemdev is a well structured package and very easy to setup via
                parameters. You can get it up and running with basic coding
                skills. Don't hesitate to give it a try today
              </p>
              <ul className="list-unstyled li-space-lg">
                <li className="media">
                  <i className="fas fa-square"></i>
                  <div className="media-body">
                    <strong>For designers</strong> which have less data and
                    operations
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square"></i>
                  <div className="media-body">
                    <strong>For developers</strong> with a lot of data and daily
                    inputs
                  </div>
                </li>
              </ul>
              <a className="btn-solid-reg" href="#your-link">
                Details
              </a>
            </div>
          </div>

          {/* Imagem */}
          <div className="col-lg-6 col-xl-7">
            <div className="image-container">
              <img className="img-fluid" src={detailsImg} alt="alternative" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details2;
