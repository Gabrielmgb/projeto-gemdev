

const Contact = () => {
  return (
    <div id="contact" className="form-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="h2-heading">Contact details</h2>
            <p className="p-heading">
              Don't hesitate to send your questions through the contact form or{' '}
              <a className="blue no-line" href="mailto:contact@gemdev.com">
                contact@gemdev.com
              </a>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="form-container">
              <img className="decoration" src="src/assets/contact-envelope.svg" alt="alternative" />
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control-input"
                    id="cname"
                    required
                  />
                  <label className="label-control" htmlFor="cname">
                    Name
                  </label>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control-input"
                    id="cemail"
                    required
                  />
                  <label className="label-control" htmlFor="cemail">
                    Email
                  </label>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control-textarea"
                    id="cmessage"
                    required
                  ></textarea>
                  <label className="label-control" htmlFor="cmessage">
                    Your message
                  </label>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control-submit-button">
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
