'use client'
import React, { ChangeEvent } from "react"

type SearchInputProps ={
    value : string;
    placeholder: string;
    handleChange : (e:ChangeEvent<HTMLInputElement>)=>void;
}
export function SearchInput(props:SearchInputProps){
    return(
        <input
            value={props.value}
            type='search'
            className="bg-green-100 p-3"
            placeholder={props.placeholder}
            onChange={props.handleChange}
        />
    )
}