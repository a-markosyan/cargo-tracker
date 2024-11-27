import { Form } from "react-bootstrap";
import { statusColors } from "../constants";

const CargoFilter = ({ setFilter }) => {
  const filters = Object.keys(statusColors).map((status) => {
    return (
      <option value={status} key={status}>
        {status}
      </option>
    );
  });

  return (
    <div className="d-flex align-items-center">
      <Form.Group className="mb-0 d-flex align-items-center">
        <Form.Label className="mb-0 me-2 fw-bold" style={{ width: "260px" }}>
          Фильтр по статусу:
        </Form.Label>
        <Form.Select onChange={(e) => setFilter(e.target.value)}>
          <option value="">Все</option>
          {filters}
        </Form.Select>
      </Form.Group>
    </div>
  );
};

export default CargoFilter;
