import React from 'react';
import Image1 from './images/coffee2.jpg'
import Image2 from './images/coffee3.jpg'
import Image3 from './images/coffee1.jpg'
import Image4 from './images/coffee4.jpg'
import Image5 from './images/coffee5.jpg'
import Image6 from './images/coffee6.jpg'
import Image7 from './images/coffee7.jpg'
import Image8 from './images/coffee8.jpg'
import Image9 from './images/coffee9.jpg'
import coffe from './images/coffetime.webp'

const Home = () => {
  return (
    <body className=" h-full m-auto p-9 bg-[#FFF0D1]">
      <div className='container mx-auto max-w-8xl'>
        <div className='main1 mt-5 '>
        <h1 className="text-2xl font-bold text-[#795757] flex justify-center">Mengenal Apa Itu Kopi</h1>
        <div className='flex flex-row mt-2'>
          <div className='w-3/4 p-4'>
          <p className='text-[#3B3030] '>Kopi adalah minuman yang terbuat dari biji kopi yang telah dipanggang dan digiling. Proses pembuatan kopi dimulai dengan menanam tanaman kopi, biasanya di daerah tropis. Biji kopi, yang sebenarnya adalah biji dari buah kopi, kemudian dipanggang untuk mengeluarkan rasa dan aroma yang khas. Setelah dipanggang, biji kopi digiling menjadi bubuk yang dapat diseduh dengan air panas untuk menghasilkan minuman kopi.</p>
          <p className='mt-2 text-[#3B3030]'>Ada berbagai metode untuk menyeduh kopi, seperti menggunakan mesin espresso, French press, pour-over, atau drip coffee maker. Kopi juga hadir dalam berbagai bentuk, termasuk kopi hitam, kopi susu, cappuccino, dan latte, masing-masing dengan cara penyajian dan bahan tambahan yang berbeda.</p>
          <p className="mt-2 text-[#3B3030]">Kopi dikenal karena kandungan kafeinnya, yang dapat memberikan efek stimulan, meningkatkan kewaspadaan, dan mengurangi rasa kantuk. Selain itu, kopi juga sering dinikmati karena rasa dan aroma kompleksnya yang dapat bervariasi tergantung pada jenis biji, metode pemanggangan, dan teknik penyeduhan.</p>
          </div>
          <div className='w-1/4 p-4 flex items-center'>
            <img src={Image1} alt="Gambar Sementara" className='w-full h-auto rounded-md '/>
          </div>
        </div>  
      </div>
      <div className="main2 mt-14">
        <h1 className='text-2xl font-bold text-[#795757] flex justify-center'>Jenis-Jenis Minuman Kopi</h1>
        <p className='text-[#3B3030] mt-3 p-4'>Dalam artikel ini, kita akan membahas jenis-jenis minuman kopi yang paling populer dan sering muncul dalam daftar menu kafe atau kedai kopi modern. Setiap minuman kopi memiliki karakteristik dan metode penyajian yang berbeda, mencerminkan preferensi dan tren yang beragam dalam budaya kopi global. Berikut adalah beberapa minuman kopi yang sering dijumpai dan dicintai oleh banyak orang:</p>
        <div className="flex flex-row justify-center gap-4">
          
          <div className="flex flex-col max-w-[350px] max-h-[500px] p-3">
            <h2 className="text-xl font-bold mb-2 text-[#795757]">1. Black Coffee</h2>
            <img src={Image2} alt="Gambar 1" className="object-cover w-[350px] h-[200px] max-w-full max-h-[200px] mb-2 rounded-md" />
            <p className="text-base text-[#3B3030]">Jenis minuman kopi yang pertama adalah black coffee atau kopi hitam. Kopi hitam terutama sangat disukai oleh orang-orang dewasa. Kopi hitam adalah jenis minuman kopi yang sederhana, dibuat dengan biji kopi bubuk yang direndam dalam air panas, dan disajikan hangat. Jika Anda ingin terdengar mewah, Anda bisa menyebut kopi hitam dengan nama aslinya, yakni cafe noir.</p>
          </div>

          <div className="flex flex-col max-w-[350px] max-h-[500px] p-3">
            <h2 className="text-xl font-bold mb-2 text-[#795757]">2. Latte</h2>
            <img src={Image3} alt="Gambar 2" className="object-cover w-[350px] h-[200px] max-w-full max-h-[200px] mb-2 rounded-md" />
            <p className="text-base text-[#3B3030]">Jenis minuman kopi yang kedua adalah latte. Sebagai minuman kopi paling populer di dunia, latte terdiri dari espresso dan steamed milk dengan sedikit busa di atasnya. Latte bisa dipesan dalam bentuk dan rasa originalnya, atau dengan tambahan perasa mulai dari vanilla hingga kayu manis. Latte juga terkenal dengan latte art-nya, yakni seni menggambar bentuk atau pola di atas busa minuman ini.</p>
          </div>

          <div className="flex flex-col max-w-[350px] max-h-[500px] p-3">
            <h2 className="text-xl font-bold mb-2 text-[#795757]">3. Cappuccino</h2>
            <img src={Image4} alt="Gambar 3" className="object-cover w-[350px] h-[200px] max-w-full max-h-[200px] mb-2 rounded-md" />
            <p className="text-base text-[#3B3030]">Jenis minuman kopi yang ketiga adalah cappuccino. Cappuccino adalah latte yang dibuat dengan lebih banyak busa (foam) daripada steamed milk, seringkali ditambah dengan taburan bubuk kakao atau kayu manis di atasnya. Terdapat juga variasi cappuccino yang menggunakan krim sebagai pengganti susu atau yang memberikan penambah rasa.</p>
          </div>

          <div className="flex flex-col max-w-[350px] max-h-[500px] p-3">
            <h2 className="text-xl font-bold mb-2 text-[#795757]">4. Americano</h2>
            <img src={Image5} alt="Gambar 4" className="object-cover w-[350px] h-[200px] max-w-full max-h-[200px] mb-2 rounded-md" />
            <p className="text-base text-[#3B3030]">Jenis minuman kopi yang keempat adalah americano. Dengan rasa yang mirip dengan kopi hitam, americano terdiri dari espresso shot yang diencerkan dengan air panas. Tips profesional khusus untuk Anda yang ingin membuat americano sendiri di rumah ialah, tuangkan espresso terlebih dahulu, baru tambahkan air panas.</p>
          </div>

      
        </div>
        <div className="flex flex-row justify-center gap-4 mt-4">
          
          <div className="flex flex-col max-w-[350px] max-h-[500px] p-3">
            <h2 className="text-xl font-bold mb-2 text-[#795757]">5. Espresso</h2>
            <img src={Image6} alt="Gambar 1" className="object-cover w-[350px] h-[200px] max-w-full max-h-[200px] mb-2 rounded-md" />
            <p className="text-base text-[#3B3030]">Jenis minuman kopi yang kelima adalah espresso. Espresso adalah jenis minuman kopi yang sangat pekat. Meski sederhana dalam penampilan, espresso cenderung sulit untuk diminum bagi pemula karena rasanya yang pahit dan kental. Minuman espresso dapat disajikan sendiri atau digunakan sebagai dasar dari sebagian besar jenis minuman kopi, seperti latte dan macchiatos.</p>
          </div>

          <div className="flex flex-col max-w-[350px] max-h-[500px] p-3">
            <h2 className="text-xl font-bold mb-2 text-[#795757]">6. Macchiato</h2>
            <img src={Image7} alt="Gambar 2" className="object-cover w-[350px] h-[200px] max-w-full max-h-[200px] mb-2 rounded-md" />
            <p className="text-base text-[#3B3030]">Jenis minuman kopi yang keenam adalah macchiato. Macchiato adalah jenis minuman kopi berbasis espresso lainnya yang memiliki sedikit busa di atasnya. Kata "macchiato" berarti tanda atau noda. Ini mengacu pada tanda bahwa steamed milk meninggalkan permukaan espresso saat dituangkan ke dalam minuman. Sirup perasa sering ditambahkan ke jenis minuman kopi ini, sesuai dengan preferensi pelanggan.</p>
          </div>

          <div className="flex flex-col max-w-[350px] max-h-[500px] p-3">
            <h2 className="text-xl font-bold mb-2 text-[#795757]">7. Mocha</h2>
            <img src={Image8} alt="Gambar 3" className="object-cover w-[350px] h-[200px] max-w-full max-h-[200px] mb-2 rounded-md" />
            <p className="text-base text-[#3B3030]">Jenis minuman kopi yang ketujuh adalah mocha. Mocha adalah jenis minuman kopi yang pas bagi Anda pecinta cokelat. Mocha adalah jenis minuman kopi yang terdiri dari espresso, coklat, steamed milk dan foam. Mocha adalah perpaduan unik kopi dan cokelat panas. Bubuk atau sirup coklat memberikan rasa yang kaya dan lembut serta mengurangi keasaman espresso pada jenis minuman kopi satu ini.</p>
          </div>

          <div className="flex flex-col max-w-[350px] max-h-[500px] p-3">
            <h2 className="text-xl font-bold mb-2 text-[#795757]">8. Cold Brew</h2>
            <img src={Image9} alt="Gambar 4" className="object-cover w-[350px] h-[200px] max-w-full max-h-[200px] mb-2 rounded-md" />
            <p className="text-base text-[#3B3030]">Jenis minuman kopi yang terakhir adalah cold brew. Cold brew adalah jenis minuman kopi yang hanya bisa disajikan dalam bentuk dingin atau es. Cold brew memiliki tekstur yang lembut dan rasa yang halus, yang dihasilkan dengan menyeduh kopi yang baru digiling dengan air dingin selama 12 hingga 24 jam. Cold brew juga sering kali memiliki kandungan kafein yang lebih tinggi dibandingkan dengan kopi biasa. </p>
          </div>


      
        </div>
      </div>
      <div className="main3 mt-20">
        <h1 className='text-2xl font-bold text-[#795757] flex justify-center'>Manfaat Dari Minum Kopi</h1>
          <div className='flex p-4'>
            <div className='mt-1 p-2'>
              <img src={coffe} alt="" className='h-[500px] w-[320px] rounded-md' />
            </div>
            <div className='pr-4'>
            <p className='text-[#3B3030] mt-3 pl-3' >Minum kopi memiliki sejumlah manfaat bagi kesehatan, asalkan dikonsumsi dengan bijak dan tidak berlebihan. Berikut adalah beberapa manfaat utama minum kopi:</p>
            <p className='text-[#3B3030] mt-3 pl-3' >1. Meningkatkan Kewaspadaan dan Konsentrasi: Kafein dalam kopi membantu meningkatkan kewaspadaan dan konsentrasi, membuat Anda lebih fokus dan produktif.</p>
            <p className='text-[#3B3030] mt-3 pl-3' >2. Meningkatkan Energi Fisik: Kafein dapat meningkatkan kadar adrenalin dalam darah, yang dapat meningkatkan performa fisik dan membantu mengurangi rasa lelah.</p>
            <p className='text-[#3B3030] mt-3 pl-3' >3. Mengandung Antioksidan: Kopi kaya akan antioksidan yang dapat membantu melawan radikal bebas dalam tubuh dan melindungi sel-sel dari kerusakan.</p>
            <p className='text-[#3B3030] mt-3 pl-3' >4. Menurunkan Risiko Penyakit Tertentu: Penelitian menunjukkan bahwa minum kopi dapat menurunkan risiko beberapa penyakit, seperti Parkinson, Alzheimer, dan diabetes tipe 2.</p>
            <p className='text-[#3B3030] mt-3 pl-3' >5. Meningkatkan Metabolisme: Kafein dapat membantu meningkatkan laju metabolisme, yang bisa membantu dalam usaha penurunan berat badan.</p>
            <p className='text-[#3B3030] mt-3 pl-3' >6. Melindungi Hati: Konsumsi kopi secara moderat dapat membantu menurunkan risiko penyakit hati, termasuk sirosis dan kanker hati.</p>
            <p className='text-[#3B3030] mt-3 pl-3' >7. Mengurangi Risiko Depresi: Beberapa studi menunjukkan bahwa kopi dapat membantu mengurangi risiko depresi dan meningkatkan suasana hati.</p>
            <p className='text-[#3B3030] mt-3 pl-3' >8. Meningkatkan Fungsi Otak: Kafein dalam kopi dapat meningkatkan fungsi otak, termasuk memori, suasana hati, reaksi waktu, dan fungsi kognitif umum.</p>
            <p className='text-[#3B3030] mt-3 pl-3' >9. Meningkatkan Performa Olahraga: Kafein telah terbukti meningkatkan performa atletik dengan meningkatkan kadar adrenalin dan memobilisasi asam lemak dari jaringan lemak.</p>
            </div>
            
        </div>
        
      </div>
      </div>
      
    </body>
  );
}

export default Home;
