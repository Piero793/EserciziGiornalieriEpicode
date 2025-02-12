import { Container, Dropdown, Button, Form, DropdownButton } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const AccountPage = () => {
  return (
    <div className=" text-light">
      <main>
        <Container>
          <div className="row">
            <div className="col-lg-3 col-sm-12 justify-content-center">
              <h1>Edit Profile</h1>
            </div>
          </div>
        </Container>
        <Container>
          <div className="row mt-3 border-top border-secondary d-flex">
            <div className="col-2 col-sm-0"></div>
            <div className="col-lg-3 mt-4 d-flex justify-content-end col-sm-12 justify-content-center">
              <div className="d-flex position-relative">
                <span className="position-absolute top-0 start-0 p-3 translate-middle  border border-light rounded-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    className="bi bi-pencil position-absolute translate-middle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                  </svg>
                </span>
                <img src="../src/assets/kids_icon.png" width="150" height="150" alt="Avatar" />
              </div>
            </div>
            <div className="col-lg-5 mt-4 col-sm-12">
              <div className="mb-3">
                <Form.Control
                  type="email"
                  className="bg-secondary border-secondary rounded-0"
                  placeholder="Profile name"
                />
              </div>
              <div className="col-3 d-flex flex-column">
                <p>Language:</p>
                <Dropdown>
                  <Dropdown.Toggle variant="dark" className="border border-light rounded-0 fw-bold btn-sm">
                    English
                  </Dropdown.Toggle>
                  <Dropdown.Menu className=" text-light border rounded-0">
                    <Dropdown.Item href="#">Italiano</Dropdown.Item>
                    <Dropdown.Item href="#">Deutsch</Dropdown.Item>
                    <Dropdown.Item href="#">Francais</Dropdown.Item>
                    <Dropdown.Item href="#">Espanol</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col-lg-6 d-flex flex-column mt-5 mb-3 border-top border-secondary col-sm-12">
                <p className="mt-2">Maturity settings:</p>
                <DropdownButton id="dropdown-basic-button" title="All Maturity Ratings" variant="secondary">
                  <Dropdown.Item href="#/action-1">16+</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">18+</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                </DropdownButton>
                <p className="mt-3">Show titles of all maturity ratings for this profile</p>
                <Button variant="outline-secondary" className="col-4 border-2 rounded-0 fw-bold text-uppercase">
                  Edit
                </Button>
              </div>
              <div className="border-secondary">
                <p className="mt-2">Autoplay controls</p>
                <div className="col d-flex align-items-center">
                  <Form.Check type="checkbox" className="btn-check" id="btn-check" />
                  <Form.Label className="btn btn-dark border border-2 border-secondary rounded-0" htmlFor="btn-check">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                  </Form.Label>
                  <p className="mt-2 ms-2">Autoplay next episode in a series on all devices.</p>
                </div>
                <div className="col d-flex align-items-center">
                  <Form.Check type="checkbox" className="btn-check" id="btn-checkDue" />
                  <Form.Label
                    className="btn btn-dark border border-2 border-secondary rounded-0"
                    htmlFor="btn-checkDue"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                  </Form.Label>
                  <p className="mt-2 ms-2">Autoplay previews while browsing on all devices.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 col-sm-0"></div>
        </Container>
        <Container className="border-top border-secondary mt-3 py-2">
          <div className="row">
            <div className="col-3 col-sm-0"></div>
            <div className="col-lg-6 d-flex justify-content-center mt-3">
              <div className="d-inline-flex gap-3 mt-3">
                <div className="col-lg-4 d-flex justify-content-end me-2 mt-2">
                  <Button variant="light" className="btn-sm rounded-0 text-uppercase">
                    Save
                  </Button>
                </div>
                <div className="col-lg-4 d-flex justify-content-center mt-2">
                  <Button variant="outline-secondary" className="btn-sm rounded-0 text-uppercase">
                    Cancel
                  </Button>
                </div>
                <div className="col-lg-4 d-flex justify-content-start ms-2 mt-2">
                  <Button variant="outline-secondary" className="btn-sm rounded-0 text-uppercase">
                    Delete Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default AccountPage;
