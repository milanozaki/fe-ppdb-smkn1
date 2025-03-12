'use client';

import { useRouter } from 'next/navigation';
import { Briefcase, FileText, HelpCircle } from "lucide-react";

export default function Page() {
  const router = useRouter();

  return (
    <div className="overflow-x-hidden">
      {/* Beranda */}
      <section
        id="beranda"
        className="relative bg-gradient-to-r from-purple-800 to-blue-900 text-white px-6 py-16 md:py-32 rounded-lg shadow-md flex flex-col justify-center items-start gap-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/gedungsmkn1.png')", minHeight: "80vh" }}
      >
        {/* Overlay agar teks tetap terbaca */}
        <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

        {/* Logo Sekolah di Pojok Kanan Atas */}
        <img
          src="/images/smkppdb.png"
          alt="Logo SMKN 1 Kota Bekasi"
          className="absolute top-4 right-4 w-24 md:w-32 z-20"
        />

        {/* Konten */}
        <div className="relative z-10 w-full max-w-3xl p-4">
          <h1 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 leading-tight font-[Poppins]">
            Penerimaan Peserta Didik Baru
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-300 leading-tight font-[Poppins]">
            SMKN 1 Kota Bekasi T.A 2025
          </h2>
          <p className="mt-4 text-lg md:text-2xl text-gray-200 leading-relaxed">
            Selamat datang di website PPDB Sekolah. Silakan telusuri informasi yang tersedia.
          </p>
        </div>
      </section>

      {/* Berita */}
      <section id="berita" className="mt-12 w-full  bg-[#329448] py-5">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Berita Terbaru</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            {
              id: 1,
              title: "Hasil Seleksi Tahap 2 PPDB 2024 SMKN 1 Kota Bekasi",
              image: "/images/siswa.png",
              link: "/berita/hasil-seleksi-tahap-2",
            },
            {
              id: 2,
              title: "Hasil Seleksi Tahap 1 PPDB 2024 SMKN 1 Kota Bekasi",
              image: "/images/siswa.png",
              link: "/berita/hasil-seleksi-tahap-1",
            },
            {
              id: 3,
              title: "Cara Mendapatkan Akun PPDB Jawa Barat 2024",
              image: "/images/siswa.png",
              link: "/berita/cara-mendapatkan-akun-ppdb",
            },
            {
              id: 4,
              title: "Pengumuman Jadwal Ujian Masuk PPDB 2024",
              image: "/images/siswa.png",
              link: "/berita/jadwal-ujian-masuk",
            },
            {
              id: 5,
              title: "Tips Sukses Lolos PPDB SMK Favorit",
              image: "/images/siswa.png",
              link: "/berita/tips-lolos-ppdb",
            },
            {
              id: 6,
              title: "Persyaratan Pendaftaran PPDB 2024",
              image: "/images/siswa.png",
              link: "/berita/persyaratan-ppdb",
            },
          ].map((news, index) => (
            <div
              key={news.id}
              className={`text-center ${
                window.innerWidth < 768 && index >= 3 ? "hidden mobile-news" : ""
              }`}
            >
              <a href={news.link} className="block overflow-hidden rounded-lg">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-[200px] md:h-[250px] object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
                />
              </a>
              <h2 className="mt-2 text-lg font-semibold text-white">{news.title}</h2>
            </div>
          ))}
        </div>

        {/* Tombol View More dan Hide untuk Mobile */}
        {window.innerWidth < 768 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => {
                const mobileNews = document.querySelectorAll(".mobile-news");
                mobileNews.forEach((news) => {
                  news.classList.remove("hidden");
                });
                const viewMoreButton = document.querySelector(".view-more-button");
                if (viewMoreButton) {
                  viewMoreButton.classList.add("hidden");
                }
                const hideButton = document.querySelector(".hide-button");
                if (hideButton) {
                  hideButton.classList.remove("hidden");
                }
              }}
              className="px-5 py-2 -mt-1 border border-white text-white rounded-full hover:bg-white hover:text-[#2d9042] transition view-more-button"
            >
              View More
            </button>
            <button
              onClick={() => {
                const mobileNews = document.querySelectorAll(".mobile-news");
                mobileNews.forEach((news) => {
                  news.classList.add("hidden");
                });
                const viewMoreButton = document.querySelector(".view-more-button");
                if (viewMoreButton) {
                  viewMoreButton.classList.remove("hidden");
                }
                const hideButton = document.querySelector(".hide-button");
                if (hideButton) {
                  hideButton.classList.add("hidden");
                }
              }}
              className="px-6 py-2 -mt-1 border border-white text-white rounded-full hover:bg-white hover:text-[#2d9042] transition hide-button hidden"
            >
              Hide
            </button>
          </div>
        )}
      </section>

      {/* Tambahan 2 Gambar */}
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center gap-6 mt-10">
        <img
          src="/images/ppdb1.jpg"
          alt="Siswa Berprestasi"
          className="w-full md:w-1/2 rounded-lg shadow-md max-w-full"
        />
        <img
          src="/images/ppdb2.jpg"
          alt="Kegiatan Sekolah"
          className="w-full md:w-1/2 rounded-lg shadow-md max-w-full"
        />
      </div>

      {/* Informasi */}
      <section id="informasi" className="mt-12">
        <h1 className="text-3xl font-bold text-blue-500 text-center -mb-3">INFORMASI</h1>
        
        <hr className="border-2 border-yellow-500 m-10" />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {/* Card Jalur Pendaftaran */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                {/* Ikon atau gambar terkait jalur pendaftaran bisa diletakkan di sini */}
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {/* Path untuk ikon jalur pendaftaran */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 4.75 7.5 4.75a12.742 12.742 0 00-2.269 1.005l-3.772 2.262a11.407 11.407 0 019 4.94M19.91 12.94a5.5 5.5 0 00-2.172-1.214m0 0V9.114a5.5 5.5 0 00-5.5-5.5M7.208 11.44a5.5 5.5 0 01-2.172 1.214m0 0V15.286a5.5 5.5 0 015.5 5.5m0 0v-3.372c0-.811.39-1.583 1.042-2.147m7.724 0a5.5 5.5 0 011.042 2.147V20.786m-7.724 0h3.372c.81 0 1.583-.39 2.147-1.042m0-7.724a5.5 5.5 0 012.147-1.042H19.91"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Jalur Pendaftaran</h3>
              <p className="text-sm text-gray-600 text-center">Berbagai jalur pendaftaran yang dapat diikuti oleh calon siswa.</p>
            </div>
            <div className="p-4 border-t">
            <button
              onClick={() => router.push('/jalur-pendaftaran')}
              className="block w-full bg-blue-50 hover:bg-blue-100 text-blue-500 text-center py-2 rounded font-semibold transition duration-300 relative overflow-hidden group"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-blue-200 transform -translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300"></span> {/* Ubah translate-x */}
              <span className="relative text-blue-500 group-hover:text-blue-700">Lihat Selengkapnya</span>
            </button>
            </div>
          </div>

          {/* Card Persyaratan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                {/* Ikon atau gambar terkait persyaratan bisa diletakkan di sini */}
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {/* Path untuk ikon persyaratan */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3-3v6m-2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-2m-2-2H9"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Persyaratan</h3>
              <p className="text-sm text-gray-600 text-center">Dokumen dan kriteria yang perlu dipenuhi untuk mendaftar.</p>
            </div>
            <div className="p-4 border-t">
            <button
              onClick={() => router.push('/persyaratan')}
              className="block w-full bg-green-50 hover:bg-green-100 text-green-500 text-center py-2 rounded font-semibold transition duration-300 relative overflow-hidden group"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-green-200 transform -translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300"></span> {/* Ubah translate-x */}
              <span className="relative text-green-500 group-hover:text-green-700">Lihat Selengkapnya</span>
            </button>
            </div>
          </div>

          {/* Card Kuota */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                {/* Ikon atau gambar terkait kuota bisa diletakkan di sini */}
                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {/* Path untuk ikon kuota */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Kuota</h3>
              <p className="text-sm text-gray-600 text-center">Jumlah kuota penerimaan siswa baru pada setiap program keahlian.</p>
            </div>
            <div className="p-4 border-t">
            <button
              onClick={() => router.push('/kuota')}
              className="block w-full bg-yellow-50 hover:bg-yellow-100 text-yellow-500 text-center py-2 rounded font-semibold transition duration-300 relative overflow-hidden group"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-yellow-200 transform -translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300"></span> {/* Ubah translate-x */}
              <span className="relative text-yellow-500 group-hover:text-yellow-700">Lihat Selengkapnya</span>
            </button>
            </div>
          </div>

          {/* Card Dokumen Pendukung */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                {/* Ikon Dokumen Pendukung (Topi Sarjana) */}
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v7m0-7S9 15 4 22m8-22c1.866 1.63 3.451 3.58 4.657 5.803a13.959 13.959 0 01-4.657 8.597"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Dokumen Pendukung</h3>
              <p className="text-sm text-gray-600 text-center">Dokumen tambahan yang dapat membantu proses pendaftaran calon siswa didik baru.</p>
            </div>
            <div className="p-4 border-t">
            <button
              onClick={() => router.push('/kuota')}
              className="block w-full bg-orange-50 hover:bg-orange-100 text-orange-500 text-center py-2 rounded font-semibold transition duration-300 relative overflow-hidden group"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-orange-200 transform -translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300"></span> {/* Ubah translate-x */}
              <span className="relative text-orange-500 group-hover:text-orange-700">Lihat Selengkapnya</span>
            </button>
            </div>
          </div>
        </div>

        {/* Tambahan Gambar Besar */}
        <div className="mt-10 flex justify-center">
          <img
            src="/images/informasi.png"
            alt="Informasi PPDB"
            className="w-full md:w-1/2 rounded-lg shadow-lg max-w-full"
          />
        </div>

        {/* Tombol Download Aplikasi */}
        <div className="mt-6 flex justify-center space-x-4 mb-5">
          <a
            href="https://play.google.com/store/apps/details?id=com.sapawarga.jds&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/playstore.png"
              alt="Google Play"
              className="w-12.3 h-7"
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/sapawarga-jabar-super-apps/id6443805562"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/appstore.png"
              alt="App Store"
              className="w-20 h-7"
            />
          </a>
        </div>
      </section>

      {/* Program Keahlian */}
      <section
      id="program-keahlian"
      className="p-6 bg-gradient-to-b from-transparent to-blue-200 text-center"
    >
      <h1 className="text-2xl font-bold text-green-900 flex items-center justify-center gap-2">
        <Briefcase className="w-6 h-6 text-green-900" /> Program Keahlian
      </h1>
      <p className="mt-2 text-gray-700 text-sm">
        Menawarkan 8 program konsentrasi keahlian yang dirancang untuk membekali siswa dengan keterampilan dan pengetahuan sesuai dengan kebutuhan industri.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {/* Contoh Data Jurusan (Ganti dengan data Anda) */}
        {[
          {
            nama: "Akuntansi dan Keuangan Lembaga",
            cover: "images/jurusan/akutansi.jpg",
          },
          {
            nama: "Desain & Produksi Busana",
            cover: "images/jurusan/busanabutik.jpg",
          },
          {
            nama: "Desain Komunikasi Visual",
            cover: "images/jurusan/dkv.jpg",
          },
          {
            nama: "Pengembangan Perangkat Lunak & Game",
            cover: "images/jurusan/rpl.jpg",
          },
          {
            nama: "Teknik Kendaraan Ringan",
            cover: "images/jurusan/tkr.jpg",
          },
          {
            nama: "Teknik Komputer & Jaringan",
            cover: "images/jurusan/tkj.jpg",
          },
          {
            nama: "Teknik Pemesinan",
            cover: "images/jurusan/tp.jpg",
          },
          {
            nama: "Teknik Pengelasan",
            cover: "images/jurusan/tpl.jpg",
          },
        ].map((jurusan, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden bg-white flex flex-col md:flex-row"
          >
            <img
              src={jurusan.cover}
              alt={`Cover Jurusan ${jurusan.nama}`}
              className="w-full md:w-48 h-32 md:h-auto object-contain"
            />
            <div className="p-2 flex-grow">
              <h2 className="text-sm font-semibold text-gray-800 text-center md:text-left">
                {jurusan.nama}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 relative border border-[#246c33] font-bold py-2 px-6 rounded-full overflow-hidden transition-all duration-300 group">
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0aaf2b] to-[#246c33] transform translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-300"></span>
        <span className="relative text-[#246c33] group-hover:text-white">Selengkapnya &gt;&gt; </span>
      </button>

      <hr className="mt-6 border-[#246c33] border-2" />
    </section>

    <div className="mt-8 mb-10">
  <h2 className="text-xl ml-5 font-bold text-gray-800">Dokumen Terkait</h2>
  <div className="overflow-x-auto mt-4">
    <table className="min-w-[600px] ml-5 border-collapse border border-gray-300 rounded-lg shadow-md">
      <thead>
        <tr>
          <th className="py-2 px-4 text-left text-gray-800 border-b border-gray-300">No</th>
          <th className="py-2 px-4 text-left text-gray-800 border-b border-gray-300">File</th>
          <th className="py-2 px-4 text-left text-gray-800 border-b border-gray-300">Keterangan</th>
        </tr>
      </thead>
      <tbody>
        {[
          { no: 1, file: 'link1.pdf', keterangan: 'Dokumen pertama' },
          { no: 2, file: 'link2.pdf', keterangan: 'Dokumen kedua' },
          { no: 3, file: 'link3.pdf', keterangan: 'Dokumen ketiga' },
        ].map((item) => (
          <tr key={item.no} className="hover:bg-gray-50">
            <td className="py-2 px-4 text-gray-700 border">
              {item.no}
            </td>
            <td className="py-2 px-4 border">
              <a
                href={item.file}
                className="text-blue-600 hover:text-blue-800 hover:underline"
                download
              >
                {item.file}
              </a>
            </td>
            <td className="py-2 px-4 text-gray-700 border">
              {item.keterangan}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

      
{/* FAQ Section */}
<section id="faq" className="p-6 bg-gray-50">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-8">
      <h1 className="text-2xl font-bold text-green-900">FAQ</h1>
      <p className="mt-4 text-gray-600">Temukan jawaban atas pertanyaan umum seputar PPDB</p>
    </div>

    <div className="space-y-4">
      {[
        {
          question: "Apa itu Penerimaan Peserta Didik Baru (PPDB)?",
          answer: "PPDB adalah proses pendaftaran siswa baru di sekolah, termasuk syarat dan jalur pendaftaran yang harus dipenuhi.",
        },
        {
          question: "Bagaimana cara mendaftar?",
          answer: "Calon siswa dapat mendaftar secara online melalui website resmi atau secara langsung di sekolah.",
        },
        {
          question: "Apa saja syarat yang dibutuhkan untuk mendaftar?",
          answer: "Syarat pendaftaran meliputi dokumen identitas, rapor, dan dokumen pendukung lainnya.",
        },
        {
          question: "Kapan jadwal PPDB berlangsung?",
          answer: "Jadwal PPDB dapat dilihat di bagian berita terbaru di website ini.",
        },
      ].map((faq, index) => (
        <div 
          key={index}
          className="group rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200"
        >
          <div 
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => {
              const answerElement = document.getElementById(`answer-${index}`);
              if (answerElement) {
                answerElement.classList.toggle('hidden');
                answerElement.classList.toggle('animate-fadeIn');
              }
            }}
          >
            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-green-900">
              {faq.question}
            </h2>
          </div>
          <p 
            id={`answer-${index}`}
            className="hidden p-4 pt-0 text-gray-600 border-t border-gray-100"
          >
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


    <div className="relative">
    {/* Tanya Jawab Bubble */}
    <div
      className="fixed bottom-4 right-4 bg-[#246c33] text-white rounded-full p-3 shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-[#0aaf2b] transition-all duration-300"
        onClick={() => router.push("/tanya-jawab")}
      >
        <HelpCircle className="w-5 h-5" />
        <span className="text-sm font-semibold">Tanya Admin</span>
      </div>
    </div>
    </div>
  );
}