import {SyntheticEvent} from "react";

export type TStudent = {
    id: number;
    firstName: string;
    lastName: string;
    dob: string;
    course: string;
    hours: string;
    price: string;
}

export type StudentsProps = {
    students: TStudent[];
    onEdit: (data: TStudent) => void;
    onDelete: (id: number) => void;
}

export type StudentProps = {
    student: TStudent;
    onEdit: () => void;
    onDelete: () => void;
}

export interface TAddStudentProps {
    student?: TStudent;
    onSave?: (e: SyntheticEvent, data: TStudent) => void;
    onUpdate?: (e: SyntheticEvent, data: TStudent) => void;
}

export type ModalTitleType ='Add Student' | 'Edit Student'