import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { UserService, type User } from "../services/UserService";

export default function UserList() {
  const [state, setState] = useState<{ users: User[] }>({ users: [] });

  useEffect(() => {
    UserService.getAllUsers()
      .then((response) => setState({ ...state, users: response.data }))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h3 className="text-primary">User List</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table className="text-center shadow-lg" striped bordered hover>
            <thead>
              <tr>
                <th>SNO</th>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
                <th>Company</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {state.users.map((user) => (
                <tr key={user.id}>
                  <th>{user.username}</th>
                  <th>{user.name}</th>
                  <th>{user.email}</th>
                  <th>{user.website}</th>
                  <th>{user.company.name}</th>
                  <th>{user.address.city}</th>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
