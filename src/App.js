import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, CardGroup, Col, Container, Jumbotron, Nav, Row} from "react-bootstrap";
import {Component} from "react";

class Introduction extends Component {
    render() {
        return <Jumbotron>
            <h1>Anh Q. Nguyen</h1>
            <p>
                Hi, my name is Anh. I'm a software engineer studying at the University of North Carolina at Charlotte.
                Please hire me!
            </p>
            <Nav as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="https://linkedin.com/in/anhnguyenq/">LinkedIn</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="https://github.com/quynhanh-ngx">GitHub</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="mailto:quanh@quanh.org">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </Jumbotron>;
    }
}

class Group extends Component {
    render() {
        return <Col><h2>{this.props.title}</h2>
            <Row><CardGroup as="section">

            {this.props.children}
        </CardGroup></Row></Col>;
    }
}

class GroupItem extends Component {
    render() {
        return <div className="col-md-auto py-2"><Card className='border-0'>
            <Card.Body>
                <Card.Title>
                    {this.props.link ? <a href={this.props.link}>{this.props.title}</a> : this.props.title}
                </Card.Title>
                {this.props.subtitle ? <Card.Text>{this.props.subtitle}</Card.Text> : null}
                {this.props.startDate && this.props.endDate ? <Card.Text>{this.props.startDate + " - " + this.props.endDate}</Card.Text> : null}
                {this.props.startDate && !this.props.endDate ? <Card.Text>{this.props.startDate + " - Present"}</Card.Text> : null}
                {this.props.children}
            </Card.Body>
        </Card>
        </div>
    }
}

class GroupItemChild extends Component {
    render() {
        return <Card.Text>
            {this.props.children}
        </Card.Text>
    }
}

class Education extends Component {
    render() {
        return <Group title="Education">
            <GroupItem title="The University of North Carolina at Charlotte">
                <GroupItemChild>
                    Degree: B.S. in Computer Science
                </GroupItemChild>
                <GroupItemChild>
                    Concentration: AI, Robotics, and Gaming
                </GroupItemChild>
                <GroupItemChild>
                    Graduation date: May 2023
                </GroupItemChild>
                <GroupItemChild>
                    GPA: 4.0
                </GroupItemChild>
                <GroupItemChild>
                    Chancellor’s List: Fall 19, Spring 20, Fall 20, Spring 21
                </GroupItemChild>
                <GroupItemChild>
                    Relevant coursework: Introduction to Computer Science 1 & 2 (with Java),
                    Computing Professional, Logic & Algorithms, Data Structures, Linear Algebra, Computer Architecture,
                    Digital Image Processing, Introduction to Artificial Intelligence
                </GroupItemChild>
            </GroupItem>
        </Group>;
    }
}


class Projects extends Component {
    render() {
        return <Group title="Projects & Awards">
            <GroupItem title="TriadTransparency" link="https://www.facebook.com/watch/live/?v=3282333825154856">
                <GroupItemChild>
                    A customized dashboard to help create transparency and ease of access for minority business owners
                    to grants and government contracts. Won first place at the 2020 Next in Fintech Community Challenge.
                </GroupItemChild>
                <GroupItemChild>
                    Tech stack: HTML, CSS, JavaScript
                </GroupItemChild>
            </GroupItem>
            <GroupItem title="Twitter Clone" link="https://github.com/quynhanh-ngx/twitter-clone">
                <GroupItemChild>
                    A react-based frontend and Django-based backend for a microblogging application complete
                    with registration, JWT-based authentication, messaging including text, videos, and images, sharing,
                    and liking posts
                </GroupItemChild>
                <GroupItemChild>
                    Tech stack: React, Django, Python, JavaScript, CSS, HTML, Bootstrap
                </GroupItemChild>
            </GroupItem>
            <GroupItem title="Weather App" link="https://github.com/quynhanh-ngx/weather_app">
                <GroupItemChild>
                    A react-based application which allows users to search for weather by city,
                    using the OpenWeather API for data
                </GroupItemChild>
                <GroupItemChild>
                    Tech stack: React, Python, JavaScript, CSS, HTML, Semantic UI
                </GroupItemChild>
            </GroupItem>
        </Group>;
    }
}


