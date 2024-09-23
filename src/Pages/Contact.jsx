import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#FFF0D1] min-h-screen">
      <div className="container mx-auto max-w-5xl pt-12">
        <h1 className="text-2xl font-bold text-center text-[rgb(121,87,87)] mb-8">
        Contact Us - DamCoffeeBrew
        </h1>
        <div className='flex mt-12'>
          <div className='w-1/2 p-7 pt-[60px] bg-[#FFF8E8] rounded-lg'>
            <h1 className="text-xl font-bold  text-[rgb(121,87,87)]">Nomor Kami:</h1>
            <p className='mt-2'>0857-1071-5154</p>
            <h1 className="text-xl font-bold  text-[rgb(121,87,87)] mt-12">Lokasi: </h1>
            <p className='mt-2'>Abbey Road, London NW8 9DD, Inggris Raya</p>
            <h1 className="text-xl font-bold  text-[rgb(121,87,87)] mt-12">Jam Operasional:</h1>
            <p className='mt-2'>Senin - Jum'at: 08.00 - 17.00</p>
            <p className='mt-'>Sabtu, Minggu: Beristirahat</p>
          </div>
          <div className='w-1/2 p-7 bg-[#795757] rounded-lg '>
            <form action="">
            <div className="mb-4">
              <h1 className=' text-l pb-2 font-bold text-[#FFF8E8]'>Masukkan Nama:</h1>
              <input
                type="text"
                placeholder="Enter your Name"
                className="bg-[#FFF8E8] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#664343]"
              />
            </div>
            <div className="mb-4">
              <h1 className=' text-l pb-2 font-bold text-[#FFF8E8]'>Masukkan Email:</h1>
              <input
                type="email"
                placeholder="Enter a valid email address"
                className="bg-[#FFF8E8] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#664343]"
              />
            </div>
            <div className="mb-4">
            <h1 className=' text-l pb-2 font-bold text-[#FFF8E8]'>Masukkan Pesan:</h1>
              <textarea
                placeholder="Your message"
                rows="4"
                className="bg-[#FFF8E8] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#664343]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#664343] text-white font-bold py-3 rounded-md hover:bg-[#4b3535]"
            >
              Submit
            </button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
