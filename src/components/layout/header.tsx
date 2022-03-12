import React from "react"
import styled from "styled-components"

export const Header = () => {
  return (
    <Container>
      <h1>Task Manager</h1>
      <div>
        <span style={{ marginRight: "10px" }}>Username</span>
        <Button>Log In</Button>
      </div>
    </Container>
  )
}

const Container = styled.header`
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

const Button = styled.button`
  padding: 10px 15px;
  background-color: grey;
  border-radius: 25px;
  color: white;
`
