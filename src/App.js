import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import AddCargoModal from "./components/AddCargoModal";
import CargoFilter from "./components/CargoFilter";
import CargoTable from "./components/CargoTable";
import { state } from "./state";

function App() {
  const [cargoList, setCargoList] = useState(state);
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container>
      <h1 className="my-4">Отслеживание грузов</h1>
      {showModal && (
        <AddCargoModal
          cargoList={cargoList}
          setCargoList={setCargoList}
          handleCloseModal={handleCloseModal}
          showModal={showModal}
        />
      )}

      <div className="row g-3 align-items-center justify-content-between my-4">
        <div className="col-12 col-md-8">
          <CargoFilter setFilter={setFilter} />
        </div>

        <div className="col-12 col-md-4 text-md-end text-center">
          <Button onClick={handleOpenModal} className="w-100 w-md-auto">
            Добавить груз
          </Button>
        </div>
      </div>

      <CargoTable
        cargoList={cargoList}
        setCargoList={setCargoList}
        filter={filter}
      />
    </Container>
  );
}

export default App;
