import { useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

export const CodeForcesRating = () => {
    const [handle, setHandle] = useState('');
    const [platform, setPlatform] = useState('');
    const [userrating, setUserrating] = useState(0);
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const fetchRating = () => {
        if (platform.toLowerCase() === 'codeforces') {
            fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === "OK") {
                        const user = data.result[0]; // Since we expect a single handle input, we take the first user
                        setUserrating(user.rating);
                        setUsername(user.handle);
                        setFirstName(user.firstName || 'N/A');
                        setLastName(user.lastName || 'N/A');
                    } else {
                        console.log("Wrong CodeForces Handle");
                        setUserrating(0);
                        setUsername('');
                        setFirstName('');
                        setLastName('');
                    }
                })
                .catch((error) => {
                    console.error("Error fetching Codeforces data:", error);
                });
        } else if (platform.toLowerCase() === 'leetcode') {
            fetch(`https://leetcode-stats-api.herokuapp.com/${handle}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.status !== "error") {
                        setUserrating(data.ranking);
                        setUsername(handle);
                        setFirstName(data.name.split(' ')[0]);
                        setLastName(data.name.split(' ').slice(1).join(' '));
                    } else {
                        console.log("Wrong LeetCode Handle");
                        setUserrating(0);
                        setUsername('');
                        setFirstName('');
                        setLastName('');
                    }
                })
                .catch((error) => {
                    console.error("Error fetching LeetCode data:", error);
                });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchRating();
    };

    return (
        <section className="contact" id="stats">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6} className="cfcards">
                        <Card style={{ width: '20rem' }}>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item >Handle: {username === '' ?'N/A' : username}</ListGroup.Item>
                                <ListGroup.Item>First Name: {firstName === '' ?'N/A' : firstName}</ListGroup.Item>
                                <ListGroup.Item>Last Name: {lastName=== '' ?'N/A' : lastName}</ListGroup.Item>
                                <ListGroup.Item>Rating / Rank: {userrating=== 0 ?0 : userrating}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col size={12} md={4}>
                        <h2>Know Your Coding Platform Stats!!!</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Enter Which Platform: "
                                onChange={(e) => setPlatform(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Enter your ID: "
                                onChange={(e) => setHandle(e.target.value)}
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
