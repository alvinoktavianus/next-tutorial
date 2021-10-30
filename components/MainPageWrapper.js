import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function MainPageWrapper(props) {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container className='px-4 px-lg-5'>
          <Navbar.Brand href='#'>Movies</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto mb-2 mb-lg-0 ms-lg-4'></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {props.children}
    </>
  )
}

export default MainPageWrapper

MainPageWrapper.propTypes = {}