class Work extends Component {
    render() {
        return <Group title="Work Experience">
            <GroupItem title="Teaching Assistant for Digital Image Processing"
                       subtitle="UNC Charlotte, North Carolina"
                       startDate="July 2021">
                <GroupItemChild>
                    Create assignments in Python for Digital Image Processing students
                </GroupItemChild>
                <GroupItemChild>
                    Develop <a href={'https://github.com/quynhanh-ngx/zulip-canvas-alerts'}>a bot</a> to remind students about overdue assignments
                </GroupItemChild>
            </GroupItem>
            <GroupItem title="CyberSecurity Researcher"
                       subtitle="Electric Power Research Institute, North Carolina"
                       startDate="May 2021">
                <GroupItemChild>
                    Research and develop technical documentation for system hardening best practices
                </GroupItemChild>
                <GroupItemChild>
                    Secure programmable logic controllers (PLCs) against both common and novel vulnerabilities
                    by minimizing attack surface
                </GroupItemChild>
            </GroupItem>
            <GroupItem title="Undergraduate Researcher"
                       subtitle="Biological Sciences Department, UNC Charlotte, North Carolina"
                       startDate="May 2021">
                <GroupItemChild>
                    Combine biological data from multiple large datasets using Python, xarray, and pandas.
                </GroupItemChild>
                <GroupItemChild>
                    Model the passive dispersal of larvae in Jupyter Notebooks with matplotlib and OceanParcels
                </GroupItemChild>
            </GroupItem>
            <GroupItem title="Teaching Assistant for Intro to Computer Science II"
                       subtitle="UNC Charlotte, North Carolina"
                       startDate="Jan 2021"
                       endDate="May 2021">
                <GroupItemChild>
                    Graded Java assignments and tests of 24 students
                </GroupItemChild>
                <GroupItemChild>
                    Held weekly office hours to mentor students through activities and labs, and coding assignments
                </GroupItemChild>
            </GroupItem>
            <GroupItem title="Preceptor for Computing Professionals"
                       subtitle="UNC Charlotte, North Carolina"
                       startDate="Sep 2020"
                       endDate="Dec 2020">
                <GroupItemChild>
                    Helped the instructor to create the best possible pedagogical environment
                </GroupItemChild>
                <GroupItemChild>
                    Promoted student success both in and outside of the classroom
                </GroupItemChild>
                <GroupItemChild>
                    Hold study sessions, graded assignments and supported students who are struggling with course
                    content
                </GroupItemChild>
            </GroupItem>
        </Group>;
    }
}

class Volunteering extends Component {
    render() {
        return <Group title="Volunteer and Community Experience">
            <GroupItem title="Head of Public Relations"
                       subtitle=" United Minds Vietnam, Ho Chi Minh City, Vietnam">
                <GroupItemChild>
                    Got 10,000 organic reach on social media by creating written and graphic contents
                </GroupItemChild>
                <GroupItemChild>
                    Led a team of 7 to host an annual Talent show which attracted more than 200 entries
                </GroupItemChild>
                <GroupItemChild>
                    Raised $6,500 by reaching out and following up with sponsors
                </GroupItemChild>
            </GroupItem>
            <GroupItem title="Co-director"
                       subtitle="“Expect the unexpected” show, Hanoi City, Vietnam">
                <GroupItemChild>
                    Managed and prepared for nearly 10 different performances during the entire show
                </GroupItemChild>
                <GroupItemChild>
                    Raised nearly $5,000 in cash and won a $250 prize
                </GroupItemChild>
            </GroupItem>
        </Group>;
    }
}

class Skills extends Component {
    render() {
        return <Group title="Skills">
            <GroupItem title="Programming languages">
                <GroupItemChild>
                    Python, Java, JavaScript, C
                </GroupItemChild>
            </GroupItem>
            <GroupItem title="Technology/Frameworks">
                <GroupItemChild>
                    HTML, CSS, React, Django, SQL, Pandas, Matplotlib, npm, Gradle, Maven, Flutter, Android Studio
                </GroupItemChild>
            </GroupItem>
        </Group>;
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
