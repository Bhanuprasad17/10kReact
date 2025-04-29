import { Component } from "react";
import Child from "./Child";
import { formData } from "../../data/form";


class Parent extends Component{
    render(){
        let labels = formData.studentFormData.labels
        let fields = formData.studentFormData.fields
        // console.log(labels)
        // console.log(fields)
        return <>
           {/* <Child name = {"Bhanuprasad"}/> */}
           <Child labels = {labels} fields = {fields}/>
        </>
    }
}

export default Parent