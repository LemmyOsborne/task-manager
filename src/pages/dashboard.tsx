import { gql, useQuery } from "@apollo/client"
import { Task } from "@prisma/client"
import React from "react"
import { NexusGenObjects } from "../../node_modules/@types/nexus-typegen"

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
  const { data, loading, error } = useQuery<{ tasks: NexusGenObjects["Task"][] }>(allTasks)

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
