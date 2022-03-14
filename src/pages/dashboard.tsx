import { gql, useQuery } from "@apollo/client"
import { Task } from "@prisma/client"
import { TasksSection } from "components/tasks-section"
import React from "react"
import styled from "styled-components"

const Dashboard = () => {
  const allTasks = gql`
    query {
      tasks {
        id
        title
        description
        status
        createdAt
      }
    }
  `
  const { data, loading, error } = useQuery<{ tasks: Task[] }>(allTasks)

  const sections: string[] = ["TODO", "INPROGRESS", "REVIEW", "DONE"]

  return !loading ? (
    <Container>
      {sections.map((section, index) => {
        let filteredTasks = data ? data.tasks.filter((task) => task.status === section) : []
        return data && <TasksSection key={index} title={section} tasks={filteredTasks} />
      })}
    </Container>
  ) : (
    <div>Loading...</div>
  )
}

const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(100px, 300px));
  column-gap: 20px;
`

export default Dashboard
