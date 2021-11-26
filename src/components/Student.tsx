import React from "react";
import Button from './Button'
import {StudentProps} from "../types";

const Student:React.FC<StudentProps> = ({student, onEdit, onDelete}) => {
    return (
        <tr data-testid="student-row">
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.dob}</td>
            <td>{student.course}</td>
            <td>{student.hours}</td>
            <td>{student.price}</td>
            <td className="Student-actions">
                <Button name="Edit" buttonType="link" onClick={onEdit}/>
                <Button name="Delete" buttonType="link" onClick={onDelete}/>
            </td>
        </tr>
    )
}

export default Student
