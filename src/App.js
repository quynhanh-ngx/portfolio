import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Jumbotron, Row} from "react-bootstrap";
import {Component} from "react";

class Introduction extends Component {
    render() {
        return <Jumbotron>
            <h1>Hello, world, It's QUANH! PLEASE HIRE MEEEEE</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>;
    }
}

class Education extends Component {
    render() {
        return <Row>
            <Col>Education</Col>
        </Row>;
    }
}

class Projects extends Component {
    render() {
        return <Row>
            <Col>Projects & Rewards</Col>
        </Row>;
    }
}

class Work extends Component {
    render() {
        return <Row>
            <Col>Work Experience</Col>
        </Row>;
    }
}

class Volunteering extends Component {
    render() {
        return <Row>
            <Col>Volunteer and Community Experience</Col>
        </Row>;
    }
}

class Skills extends Component {
    render() {
        return <Row>
            <Col>Skills</Col>
        </Row>;
    }
}

function App() {
    return <Container>
        <Introduction/>
        <Education/>
        <Projects/>
        <Work/>
        <Volunteering/>
        <Skills/>
    </Container>
}

export default App;
