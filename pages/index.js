import Layout from "@/Layout/Layout";
import Button from "@/components/Button";
import { useState } from "react";


export default function Home() {
  const [model, setModel] = useState([
    { title: "ثبت محصول", desc: "قبل از هرچیزی محصولات خود را ثبت کنید و برای آن ها عکس بگذارید تا به اسانی در سبد خرید درج شوند", },
    { title: "مدیریت زمان", desc: "به راحتی با ساخت سبد های خرید اختصاصی زمان خود را کاهش دهید و آن را به راحتی مدیریت کنید " },
    { title: "ثبت پروفایل", desc: "در کارت سبز پروفایل شما ثبت میشود و کسی جز شما نمی تواند وارد حساب کاربری شود , تمامی اطلاعات محفوظ  می باشد" },
    { title: "ایجاد سبد خرید اختصاصی", desc: "با ایجاد سبد خرید اختصاصی بدون نیاز به کاربران سبد خرید های اختصاصی بسازید و برای هرکدام یک لینک اختصای دریافت کنید" },
  ])
  return (
    <Layout className="font-bold">
      <header className="max-w-[1223px] mx-auto flex flex-col justify-center items-center relative p-6 gap-10 ">
        <h1 className="text-3xl font-semibold text-center z-20">سامانه مدیریت <span className="text-[#0182FE]">هوشمند</span> سفارش های اینترنتی</h1>
        <Button
          text="مشاهده ویدیو معرفی"
          className="bg-[#0182FE] hover:bg-[#0b56ac] transition z-20 px-7 py-3 text-white rounded-full text-sm flex items-center gap-2"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </svg>
          }
        />
        <p className="text-sm font-light text-neutral-500 text-center z-20  max-w-[809px]">
          کارت ساز امده تا دیگر نیازی به یادداشت سفارش های خود در سر رسید یا دفتر نباشید و به راحتی سفارش های خود را مدیریت کنید و آن ها را تعییت وضعیت کنید حتی به راحتی برگه پرینت ارسال کنید و آن ها را اختصاصی کنید
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-neutral-500 z-20">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
        <span className="w-full h-[8px] z-20 lg:mt-10">
          <img src="/Assets/Header/line.png" className="w-full h-full" />
        </span>
        <span className="absolute lg:w-[300px] z-10 ">
          <img src="/Assets/Header/CartImg.png" className="w-full" />
        </span>
      </header>
      <main className="max-w-[1223px] mx-auto flex flex-col p-6">
        <section className="flex flex-col justify-center items-center gap-6">
          <span className="bg-Orange text-sm px-5 py-2 rounded-full font-light">حالت نمایشی</span>
          <h4 className="font-bold text-2xl text-center">سیستمی کاملا تحت وب و انلاین</h4>
          <p className="text-sm text-center text-neutral-500 max-w-[809px]">سیستم کارت ساز کاملا تحت وب اجرا شده است و نیازی به استفاده از هیچ سخت افزار خاصی برای دیتا های خود ندارید و به راحتی مشتریان را مدیریت کنید و سفارش  های خود را به موقع ارسال و جمع اوری کنید</p>
          <span className="w-full relative max-w-[809px]">
            <img src="/Assets/Main/Frame.svg" className="w-full object-cover z-10" />
            <img src="/Assets/Main/Mobile.svg" className="absolute z-20 left-0 top-1/4 w-[25%]" />
          </span>
        </section>
        <section className="flex flex-col justify-center items-center gap-6">
          <span className="bg-Orange text-sm px-5 py-2 rounded-full font-light">امکانات</span>
          <h4 className="font-bold text-2xl text-center">جدید ترین مدل مدیریت سبد خرید ها</h4>
          <p className="text-sm text-center text-neutral-500 max-w-[809px]">بیش از 100 ها فروشگاه سبد خرید های خود را در کارت ساز با امکانات متفاوت این سامانه مدیریت میکنند</p>
          <div className="grid grid-cols-4 gap-4">
            {model.map((item) => {
              return (
                <div className="col-span-4 md:col-span-2 lg:col-span-1 border h-[348px] border-neutral-300 rounded-lg flex flex-col gap-8 p-6 justify-center items-center">
                  <span className="bg-[#DFEFFF] w-20 h-20 shadow-color rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-[#0182FE]">
                      <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="text-sm text-neutral-400 text-center">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </Layout>
  )
}
