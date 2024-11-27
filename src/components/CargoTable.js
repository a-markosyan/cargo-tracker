import { useEffect } from "react";
import { Badge, Form, Table } from "react-bootstrap";
import { statusColors } from "../constants";

const CargoTable = ({ cargoList, setCargoList, filter }) => {
  useEffect(() => {
    const storedList = localStorage.getItem("cargoList");
    if (storedList) {
      setCargoList(JSON.parse(storedList));
    }
  }, []);

  const updateStatus = (id, newStatus) => {
    const updatedList = cargoList.map((cargo) => {
      if (cargo.id === id) {
        if (
          newStatus === "Доставлен" &&
          new Date(cargo.departureDate) > new Date()
        ) {
          alert("Ошибка: Груз не может быть доставлен до даты отправления.");
          return cargo;
        }
        return { ...cargo, status: newStatus };
      }
      return cargo;
    });

    setCargoList(updatedList);
    localStorage.setItem("cargoList", JSON.stringify(updatedList));
  };

  const filteredCargoList = filter
    ? cargoList.filter((cargo) => cargo.status === filter)
    : cargoList;

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Номер</th>
          <th>Название</th>
          <th>Статус </th>
          <th>Пункт отправления</th>
          <th>Пункт назначения</th>
          <th>Дата отправления</th>
        </tr>
      </thead>
      <tbody>
        {filteredCargoList.map(
          ({ id, name, status, origin, destination, departureDate }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>
                  <Form.Select
                    value={status}
                    onChange={(e) => updateStatus(id, e.target.value)}
                  >
                    {Object.keys(statusColors).map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </Form.Select>
                  <Badge bg={statusColors[status]}>{status}</Badge>
                </td>
                <td>{origin}</td>
                <td>{destination}</td>
                <td>{departureDate}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </Table>
  );
};

export default CargoTable;
