import { Modal } from "react-bootstrap";
import CargoForm from "./CargoForm";

const AddCargoModal = ({
  handleCloseModal,
  showModal,
  cargoList,
  setCargoList,
}) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Добавить груз</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CargoForm
          cargoList={cargoList}
          setCargoList={setCargoList}
          handleCloseModal={handleCloseModal}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AddCargoModal;
