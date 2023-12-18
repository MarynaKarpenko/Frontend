//https://react-hook-form.com/docs/useform/register

import {useForm} from 'react-hook-form'

export default function Form(){

    let {
        register,
        handleSubmit, 
        formState: {errors},
        reset,
        watch
    } = useForm({mode: 'onChange'})

    let onSubmit =(data) => {
        console.log(data)
        reset()
    }

    //console.log(watch('last_name'));

    let first_name_input = register('first_name', {
                        required: 'First name is required',
                        minLength: {
                            value: 3,
                            message: 'Minimum first name lenght - 3 characters'
                        },
                        pattern: {
                            value: /^[A-ZA-Я]/g,
                            message: 'Имя должно начинаться с заглавной буквы'
                        }
                    })

    let last_name_input = register('last_name', {
                        required: 'Last name is required',
                        maxLength: {
                            value: 15,
                            message: 'Maximum last name lenght - 15 characters'
                        }
                    })

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label> First name: 
                    <input {...first_name_input} className={errors.first_name && 'inp_error'}/>
                </label>
                {errors.first_name && <p style={{color: 'red'}}>{errors.first_name.message}</p>}
            </div>
            <div>
                <label> Last name: 
                    <input {...last_name_input} className={errors.last_name && 'inp_error'}/>
                </label>
                {errors.last_name && <p style={{color: 'red'}}>{errors.last_name.message}</p>}
            </div>
            <div>
                <input type="submit"/>
            </div>
        </form>
    )
}