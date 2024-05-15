import { useState } from "react";
import {useNavigate, useLoaderData} from 'react-router-dom'
import { toast } from "react-toastify";



const EditJob = () => {
  const job = useLoaderData()

  const [title, setTitle] = useState('');
  const [type, setType] = useState('Full-Time');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('Under $50K');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const navigate = useNavigate()

  return (
    <div>Editjob</div>
  )
}

export default EditJob