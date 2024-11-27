import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { cities } from "../constants";

const CargoForm = ({ cargoList, setCargoList, handleCloseModal }) => {
  const [form, setForm] = useState({
    name: "",
    origin: "",
    destination: "",
    departureDate: "",
  });
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formIsValid =
      form.name && form.origin && form.destination && form.departureDate;

    if (!formIsValid) {
      setValidated(true);
      return;
    }

    const newCargo = {
      ...form,
      id: `CARGO${String(cargoList.length + 1).padStart(3, "0")}`,
      status: "Ожидает отправки",
    };

    const updatedCargoList = [...cargoList, newCargo];

    localStorage.setItem("cargoList", JSON.stringify(updatedCargoList));

    setCargoList(updatedCargoList);

    setForm({ name: "", origin: "", destination: "", departureDate: "" });
    handleCloseModal();
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="mb-4"
    >
      <Form.Group className="mb-3">
        <Form.Label>Название груза</Form.Label>
        <Form.Control
          required
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          isInvalid={validated && !form.name}
        />
        <Form.Control.Feedback type="invalid">
          Пожалуйста, укажите название груза.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Пункт отправления</Form.Label>
        <Form.Select
          required
          value={form.origin}
          onChange={(e) => setForm({ ...form, origin: e.target.value })}
          isInvalid={validated && !form.origin}
        >
          <option value="">Выберите город</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Пожалуйста, выберите пункт отправления.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Пункт назначения</Form.Label>
        <Form.Select
          required
          value={form.destination}
          onChange={(e) => setForm({ ...form, destination: e.target.value })}
          isInvalid={validated && !form.destination}
        >
          <option value="">Выберите город</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Пожалуйста, выберите пункт назначения.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Дата отправления</Form.Label>
        <Form.Control
          required
          type="date"
          value={form.departureDate}
          onChange={(e) => setForm({ ...form, departureDate: e.target.value })}
          isInvalid={validated && !form.departureDate}
        />
        <Form.Control.Feedback type="invalid">
          Пожалуйста, выберите дату отправления.
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">Добавить груз</Button>
    </Form>
  );
};

export default CargoForm;
