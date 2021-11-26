import React, {FormEvent,useEffect, useState} from "react";
import {TAddStudentProps, TStudent} from '../types'
import Button from './Button'

const defaultStudent: TStudent = {
    id: 0,
    firstName: '',
    lastName: '',
    dob: '',
    course: '',
    hours: '',
    price: ''
}

export const AddStudent:React.FC<TAddStudentProps> = ({student, onSave,onUpdate}) => {

    const [data, setData] = useState<TStudent>(defaultStudent)

    useEffect(() => {
        setData({...(student ?? defaultStudent)})
    }, [student])

    const onInputChange = (e: FormEvent<HTMLInputElement>) => {
        const {id: key, value} = e.currentTarget
        setData({...data, [key]: value})
    }

    return (
        <>
            <form className="Add-form">
                <div>
                    <label>First Name</label>
                    <input type="text" value={data.firstName} id="firstName" onInput={onInputChange}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={data.lastName} id="lastName" onInput={onInputChange}/>
                </div>
                <div>
                    <label>Date of Birth</label>
                    <input type="text" value={data.dob} id="dob" onInput={onInputChange}/>
                </div>
                <div>
                    <label>Course</label>
                    <input type="text" value={data.course} id="course" onInput={onInputChange}/>
                </div>
                <div>
                    <label>Hours</label>
                    <input type="text" value={data.hours} id="hours" onInput={onInputChange}/>
                </div>
                <div>
                    <label>Price €</label>
                    <input type="text" value={data.price} id="price" onInput={onInputChange}/>
                </div>
            </form>

            <div className="Modal-footer">
                {
                    student ?<Button name={'Update'} onClick={(e)=> onUpdate?.(e, data)}/>:
                        <Button name={'Save'} onClick={(e)=> onSave?.(e, data)}/>
                }

            </div>
        </>
    )
}

export default AddStudent
