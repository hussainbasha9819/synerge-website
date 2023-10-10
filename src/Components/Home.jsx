import React from 'react'

const Home = () => {
  const OP=()=>{
document.getElementById("wrong").style.display="flex"
document.getElementById("more").style.display="none"
document.getElementById("CONTACT").style.display="flex"
  }
  const CL=()=>{
document.getElementById("more").style.display="flex"
document.getElementById("wrong").style.display="none"
document.getElementById("CONTACT").style.display="none"
  }
  const we=()=>{
    document.getElementById("Vision").style.display="none"
    document.getElementById("vedio").style.display="none"
    document.getElementById("partners").style.display="flex"
    document.getElementById("wes").style.display="flex"
  }
  const Work=()=>{
    document.getElementById("Vision").style.display="none"
    document.getElementById("vedio").style.display="none"
    document.getElementById("partners").style.display="none"
    document.getElementById("wes").style.display="none"
    document.getElementById("desk").style.display="flex"
    document.getElementById("space").style.display="flex"
  }
  const PRIVATE=()=>{
    document.getElementById("Vision").style.display="none"
    document.getElementById("vedio").style.display="none"
    document.getElementById("partners").style.display="none"
    document.getElementById("wes").style.display="none"
    document.getElementById("desk").style.display="none"
    document.getElementById("space").style.display="none"
    document.getElementById("Corporate").style.display="flex"
    document.getElementById("Director").style.display="flex"
  }
  const Conference=()=>{
    document.getElementById("Vision").style.display="none"
    document.getElementById("vedio").style.display="none"
    document.getElementById("partners").style.display="none"
    document.getElementById("wes").style.display="none"
    document.getElementById("desk").style.display="none"
    document.getElementById("space").style.display="none"
    document.getElementById("Corporate").style.display="none"
    document.getElementById("Director").style.display="none"
    document.getElementById("2-4 Seater").style.display="flex"
    document.getElementById("7-12 Seater").style.display="flex"
  }
  return (
    <>
    <div  className="w-full h-[410vh] phone:w-full phone:h-[380vh]   relative flex flex-col  ">
<div className="w-full h-[120vh] phone:w-full phone:h-[60vh] phone:flex phone:flex-col flex flex-col bg-[url('https://cofynd-staging.s3.ap-south-1.amazonaws.com/images/original/9b55daf637ce6177ccbff32176a1a561e293bfee.jpg')] bg-no-repeat bg-cover bg-center cursor-pointer ">
<div id='Nav' className="w-full h-[50px] phone:w-full phone:h-[50px] phone:flex phone:items-center phone:justify-between  flex items-center justify-between  ">
<img className='w-[15%] ml-20 phone:ml-10 phone:w-[20%] ' src="https://www.synergeworkspace.com/images/logo.png" alt="" />
<i onClick={OP} id='more'  className="Icon fa-solid fa-bars text-4xl mr-20 phone:mr-10 phone:text-2xl  "></i>
<i onClick={CL} id='wrong' className="Icon fa-solid fa-xmark text-5xl mr-20 phone:mr-10 phone:text-2xl hidden "></i>
</div>
<div className='w-full phone:w-full phone:h-[45vh] phone:flex phone:flex-col phone:items-end phone:justify-end phone:pr-10 h-[300px] flex flex-col items-end justify-end pr-20 '>
  <h1 className='text-6xl phone:text-lg font-bold text-slate-50 '>Together We Create</h1>
  <img className='w-[25%] phone:w-[27%] ' src="https://www.synergeworkspace.com/images/logo.png" alt="" />
</div>
</div>
<div id='Vision' className="w-full h-[90vh] phone:w-full  phone:h-[100vh] phone:gap-1 phone:absolute phone:top-[15.8%] phone:flex phone:flex-col phone:items-center phone:justify-center     flex    justify-center absolute top-[24%]  ">
  <div className="w-[30%] phone:w-[50%] phone:h-[30vh] phone:flex phone:flex-col phone:items-center h-[80vh] shadow-lg  flex flex-col items-center hover:bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CiAtYzEXDZhny43_NIDij5mqwKQi7pt3wGLPiLieNd1KTBTZeaYI-neWE2dD2s-snhc&usqp=CAU')] hover:bg-no-repeat hover:bg-current hover:bg-cover   bg-white ">
  <i className=" fa-regular fa-eye text-5xl mt-6 text-gray-500 phone:text-3xl phone:mt-5 "></i>
  <h1 className='Name text-2xl font-bold mt-7 phone:text-xl phone:mt-0 '>VISION</h1>
  <p className='text-3xl font-bold text-gray-400 mt-28 phone:text-lg phone:mt-0 '>An Affordable Space </p>
  <p className='text-3xl font-bold text-gray-400 phone:text-lg '>For All</p>
  </div>
  <div className="w-[30%] phone:w-[50%] phone:h-[35vh] phone:flex phone:flex-col phone:items-center h-[80vh] shadow-lg items-center   flex flex-col bg-white hover:bg-[url('https://tribune-reloaded.s3.amazonaws.com/media/images/1688067-pphotcoffeerfistockx-1523983605/1688067-pphotcoffeerfistockx-1523983605.jpg')] bg-no-repeat bg-cover bg-center cursor-pointer ">
  <i className="fa-regular fa-lightbulb text-5xl mt-6 text-gray-500 phone:text-3xl phone:mt-5 "></i>
  <h1 className='Name text-2xl font-bold mt-7 '>MISSION</h1>
  <span className='text-3xl phone:text-lg phone:flex phone:flex-col phone:items-center phone:justify-center phone:mt-1 flex flex-col items-center justify-center mt-28 '>
  <p className='flex  text- font-bold text-gray-400 '> We In<h1 className='Name'>S</h1>pire Ever<h1 className='Name'>Y</h1>one</p>
  <p className='flex text- font-bold text-gray-400'>to U<h1 className='Name'>N</h1>ite, L<h1 className='Name'>E</h1>ad,</p>
  <p className='flex text- font-bold text-gray-400'>C<h1 className='Name'>R</h1>eate & <h1 className='Name'>G</h1>row</p>
  <p className='flex text- font-bold text-gray-400'>Tog<h1 className='Name'>E</h1>ther</p>
  </span>
  </div>
  <div className="w-[30%] phone:w-[50%] phone:h-[30vh] phone:flex phone:flex-col phone:items-center h-[80vh]  shadow-lg  flex flex-col items-center bg-white hover:bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbLuN-RnWD2BLptV7pKpKkNM2h2UpM9tP2cdY-NoDcfPdQ0C4HrVm9q0Ck-n6hJNAcK4&usqp=CAU')] hover:object-cover bg-no-repeat bg-cover bg-center cursor-pointer ">
  <i className="fa-solid fa-rocket text-5xl mt-6 text-gray-500 phone:text-3xl phone:mt-5"></i>
  <h1 className='Name text-2xl font-bold mt-7 phone:text-xl phone:mt-0 '>SUCCESS</h1>
  <p className='text-3xl font-bold text-gray-400 mt-28 phone:text-lg phone:mt-0 '>Our Success Reflects</p>
  <p className='text-3xl font-bold text-gray-400 phone:text-lg  '>Your Growth</p>
  </div>
</div>
<div id='wes' className="w-full phone:w-full phone:h-[70vh]  phone:flex-col phone:items-center phone:justify-center phone:gap-1 phone: h-[80vh] hidden flex-col gap-3 items-center justify-center  ">
<h1 className='text-5xl font-semibold phone:text-3xl '>we</h1>
  <span className='w-[90%] h-[70vh] flex flex-col gap-10 phone:w-[90%] phone:h-[70vh] phone:flex phone:flex-col phone:gap-5  '>
  <p className='phone:text-[13px] '>We found SYNERGE for people just like us: curious, hardworking, sociable entrepreneurs. People who want to focus on creating great, innovative products and businesses without worrying about rent, electricity or running out of coffee.</p>
  <p className='phone:text-[13px] '>We have been designing and building offices for our clients. We are extremely well resourced, experienced and passionate about delivering exceptional services. There is no uncertainty in what we wish to achieve. We deliver on our promises. Everything we do is tailored exact requirements. We believe that everyone deserves a great environment to work in and we create it.</p>
  <p className='phone:text-[13px] '>We have been designing and building offices for our clients. We are extremely well resourced, experienced and passionate about delivering exceptional services. There is no uncertainty in what we wish to achieve. We deliver on our promises. Everything we do is tailored exact requirements. We believe that everyone deserves a great environment to work in and we create it.</p>
  </span>
</div>
<div id='vedio' className='w-full h-[70vh] phone:w-full phone:h-[50vh] phone:flex phone:flex-col phone:top-[42%] phone:bg-red-400 phone:absolute phone:items-center phone:justify-center flex flex-col   top-[46.5%]   absolute items-center justify-center '>
  <h1 className='text-2xl font-bold text-gray-400  '>WATCH THE VIDEO</h1>
  <i className=" Icon fa-regular fa-circle-play mt-[40px]  text-[100px] "></i>
</div>
<div id='partners' className="w-full hidden h-[80vh]  phone:w-full phone:h-[79vh]   flex-col  ">
<span className='w-full h-[100px] flex items-center  justify-center phone:w-full phone:h-[60px] phone:flex phone:flex-col phone:items-center phone:justify-center '>  <h1 className='text-5xl phone:text-2xl font-medium '>Partners</h1>
</span>
  <span className='w-full h-[50vh] phone:w-full phone:h-[73vh]  phone:flex phone:flex-col phone:items-center phone:justify-center  flex items-center justify-center gap-10  '>
    <img className='w-[400px] h-[250px] ' src="https://www.synergeworkspace.com/images/partner_1.png" alt="" />
    <img className='w-[400px] h-[250px]' src="https://www.synergeworkspace.com/images/partner_2.png" alt="" />
  </span>
</div>
<div id='desk' className="w-full h-[70vh] hidden phone:w-full  phone:h-[74.5vh] phone:hidden phone:flex-col phone:items-center phone:justify-center  ">
  <div className="w-1/2 phone:w-[70%] phone:h-[32vh] phone:flex phone:items-center phone:justify-center h-[70vh] flex items-center justify-center ">
    <img className='w-[500px] h-[350px] phone:w-[400px] phone:h-[150px] ' src="https://www.synergeworkspace.com/image-path/pictures/open%20hot%20desk.png" alt="" />
  </div>
  <div className='w-1/2 h-[70vh] phone:w-[70%] phone:h-[42vh] phone:flex phone:items-center phone:justify-center flex items-center justify-center '>
    <span className='Span w-[95%] h-[55vh] phone:w-[100%] phone:h-[40vh] phone:flex phone:flex-col   rounded-lg pl-5   pr-5 text-white  '>
      <h4 className='text-3xl font-medium phone:text-xl '>Open Hot Desk</h4>
      <p className='text-[22px] mt-7 phone:text-[13px] '>“At Synerge WorkSpace its no longer just a fixed desk model - ‘hot desking’ is the new welcome note to return to the office. Synerge’s hot desking offers members a change in their day-to-day environment and being mobile. Provides a lot more flexibility over what their daily work environment looks like and feels like. People are no longer stuck to their desks.”</p>
    </span>
  </div>
</div>
<div id='space' className="w-full h-[70vh] hidden phone:w-full  phone:h-[74.5vh] phone:hidden phone:flex-col-reverse phone:items-center phone:justify-center  ">
  <div className='w-1/2 h-[70vh] phone:w-[70%] phone:h-[42vh] phone:flex phone:items-center phone:justify-center flex items-center justify-center '>
    <span className='Span w-[95%] h-[55vh] phone:w-[100%] phone:h-[40vh] phone:flex phone:flex-col  rounded-lg pl-5  pr-5 text-white  '>
      <h4 className='text-3xl font-medium phone:text-xl '>Shared Cabin Space</h4>
      <p className='text-[22px] mt-7 phone:text-[12px] '>“The Shared Cabin Space at Synerge WorkSpace provides a growing entrepreneur the opportunities to Network with other Startup Founders. Provides a greater access to key players and opens limitless possibilities for collaborative efforts. Adapting to the Synerge Co-Cabin Space arrangement for your business can be more enjoyable and much more cost-effective.”</p>
    </span>
  </div>
  <div className="w-1/2 h-[70vh] phone:w-[70%] phone:h-[32vh] phone:flex phone:items-center phone:justify-center flex items-center justify-center ">
    <img className='w-[500px] h-[350px] phone:w-[400px] phone:h-[150px] ' src="https://www.synergeworkspace.com/image-path/pictures/shared%20cabin.png" alt="" />
  </div>
</div>
<div id='Corporate' className="w-full h-[70vh] hidden phone:w-full  phone:h-[74.5vh] phone:hidden phone:flex-col phone:items-center phone:justify-center  ">
  <div className="w-1/2 h-[70vh] phone:w-[70%] phone:h-[32vh] phone:flex phone:items-center phone:justify-center  flex items-center justify-center ">
    <img className='w-[500px] h-[350px] phone:w-[400px] phone:h-[150px] ' src="https://www.synergeworkspace.com/image-path/pictures/corporate%20space.png" alt="" />
  </div>
  <div className='w-1/2 h-[70vh] phone:w-[70%] phone:h-[42vh] phone:flex phone:items-center phone:justify-center flex items-center justify-center '>
    <span className='Span w-[95%] h-[55vh] phone:w-[100%] phone:h-[40vh] phone:flex phone:flex-col  rounded-lg pl-5  pr-5 text-white  '>
      <h4 className='text-3xl font-medium phone:text-xl '>Private</h4>
      <h4 className='text-3xl font-medium phone:text-xl '>Corporate Space</h4>
      <p className='text-[22px] mt-7 phone:text-[12px] '>“Our Dedicated Corporate Space is great options if you’re looking for consistency and quality with a workspace. Our Work Space provides secure access so you can rest assured that you have a safe and comfortable environment to be productive. Enjoy the vibe of a traditional office with the benefits of all our amenities and community events.”</p>
    </span>
  </div>
</div>
<div id='Director' className="w-full h-[70vh] hidden phone:w-full  phone:h-[74.5vh] phone:hidden phone:flex-col-reverse phone:items-center phone:justify-center  ">
  <div className='w-1/2 h-[70vh] phone:w-[70%] phone:h-[42vh] phone:flex phone:items-center phone:justify-center flex items-center justify-center '>
    <span className='Span w-[95%] h-[55vh] phone:w-[100%] phone:h-[40vh] phone:flex phone:flex-col  rounded-lg pl-5  pr-5 text-white  '>
      <h4 className='text-3xl font-medium phone:text-xl '>Private</h4>
      <h4 className='text-3xl font-medium phone:text-xl '>Director Space</h4>
      <p className='text-[22px] mt-7 phone:text-[12px] '>“At SYNERGE, We do customization based on the professional needs and requirement of the managers, Since the Managers are the Leaders for leading the entire team in a successful path. We support those great leaders with all amenities and our range of services with affordable space to work and to grow business. ”</p>
    </span>
  </div>
  <div className="w-1/2 h-[70vh] flex items-center justify-center phone:w-[70%] phone:h-[32vh] phone:flex phone:items-center phone:justify-center ">
    <img className='w-[500px] h-[350px] phone:w-[400px] phone:h-[150px] ' src="https://www.synergeworkspace.com/image-path/pictures/private%20director%20space.png" alt="" />
  </div>
</div>
  <div id='2-4 Seater' className="w-full h-[70vh] hidden phone:w-full  phone:h-[74.5vh] phone:hidden phone:flex-col-reverse phone:items-center phone:justify-center   ">
  <div className="w-1/2 h-[70vh] phone:w-[70%] phone:h-[32vh] phone:flex phone:items-center phone:justify-center flex items-center justify-center ">
    <img className='w-[500px] h-[350px] phone:w-[400px] phone:h-[150px] ' src="https://www.synergeworkspace.com/image-path/pictures/discussion%20space.png" alt="" />
  </div>
  <div className='w-1/2 h-[70vh] phone:w-[70%] phone:h-[42vh] phone:flex phone:items-center phone:justify-center flex items-center justify-center '>
    <span className='Span w-[95%] h-[55vh] phone:w-[100%] phone:h-[40vh] phone:flex phone:flex-col  rounded-lg pl-5  pr-5 text-white  '>
      <h4 className='text-3xl font-medium phone:text-xl '>2-4 Seater</h4>
      <h4 className='text-3xl font-medium phone:text-xl '>Discussion Space</h4>
      <p className='text-[22px] mt-7 phone:text-[12px] phone:mt-5 '>“At Synerge, the Huddle rooms are designed for brief meetings, brainstorming sessions and other quick chats. This newer style of discussion space is increasingly popular over the past few years at our facility. Growing together with the demand for more flexible spaces in offices. Most meetings involve only a handful of people, the intimacy of the huddle room is more ideal."</p>
    </span>
  </div>
</div>
<div id='7-12 Seater' className="w-full h-[70vh] hidden phone:w-full  phone:h-[74.5vh] phone:hidden phone:flex-col-reverse phone:items-center phone:justify-center  ">
  <div className='w-1/2 h-[70vh] phone:w-[70%] phone:h-[42vh] phone:flex phone:items-center phone:justify-center flex items-center justify-center '>
    <span className='Span w-[95%] h-[55vh] phone:w-[100%] phone:h-[40vh] phone:flex phone:flex-col  rounded-lg pl-5  pr-5 text-white  '>
      <h4 className='text-3xl font-medium phone:text-xl '>7 - 12 Seater</h4>
      <h4 className='text-3xl font-medium phone:text-xl '>Conference Space</h4>
      <p className='text-[22px] mt-7 phone:text-[12px] phone:mt-5 '>“Our Conference rooms are designed with video conferencing in mind. The Conference table and Chairs are arranged around Smart Television to accommodate remote workers.

Our meeting rooms include plug-and-play Smart TV for video conferencing to make the online experience in the meeting room as well as in-person conversations more effective and collaborative.”</p>
    </span>
  </div>
  <div className="w-1/2 h-[70vh] phone:w-[70%] phone:h-[32vh] phone:flex phone:items-center phone:justify-center flex items-center justify-center ">
    <img className='w-[500px] h-[350px] phone:w-[400px] phone:h-[150px] ' src="https://www.synergeworkspace.com/image-path/pictures/conference%20rooms.png" alt="" />
  </div>
</div>
<div className="Contact w-full h-[120vh] flex absolute top-[63.5%] phone:top-[55%]    ">
<section className=" w-full">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 bg-blue-400 ">Send message</button>
      </form>
  </div>
</section>
</div>
<div className="w-full h-[51.5vh]  flex absolute phone:top-[86.5%] top-[92.7%] left-0 bg-black ">  
<div className="w-full p-4 text-center   rounded-lg shadow sm:p-8 ">
<img className='w-[15%] ml-2 mt-[10%]  absolute ' src="https://www.synergeworkspace.com/images/logo.png" alt="" />
    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white phone:text-[15px] phone:mt-7 ">Work fast from anywhere</h5>
    <span className='w-1/4 h-16  flex items-center justify-center gap-6 ml-[37.5%] '>
    <a href=""><i className="fa-brands fa-square-facebook text-[40px] text-blue-500 "></i></a>
     <a href=""><i className="fa-brands fa-square-instagram text-[40px] text-pink-500 "></i></a>
     <a href=""><i className="fa-brands fa-linkedin text-[40px] text-blue-300 "></i></a>
    </span>
    <div className="items-center mt-1 justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
            <div className="text-left">
                <div className="mb-1 text-xs">Download on the</div>
                <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
            </div>
        </a>
        <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
            <div className="text-left">
                <div className="mb-1 text-xs">Get in on</div>
                <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
            </div>
        </a>
    </div>
</div>
</div>
<span className='Span w-[40px] h-[40px] rounded-full flex items-center justify-center  top-[85%] right-2  fixed '>
<a href="#Nav"><i className="fa-solid fa-arrow-up"></i></a>
</span>
<a href="https://api.whatsapp.com/send?phone=919663933767"><span className='w-[70px] h-[70px] rounded-full flex items-center justify-center bg-green-300  top-[85%] fixed left-2  '>
<i className="fa-brands fa-whatsapp text-4xl "></i>
</span></a>
<div id='CONTACT' className="w-[13%] phone:w-[30%] phone:h-[320px] phone:flex phone:flex-col phone:text-[12px] phone:top-10 h-[300px] hidden rounded-lg gap-1 pl-2 text-lg top-[5%] left-[7%] bg-white opacity-70  flex-col absolute  ">
  <span onClick={we} className='hover:border-b-2 hover:border-gray-500 cursor-pointer '>We</span>
  <span onClick={Work}  className='hover:border-b-2 hover:border-gray-500 cursor-pointer '>Co - Working Space</span>
  <span className='hover:border-b-2 hover:border-gray-500 cursor-pointer '>Locations</span>
  <span onClick={PRIVATE} className='hover:border-b-2 hover:border-gray-500 cursor-pointer '>Private Office</span>
  <span onClick={Conference} className='hover:border-b-2 hover:border-gray-500 cursor-pointer '>Conference Space</span>
  <span className='hover:border-b-2 hover:border-gray-500 cursor-pointer '>Facilities</span>
  <span className='hover:border-b-2 hover:border-gray-500 cursor-pointer '>Community</span>
  <img className='w-[60%] h-[30px] ' src="https://www.synergeworkspace.com/image-path/work-in-nature/icon.png" alt="" />
  <span className='hover:border-b-2 hover:border-gray-500 cursor-pointer '>Franchise</span>
</div>
    </div>
    </>
  )
}

export default Home