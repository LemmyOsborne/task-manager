import React from "react"
import styled from "styled-components"

export const TaskComponent: React.FC<Task> = ({ id, title, description }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <span>{description}</span>
    </Container>
  )
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  padding: 5px 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  -webkit-box-shadow: -4px 6px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: -4px 6px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: -4px 6px 8px 0px rgba(34, 60, 80, 0.2);
  cursor: pointer;

  :hover {
    background-color: lightgray;
  }

  h3 {
    color: #9d9d9d;
  }
`
