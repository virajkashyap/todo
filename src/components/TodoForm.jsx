import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormTodo() {
  return (
    <div className="form-todo flex justify-content-center align-items-center d-flex">
      <Form>
        <Form.Group className="mb-5" controlId="formBasic">
          <Form.Label>Enter Your Todo</Form.Label>
          <Form.Control type="Todo" placeholder="Enter Todo" />
          <Form.Text className="text-muted"></Form.Text>
          <Button variant="primary" type="submit" className="mb-3">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default FormTodo;
