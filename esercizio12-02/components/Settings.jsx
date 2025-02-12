const Settings = () => {
  return (
    <div className="container-fluid text-light">
      <div className="row d-flex">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <h1>Account</h1>
          <div className="col-lg-12 d-flex justify-content-between border-top border-secondary mt-3 col-sm-12 flex-wrap">
            <div className="col-lg-3 mt-2 col-sm-12">
              <h6 className="text-uppercase text-secondary opacity-50">membership & billing</h6>
              <button type="button" className="btn btn-secondary text-light rounded-0">
                Cancel Membership
              </button>
            </div>
            <div className="col-lg-9 d-flex flex-column mt-2 col-sm-12">
              <div className="col d-flex justify-content-between">
                <p className="fw-bold">student@stive.school</p>
                <a href="#" className="fw-bold" style={{ textDecoration: "none" }}>
                  Change account email
                </a>
              </div>
              <div className="col d-flex justify-content-between">
                <p className="opacity-50">password:</p>
                <a href="#" className="fw-bold" style={{ textDecoration: "none" }}>
                  Change password
                </a>
              </div>
              <div className="col d-flex justify-content-between border-bottom border-secondary">
                <p className="opacity-50">Phone:</p>
                <a href="#" className="fw-bold" style={{ textDecoration: "none" }}>
                  Change phone number
                </a>
              </div>
              <div className="col d-flex justify-content-between mt-2 border-bottom border-secondary">
                <div className="col">
                  <p className="fw-bold fst-italic">
                    <i className="bi bi-paypal"></i> Paypal admin@strive.school
                  </p>
                </div>
                <div className="col d-flex flex-column align-items-end mb-3">
                  <a href="#" className="fw-bold" style={{ textDecoration: "none" }}>
                    Update payment info
                  </a>
                  <a href="#" className="fw-bold" style={{ textDecoration: "none" }}>
                    Update payment info
                  </a>
                </div>
              </div>
              <div className="col d-flex mt-2">
                <div className="col d-flex flex-column align-items-end mb-3">
                  <a href="#" className="fw-bold" style={{ textDecoration: "none" }}>
                    Redeem gift card or promo code
                  </a>
                  <a href="#" className="fw-bold" style={{ textDecoration: "none" }}>
                    Where to buy gift cards
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="col-lg-12 d-flex justify-content-between border-top border-secondary mt-3 col-sm-12 flex-wrap">
            <div className="col-lg-3 mt-2 col-sm-12">
              <h6 className="text-uppercase text-secondary opacity-50">membership & billing</h6>
            </div>
            <div className="col-lg-9 d-flex flex-column mt-2 col-sm-12">
              <div className="col d-flex justify-content-between">
                <p className="fw-bold">
                  Premium
                  <button
                    type="button"
                    className="btn btn-transparent border border-light border-2 px-1 py-0 ms-2 btn-sm text-uppercase fw-bold text-light"
                  >
                    ultra hd
                  </button>
                </p>
                <a href="#" className="fw-bold" style={{ textDecoration: "none" }}>
                  Change plan
                </a>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
