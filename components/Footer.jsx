import Button from "./Button";

const Footer = () => {
  return (
    <div>
      <section className="w-full bg-[#171F26] mt-5">
        <div className="max-w-[1223px] mx-auto flex justify-center items-center flex-col gap-5 py-10 px-6">
          <h4 className="text-white text-[44px] text-center">
            هم اکنون ثبت نام کنید{" "}
          </h4>
          <p className="text-neutral-100 text-base text-center">
            ثبت نام در کارت ساز رایگان است , همین الان ثبت نام کنید و کارت ساز
            را تست کنید
          </p>
          <Button
            text="ثبت نام رایگان"
            className="bg-secondary text-white rounded-full px-7 py-3 text-sm flex items-center gap-3"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 text-white"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
              </svg>
            }
          />
        </div>
      </section>
      <div className="max-w-[1223px] mx-auto mt-10 p-6 flex flex-col gap-10">
        <div className="flex flex-col justify-start items-start gap-4">
          <h4 className="text-2xl">
            <span className="text-primary">کارت ساز </span>چیست ؟
          </h4>
          <p className="text-neutral-500 text-base leading-8">
            کارت ساز یک سیستم نوین است که به شما اجازه میدهد برای مشتریان خود
            سبد خرید اختصاصی ایجاد کنید و سپس با ارسال لینک از آن ها بخواهید که
            سبد خرید خود را کامل کنند . در این حالت شما نیاز به یادداشت موارد
            خواسته شده ندارید و به راحتی میتوانید سفارش های خود را ثبت کنید .
            کارت ساز امده است تا زمان شما مدیریت شود , مشتریان خود را رهگیری
            کنید , سفارشات را طبقه بندی کنید . کارت ساز ابتدای مسیر خود میباشد و
            قصدش کمک به کسب و کار های نوپا و کوچک بر بستر شبکه های اجتماعی
            همانند اینستگرام , تلگرام و واتساپ می باشد{" "}
          </p>
        </div>
        <span className="w-full ">
          <img src="/Assets/Header/line.png" alt="" className="w-full" />
        </span>
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <div className="flex items-center gap-10">
            <span>
              <img src="/Assets/Navbar/Logo.png" alt="" />
            </span>
            <p className="text-neutral-500">کارت ساز - 1402</p>
          </div>
          <dir className="flex items-center gap-5">
            <span className="w-10 h-10 flex justify-center items-center rounded-full border border-neutral-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-neutral-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span className="w-10 h-10 flex justify-center items-center rounded-full border border-neutral-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-neutral-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.25 6a.75.75 0 00-1.5 0v4.94l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V9.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </dir>
        </div>
      </div>
    </div>
  );
};

export default Footer;
