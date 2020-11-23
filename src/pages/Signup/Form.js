import React, {useState} from 'react'
import FormSignup from './formSignup';
import FormSuccess from './formSuccess';
import image1 from '../../assets/Login.svg';
import './Form.css';

 const Form = () => {

    const[isSubmit, setIsSubmit] = useState(false);

    function submitForm() {
        setIsSubmit(true);
    }
    return (
        <>
            <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={image1} alt='spaceship' />
          </div>
        
        {!isSubmit ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
        </>
    )
}


export default Form