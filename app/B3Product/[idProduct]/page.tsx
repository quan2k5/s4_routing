"use client"
import { log } from 'console'
import React from 'react'
export default function page(props:any) {
    const {params}=props;
  return (
    <div>Product id:{params.idProduct}</div>
  )
}
