"use client"
import React from 'react'
export default function page(props:any) {
    const {params}=props;
  return (
    <div>Danh sách bài viêt của User Id:{params.UserId}</div>
  )
}
