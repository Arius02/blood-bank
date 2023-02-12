import doc from "../img/donate.PNG"
const DonateNow = () => {
  return (
    <div>
      <figure className='text-center'>
        <img src={doc}
          className="w-[100%] shadow-xl rounded-lg shadow-[#FFE9E8] "
          alt="blood backet" />
      </figure>
      <figcaption className='text-[#8D414E]
         mt-5 md:text-2xl text-xl text-center font-semibold'>
        قم بالتسجيل والتواصل مع المتبرعين الأن
      </figcaption>
      <button className='block  text-[#FE5959]
         border-[#FE5959] border-[1px] px-3 py-1 text-lg m-auto text-semibold mt-5 '>
        قائمة المتبرعين</button>
    </div>
  )
}

export default DonateNow