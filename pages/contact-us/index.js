import Layout from '@/Layout/Layout'
import React from 'react'

const ContactUs = () => {
    return (
        <Layout>
            <div className='container mx-auto flex items-center justify-around md:gap-56 gap-10 flex-col md:flex-row  p-6'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-primary text-3xl'>تماس با ما</h1>
                    <p>جهت ارتباط با ما با یکی از مسیر های زیر میتوانید با ما ارتباط برقرار کنید:</p>
                    <div className='flex flex-col gap-3'>
                        <div className='border cursor-pointer border-pink-700 flex justify-center gap-5 items-center p-5 rounded-lg'>
                            <span>
                                <img src='/Assets/contact-us/instagram.svg' className='stroke-pink-700' />
                            </span>
                            <p className='text-pink-700'>پیام در دایرکت اینستاگرام</p>
                        </div>
                        <div className='border cursor-pointer border-green-400 flex justify-center gap-5 items-center p-5 rounded-lg'>
                            <span>
                                <img src='/Assets/contact-us/whatsapp.svg' className='stroke-green-400' />
                            </span>
                            <p className='text-green-400'>پیام در واتساپ</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                      <p>همچنین میتوانید از طریق ایمیل زیر با ما ارتباط برقرار کنید</p>
                      <a href='/' className='text-primary underline text-xl'>cartsaz@gmail.com</a>
                    </div>
                </div>
                <div>
                    <img src='/Assets/contact-us/messagge.svg'/>
                </div>
            </div>
        </Layout>
    )
}

export default ContactUs