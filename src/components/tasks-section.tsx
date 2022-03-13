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
        {tasks?.map(({ id, title, description, createdAt }) => (
          <TaskComponent
            key={id}
            id={id}
            title={title}
            description={description}
            createdAt={createdAt}
          />
        ))}
      </Body>
    </Container>
  )
}

const Container = styled.section`
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  border-radius: 4px;
`

const Header = styled.header`
  margin-bottom: 20px;
  color: #9d9d9d;
  font-weight: 600;
`

const Body = styled.div``
