import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {

	return (
		<>
        <Row>
            <Col className="p-4 text-center">
                <h1>Welcome to our Fitness Tracker App</h1>
                <p>Create, Update, Delete and View Our Fitness Activities</p>
                <Link className="btn btn-primary" to={'/items'}>Check Our Fitness Activities</Link>
            </Col>
        </Row>
		</>
	)
}