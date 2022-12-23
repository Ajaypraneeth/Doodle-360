import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../components/Add.css";

function MyVerticallyCenteredModal(props) {
  return (    
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="view border-0">
        <Modal.Title id="assets" className="dot mx-2">
          Allocate Assets
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-center justify-content-between col-12">
          <div className="col-4 m-0">
            {" "}
            <label className="all">Employee Name</label>
          </div>
          <div className="col-8 m-0">
            {" "}
            <select className="name text-secondary" type="select">
                <option>Magesh kumar c</option>
            </select>
          </div>
        </div>
        <br />
        <div className="d-flex align-items-center justify-content-between col-12">
          <div className="col-4 m-0">
            {" "}
            <label className="all">Project</label>
          </div>
          <div className="col-8 m-0">
            {" "}
            <select className="name text-secondary" type="select">
            <option> FF-123-doodleflow </option>
            </select>
          </div>
        </div>
        <br />
        <div className="d-flex align-items-center justify-content-between col-12">
          <div className="col-4 m-0">
            {" "}
            <label className="all">Asset</label>
          </div>
          <div className="col-8 m-0">
            {" "}
            <select className="name text-secondary" type="text">
              <option>Loptop</option>
            </select>
          </div>
        </div>
        <br/>
        <lable className="all">New Request ?</lable>
        <input className="radio" type="radio" />
        <lable>Yes</lable>
        <input className="radio" type="radio" />
        <label>Replacement</label>
        <br />
        <div className="d-flex align-items-center justify-content-between col-12">
          <div className="col-4 m-0">
            {" "}
            <label className="all">Select Priority</label>
          </div>
          <div className="col-8 m-0">
            {" "}
            <select className="name text-secondary" type="text">
              <option>Select Priority</option>
            </select>
          </div>
        </div>
        <br/>
        <div className="d-flex align-items-center justify-content-between col-12">
          <div className="col-4 m-0">
            {" "}
            <label className="all">Reason</label>
          </div>
          <div className="col-8 m-0">
            {" "}
            <textarea className="name" type="text" placeholder="Enter Reason"/>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="reset bg-white text-dark">Reset</Button>
        <Button onClick={props.onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
