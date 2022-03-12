import React from "react"
import styled from "styled-components"
import { TaskComponent } from "./task"

interface Props {
  title: string
  tasks: Task[]
}

export const TasksSection: React.FC<Props> = ({ title, tasks }) => {
  return (
    <Container>
      <Header>{title}</Header>
      <Body>
        {tasks.map(({ id, title, description }) => (
          <TaskComponent key={id} id={id} title={title} description={description} />
        ))}
      </Body>
    </Container>
  )
}

const Container = styled.section`
  background-color: rgba(500, 500, 500, 0.4);
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  padding: 10px 5px;
`

const Body = styled.div``
