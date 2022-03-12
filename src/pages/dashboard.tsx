import { gql, useQuery } from "@apollo/client"
import { Task } from "@prisma/client"
import React from "react"

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

  return (
    <>
      {data?.tasks.map((task) => (
        <>
          <div>{task.title}</div>
          <div>{task.description}</div>
        </>
      ))}
    </>
  )
}

export default Dashboard
