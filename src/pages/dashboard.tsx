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
      }
    }
  `
  const { data, loading, error } = useQuery<{ tasks: Task[] }>(allTasks)

  const sections: string[] = ["Todo", "In progress", "Review", "Done"]

  return !loading ? (
    <Container>
      {sections.map((section, index) => {
        let filteredTasks = data ? data.tasks.filter((task) => task.title === section) : []
        return data && <TasksSection title={section} tasks={filteredTasks} />
      })}
    </Container>
  ) : (
    <div>Loading...</div>
  )
}

const Container = styled.div``

export default Dashboard
