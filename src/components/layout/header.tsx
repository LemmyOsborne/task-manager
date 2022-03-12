import React from "react"
import styled from "styled-components"

export const Header = () => {
  return (
    <Container>
      <h1>Task Manager</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <AddTask>Add Task</AddTask>
        <span style={{ display: "flex" }}>
          Logged in as:{" "}
          <strong style={{ textDecoration: "underline", marginLeft: "5px" }}>Username</strong>
        </span>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  -webkit-box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
`

const Button = styled.button`
  padding: 10px 15px;
  background-color: grey;
  border-radius: 25px;
  color: white;
`

const AddTask = styled.button`
  background-color: #019267;
  padding: 4px 15px;
  border-radius: 25px;
  color: white;
  display: flex;
  align-items: center;

  :before {
    content: "+";
    font-size: 25px;
    margin-right: 5px;
  }
`
