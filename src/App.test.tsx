import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from "./components/Button";
import Modal from "./components/Modal";
import Student from "./components/Student";

test('renders the  button component with name provided', () => {
  render(<Button name={"Add Student"} />);
  const buttonElement = screen.getByText(/Add Student/i);
  expect(buttonElement).toBeInTheDocument();
});

test('Button component role should be button', () => {
  render(<Button name={"Add Student"} />);
  const buttonElement = screen.getByRole("button",{name:"Add Student"});
  expect(buttonElement).toBeInTheDocument();
});

test('renders the modal correctly', () => {
  render(<Modal show={true} title={"Add Student"} children={<p>Modal content</p>}/> );
  const ModalElement = screen.getByTestId('student-modal');
  const ModalContent = screen.getByText('Modal content')
  expect(ModalElement).toBeInTheDocument();
  expect(ModalContent).toBeInTheDocument();
});

test('renders the student table component correctly', () => {
  const student ={id:1,firstName:"Jennifer",lastName:"Amah",dob:"12.08.21",course:"Engineering",hours:"4",price:"5000"}
  const editStudent = ()=>():void=>{}
  const deleteStudent =()=>():void=>{}
  render(<Student student={student} onEdit={editStudent} onDelete={deleteStudent} /> );
  const StudentElement = screen.getByTestId('student-row');
  const StudentFirstName = screen.getByText(student.firstName)
  const StudentLastName = screen.getByText(student.lastName)
  const StudentDob = screen.getByText(student.dob)
  const StudentCourse = screen.getByText(student.course)
  const StudentHours = screen.getByText(student.hours)
  const StudentPrice = screen.getByText(student.price)
  expect(StudentElement).toBeInTheDocument();
  expect(StudentFirstName).toBeInTheDocument();
  expect(StudentLastName).toBeInTheDocument();
  expect(StudentDob).toBeInTheDocument();
  expect(StudentCourse).toBeInTheDocument();
  expect(StudentHours).toBeInTheDocument();
  expect(StudentPrice).toBeInTheDocument();
});

