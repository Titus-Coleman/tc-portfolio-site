import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import { useTsController, createTsForm, createUniqueFieldSchema } from '@ts-react/form'

interface TextFieldProps {
  label: string;
}

function TextField(props: TextFieldProps) {
  const { field, error } = useTsController<string>();
  return (
    <div className={styles.inputDiv}>
      <input
        className={styles.formInput} 
        type={'text'}
        value={field.value}
        onChange={(e) => {
          field.onChange(e.target.value);
        }}
        />
        <label className={styles.formLabel} >{props.label ? props.label : ""}</label>
        {error?.errorMessage && <span className={styles.formError}>{error?.errorMessage}</span>}
    </div>
  )
}

function TextAreaField(props: TextFieldProps) {
  const { field, error } = useTsController<string>();
  return (
    <div className={styles.inputDiv_msg}>
      <textarea
        className={styles.msgForm}
        value={field.value}
        onChange={(e) => {
          field.onChange(e.target.value);
        }}
        />
        <label className={styles.msgLabel}>{props.label ? props.label : ""}</label>
        {error?.errorMessage && <span className={styles.formError}>{error?.errorMessage}</span>}
    </div>
  )
}

const TextAreaSchema = createUniqueFieldSchema(z.string().min(10, "Hmm, can you give me more details please?"), "id");

const mapping = [
  [z.string(), TextField],
  [TextAreaSchema, TextAreaField],
] as const;

const MyForm = createTsForm(mapping);

const schema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  company: z.string(),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string(),
  message: TextAreaSchema,
});


type Schema = z.infer<typeof schema>;

function ContactMe() {
  useForm<Schema>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: Schema) => {
    
    console.log(data)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
       console.log("yay")
      } else {
        console.error(response);
      }
    }
    catch (error) {
      console.error(error);
    }
  };


  return (
    <>
    <hr id='contact'
      className={styles.hr}/>
      <h3 className={styles.contactTitle}>Contact</h3>
    <div className={styles.contactBox}>
    <MyForm 
      schema={schema}
      
      props={
        {
          firstname: {
            label: "First Name"
          },
          lastname: {
            label: "Last Name"
          },
          company: {
            label: "Company"
          },
          email: {
            label: "Email Address"
          },
          subject: {
            label: "Subject"
          },
          message: {
            label: "Message"
          },
        }
      }
      onSubmit={onSubmit}
      renderAfter={() => <button 
        className={styles.formBtn}  
        type="submit">Submit</button>}
      />

    </div>
    </>
  );
};

export default ContactMe