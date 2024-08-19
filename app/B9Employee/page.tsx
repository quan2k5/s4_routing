'use client'
import { log } from 'console';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Page() {
    const [employees, setEmployees]:any = useState([]);
    useEffect(() => {
        const storedEmployees = localStorage.getItem('employees');
        if (storedEmployees) {
            setEmployees(JSON.parse(storedEmployees));
        }
    }, [])    
    return (
        <ul>
            {employees.map(function(e:any){
                return<> 
                    <li>
                    <p>ID:{e.id}</p>
                    <p>Name:{e.name}</p>
                    <p>Age:{e.age}</p>
                    <Link href={`/B9Employee/${e.id}`}>employee detail</Link>
                </li>
                <br />
                </>
            })}

        </ul>
    );
}
