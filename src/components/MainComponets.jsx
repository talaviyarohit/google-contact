import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import ContactList from './ContactList';

function MainComponets() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <Sidebar />
                    </Col>
                    <Col md={10}>
                        <SearchBar />
                        <ContactList />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MainComponets;
