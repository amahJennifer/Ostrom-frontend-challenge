import React from "react";
import './Students.css'
import {StudentsProps, TStudent} from '../types'
import Student from './Student'


export const Students: React.FC<StudentsProps> = ({students, onEdit, onDelete}) => {

    const editStudent = (studentData :TStudent) =>():void=> {
        onEdit(studentData)
    }

    const deleteStudent =(studentId:number)=>():void=>{
        onDelete(studentId)
    }

    return (
        <div className="Students-table-wrapper">
            <table className="Students-table">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Course</th>
                    <th>Hours</th>
                    <th>Price</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {students.map((student) => (<Student student={student} onEdit={editStudent(student)}
                                                     onDelete={deleteStudent(student.id)} key={student.id}/>
                ))}
                </tbody>
            </table>
            {!students.length && <p className="w-full p-3 text-xs text-center">No Student</p>}
        </div>
    )
}

export default Students
