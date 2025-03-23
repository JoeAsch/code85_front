import { useForm } from 'react-hook-form';
//import ReactDOM from 'react-dom/client';
import './form.css';
import axios from 'axios';


export default function EntryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit =  async (data) => {
    try {
      const response = await axios.post('http://localhost:8000/wel/',data);
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form-control'>
      <label>Managers name:</label>
      <input type='text' name='Managers name' {...register('manager', {required: true })}/>
        {errors.manager && <p>"Manager name required"</p>}
      </div>
      <br></br>
      <div className='form-control'>
      <label htmlFor='dropdown'>Reason:</label>
      
      <select id='dropdown' {...register('reason', { required: true})}>
        <option value=''>Select...</option>
        <option value='Theft'>Theft</option>
        <option value='Bopis issue'>Bopis Issue</option>
        <option value='Cycle Count'>Cycle Count</option>
        <option value='IS4TC'>IS4TC</option>
        <option value='85Error'>Reverse Previous Error</option>
        <option value='Receiving'>Receiving or Transfer Error</option>
        <option value='Other'>Other</option>

      </select>
      </div>
      <br></br>
      <div className='form-control'>
      <label>Sku:</label>
      <input type='text' name='sku' {...register('sku', {required: true, maxLength: 9})} />
      {errors.manager && <p>"Sku required, max 9 numerals."</p>}
      </div>
      <br></br>
      <div className='form-control'>
      <label>Quantity:</label>
      <input type='text' name='quantity' {...register('quantity', {required: true})} />
      {errors.manager && <p>"Quantity required."</p>}
      </div>
      <br></br>
      <div className='form-control'>
      <label>Price:</label>
      <input type='number' step='.01' oninput="limitDecimalPlaces(event, 2)" name='price' {...register('price',{required: true})}/>
      {errors.manager && <p>"Price in decimal required"</p>}
      </div>
      <div className='form-control'>
      <label></label>
      <button type="submit">Enter</button>
      </div>
    </form>
    </div>
  );
}
