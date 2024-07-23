import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky"></div>
      <Nav.Item>
        <Nav.Link to={'/'}>Contacts</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#frequent">Frequent</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#other-contacts">Other Contacts</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#merge-fix">Merge & Fix</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#import">Import</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#trash">Trash</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#labels">Labels</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
