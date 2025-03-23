import { useForm } from 'react-hook-form';
import './form.css';
import axios from 'axios';


export default function RemoveForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    try {
      
      console.log(data)
      const response = axios.delete('http://localhost:8000/wel/',{data});
      console.log('Success:', response.status);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form-control'>
      <label>Record id:</label>
      <input type='text' name='Record id' {...register('data', {required: true })}/>
        {errors.manager && <p>"id required"</p>}
      </div>
      </form>
    </div>
  );
}
