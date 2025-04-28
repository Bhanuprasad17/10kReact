import React from "react";
import { formData } from "../data/form";
import "../styles/StudentForm.css";

const StudentForm = () => {
  // console.log(formData.studentFormData.labels)
  // console.log(formData.studentFormData.fields)
  const labels = formData.studentFormData.labels;
  const fields = formData.studentFormData.fields;
  console.log(labels);
  console.log(fields);
  return (
    <>
      <form action="">
        {fields.map((field, index) => {
          // return console.log(field)
          return (
            <>
              <label htmlFor={field.id}>{labels[index]}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                id={field.type}
              />
            </>
          );
        })}
        <button>submit</button>
      </form>
    </>
  );
};

export default StudentForm;
