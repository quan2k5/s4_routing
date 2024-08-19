'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import React from 'react';

export default function Page(props: any) {
    const [employees, setEmployees] = useState([]);
    const [findEmployee, setFindEmployee] = useState({ id: '', name: '', age: '' });
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
            setFindEmployee(find || { id: '', name: '', age: '' });
        }
    }, [employees, params.employeeId]);

    return (
        <div>
            <Link  href={`/B9Employee/${findEmployee.id}/projects`}>Projects</Link>
            <div>Chi tiết nhân viên</div>
            <p>Id: {findEmployee.id}</p>
            <p>Tên: {findEmployee.name ? findEmployee.name : 'Không tìm thấy tên'}</p>
            <p>Age: {findEmployee.age ? findEmployee.age : 'Không tìm thấy tuổi'}</p>
        </div>
    );
}
