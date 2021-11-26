import React, { SyntheticEvent, useEffect, useState} from "react";
import Button from "./Button";
import Students from "./Students";
import Modal from "./Modal";
import AddStudent from "./AddStudent";
import {ModalTitleType, TStudent} from "../types";
import {studentsData} from "../utils";


export const StudentTable:React.FC<any> =()=>{
    const [students, setStudents] = useState<TStudent[]>([])
    const [student, setStudent] = useState<TStudent | undefined>()
    const [showModal, setShowModal] = useState<boolean>(false)
    const [modalTitle,setModalTitle] = useState<ModalTitleType>('Add Student')

    const onEdit = (data: TStudent) => {
        setModalTitle('Edit Student')
        setStudent(data)
        setShowModal(true)
    }

    const onDelete = (id: number) => {
        setStudents([...students.filter((s) => s.id !== id)])
    }

    const onAdd = () => {
        setModalTitle('Add Student')
        setShowModal(true)
    }

    const onCloseModal = () => {
        setShowModal(false)
        setStudent(undefined)
    }


    const onSave = (e: SyntheticEvent, data: TStudent) => {
        e.preventDefault()
        onCloseModal()
        const {length} = students
        if (length) {
            data.id = students[length - 1].id + 1
        } else {
            data.id = 1
        }
        setStudents([...students, data])
    }

    const onUpdate =(e:SyntheticEvent,data:TStudent)=>{
        e.preventDefault();
        onCloseModal();
        const {id}=data
        const editStudentsList = students.map((student)=>student.id===id?data:student)
        setStudents(editStudentsList)
    }

    useEffect(() => {
        setStudents(studentsData)
    }, [])

    return (
        <>
            <div className="Add-button" data-testid={"add-student-button"}>
                <Button name="Add Student" onClick={onAdd}/>
            </div>
            <Students students={students} onEdit={onEdit} onDelete={onDelete}/>
            <Modal show={showModal}
                   title={modalTitle}
                   children={<AddStudent student={student} onSave={onSave} onUpdate={onUpdate}/>}
                   onClose={onCloseModal}/>
        </>
    )
}
