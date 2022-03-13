import React from "react"
import styled from "styled-components"
import { Header } from "./header"

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <div style={{ marginTop: "100px" }}>{children}</div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
