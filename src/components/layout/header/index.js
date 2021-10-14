import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useQueryParams } from '../../../hooks/url';

import './styles.css';

const Header = () => {
  const { query } = useQueryParams();
  return (
    <div className="header">
      <Container className="p-3 text-center">
        <Link to="/">
          <img src="/logo.png" alt="" />
        </Link>
        <h1>Your favorite movies.</h1>
        <p>Figurate out what happened. Then find out why.</p>
        <Row className="justify-content-center">
          <Col md="6">
            <Form method="get" action="/">
              <InputGroup>
                <Form.Control type="text" name="query" defaultValue={query} placeholder="Search for a movie..." />
                <Button type="submit">Search</Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
