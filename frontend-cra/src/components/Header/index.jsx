import React from 'react'
import './styles.css';
import { Navbar, Nav } from 'react-bootstrap'

export default function index({title, routes}) {
  return (      
    <Navbar bg='dark' variant='dark' className="japa">
      <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
        <Nav.Item className="link">
          <Nav.Link href="/home" >HOME</Nav.Link>
        </Nav.Item>
        </Nav>
    </Navbar>        
  )
}