
import React from "react";



export default function Form(props) {

    const { values, submit, change, errors, disabled } = props;

    const onChange = evt =>{
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    } 
    
    const onSubmit = evt =>{
      evt.preventDefault();
      submit();
    }
  
    return (
        <form className='Form' onSubmit={onSubmit}>
            <div className='Errors'>
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>
            </div>
            <div className='Inputs'>
                <label>
                    <input
                    type='text'
                    name='username'
                    value={values.name}
                    placeholder='Username'
                    maxLength='45'
                    onChange={onChange}
                    />
                </label>

                <label>
                    <input
                    type='email'
                    name='email'
                    value={values.email}
                    maxLength='75'
                    placeholder='E-mail'
                    onChange={onChange}
                    />
                </label>

                <label>
                    <input
                    type='password'
                    name='password'
                    value={values.password}
                    maxLength='20'
                    placeholder='Password'
                    onChange={onChange}
                    />
                </label>

                <label>  --Terms of Service--  
                    <input
                        type="checkbox"
                        name='tos'
                        checked={values.tos}
                        onChange={onChange}
                    />
                </label>

                <div className='submit'>
                    <button id='btn' disabled={disabled}>Submit</button>
                </div>

            </div>
        </form>

    );
  }
  