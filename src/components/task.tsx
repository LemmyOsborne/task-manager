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
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 250px;
`
