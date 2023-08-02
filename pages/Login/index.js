import React, { useState } from 'react'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const Login = () => {
    const [phone, setPhone] = useState('');
    return (
        <div className='w-full h-[100vh] flex justify-center items-center flex-col gap-10 p-6'>
            <span>
                <img src='/Assets/Login/Logo.svg' />
            </span>
            <p className='font-semibold'>ورود/ثبت نام فروشگاه</p>
            <form className='flex flex-col items-center gap-5'>
                <label className='font-light text-center'>جهت ورود به پنل ابتدا شماره تماس خود را وارد کنید</label>
                <div className='w-full'>
                    <PhoneInput
                        defaultCountry="ir"
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                        inputStyle={{
                            width: "100%",
                        }}
                        placeholder='شماره تماس خود را وارد کنید'
                    />
                </div>
                <button className='bg-primary w-full text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition'>ورود</button>
            </form>
        </div>
    )
}

export default Login