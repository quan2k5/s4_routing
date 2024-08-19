'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import React from 'react';

export default function Page(props: any) {
    const [employees, setEmployees] = useState([]);
    const [findEmployee, setFindEmployee] = useState({ id: '', name: '', age: '',projects:[] });
    const { params } = props;

    useEffect(() => {
        const storedEmployees = localStorage.getItem('employees');
        if (storedEmployees) {
            setEmployees(JSON.parse(storedEmployees));
        }
    }, []);

    useEffect(() => {
        if (employees.length > 0) {
            const find = employees.find((e: any) => e.id == params.employeeId);
            setFindEmployee(find || { id: '', name: '', age: '',projects:[] });
        }
    }, [employees, params.employeeId]);

    return (
        <div>
            <div>Chi tiết dự án của  nhân viên có id{findEmployee.id}</div>
            {findEmployee.projects.map(function(e:any){
                return <p>{e}</p>
            })}
        </div>
    );
}
