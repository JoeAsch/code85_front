import { useForm } from 'react-hook-form';
import React,{ useState} from 'react';
import ReactDOM from 'react-dom/client';
import './form.css';
import axios from 'axios';
import { useId } from 'react';


export default function DelForm(){

    const id = useId();
    
        return (
          <div>
          <label htmlFor={id}>Please specify:</label>
          <input id={id} onInput={e => (e.target.value)}/>
          </div>
        );
      }

