'use client';
import { cn } from '@/constrants/utils';
import React, { useState } from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;


export default function Button({...props}: ButtonProps) {
    const [pending, setPending] = useState(false);
  return (
    <button className={cn("inline-block w-auto bg-blue-300 py-2 px-4 my-4 border-solid rounded border-2 border-slate-300", props.className, {"bg-gray-500": pending})}>{props.title}</button>
  )
}