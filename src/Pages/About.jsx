import React from 'react';
import coffee10 from './images/coffee10.jpg'

const About = () => {
  return (
    <div className="bg-[#FFF0D1] min-h-screen">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-2xl font-bold text-center text-[rgb(121,87,87)] mb-8">
         About Us - DamCoffeeBrew
       </h1>
      
        <div className='flex justify-center'>
          <img src={coffee10} alt="" className=''/>
        </div>

        <div className='mt-8 '>
          <p className='text-lg text-[#3B3030]'>Selamat datang di DamCoffeBrew, destinasi digital Anda untuk mengeksplorasi dunia kopi! Kami adalah tim penggemar kopi yang berdedikasi untuk menghubungkan para pecinta kopi dengan segala hal yang berhubungan dengan minuman beraroma ini, mulai dari proses pembuatannya hingga budaya kopi global.</p>
          <p className='text-lg mt-8 text-[#3B3030]'>Di DamCoffeBrew, kami percaya bahwa kopi bukan sekadar minuman, tetapi sebuah pengalaman. Melalui situs ini, kami berusaha memberikan informasi, panduan, dan cerita yang mendalam tentang jenis-jenis kopi, metode penyeduhan, inovasi dalam dunia kopi, hingga tren terbaru di kedai kopi. Apakah Anda seorang barista profesional, penikmat kopi sehari-hari, atau baru memulai perjalanan mencicipi kopi, DamCoffeBrew hadir untuk memberikan wawasan dan inspirasi.</p>
          <p className='text-lg mt-8 text-[#3B3030]'>Kami juga bangga menampilkan ulasan kopi spesialti, saran alat penyeduhan terbaik, dan tips untuk menciptakan secangkir kopi yang sempurna di rumah. Dengan fokus pada kualitas, keahlian, dan cinta terhadap kopi, misi kami adalah untuk memperkaya pengalaman Anda menikmati secangkir kopi, satu tegukan pada satu waktu.</p>
          <p className='text-lg mt-8 text-[#3B3030]'>Terima kasih telah mengunjungi artikel DamCoffeeBrew. Kami berharap Anda menikmati secangkir kopi yang lebih berarti dengan pengetahuan baru dari kami.
          </p>
        
        </div>
     
      </div>
    </div>
  );
}

export default About;
