import React from "react"
import styled from "styled-components"
import { SubmitHandler, useForm } from "react-hook-form"
import { gql, useMutation } from "@apollo/client"

interface Props {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

interface IFormData {
  title: string
  description: string
  status: string
}

const createTaskMutation = gql`
  mutation CreateTask(
    $id: String
    $title: String!
    $description: String!
    $status: String!
    $userId: String
  ) {
    createTask(
      id: $id
      title: $title
      description: $description
      status: $status
      userId: $userId
    ) {
      id
      title
      description
      status
    }
  }
`

export const AddTaskModal: React.FC<Props> = ({ showModal, setShowModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>()

  const [createTask, { data, loading, error }] = useMutation(createTaskMutation, {
    onCompleted: () => reset(),
  })

  const onSubmit: SubmitHandler<IFormData> = async ({ description, status, title }) => {
    try {
      await createTask({
        variables: {
          title: title,
          description: description,
          status: status,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  return showModal ? (
    <Overlay>
      {error && <ServerError>{error.message}</ServerError>}
      <CloseButton onClick={() => setShowModal(false)}>Close</CloseButton>
      <Container>
        <Title>Create Task</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Enter title" {...register("title", { required: true })} />
          {errors.title && <FormError>Title is required.</FormError>}
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            placeholder="Enter description"
            {...register("description", { required: true })}
          />
          {errors.description && <FormError>Description is required.</FormError>}
          <Label htmlFor="status">Status</Label>
          <Select
            id="status"
            placeholder="Choose status"
            {...register("status", { required: true })}
          >
            {errors.status && <FormError>Status is required.</FormError>}
            <option>TODO</option>
            <option>INPROGRESS</option>
            <option>REVIEW</option>
            <option>DONE</option>
          </Select>
          <Button type="submit">{loading ? "Creating Task..." : "Create Task"}</Button>
        </Form>
      </Container>
    </Overlay>
  ) : null
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
`

const Container = styled.div`
  max-width: 600px;
  height: 450px;
  width: 90%;
  border-radius: 4px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`

const Title = styled.h1`
  font-size: 40px;
  flex-grow: 1.5;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  flex-grow: 1.3;
`

const Input = styled.input`
  width: 100%;
  padding: 8px 15px;
  border: lightgray 1px solid;
  border-radius: 4px;
  margin-bottom: 20px;
`

const Select = styled.select`
  border-radius: 4px;
  width: 100%;
  padding: 5px 15px;
  border: lightgray 1px solid;
  margin-bottom: 20px;
`

const Button = styled.button`
  max-width: 130px;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: white;
  background-color: green;
`

const CloseButton = styled.button`
  display: hidden;
  position: absolute;
  top: 3rem;
  right: 3rem;
  color: white;
  font-size: 20px;

  :hover {
    opacity: 0.8;
  }
`

const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
`

const FormError = styled.span`
  color: #e45826;
  font-size: 16px;
  margin: -10px 0 10px;
`

const ServerError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  max-height: fit-content;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #f2fa5a;
  color: #4d77ff;
  z-index: 100;
  font-size: 25px;
`
