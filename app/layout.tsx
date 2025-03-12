'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

// Struktur menu dengan submenu
const menuItems = [
  { label: 'Beranda', href: '/' },
  {
    label: 'Informasi',
    subItems: [
      { label: 'Jalur Pendaftaran', href: '/informasi/jalur-pendaftaran' },
      { label: 'Persyaratan', href: '/informasi/persyaratan' },
      { label: 'Kuota', href: '/informasi/kuota' },
      { label: 'Dokumen Pendukung', href: '/informasi/dokumen-pendukung' },
    ],
  },
  {
    label: 'Pengumuman',
    subItems: [
      { label: 'Hasil Seleksi Tahap 1', href: '/pengumuman/hasil-seleksi-1' },
      { label: 'Hasil Seleksi Tahap 2', href: '/pengumuman/hasil-seleksi-2' },
    ],
  },
  { label: 'Program Keahlian', href: '/program-keahlian' },
  { label: 'Tanya Jawab', href: '/tanya-jawab' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-100">
        <Navbar />
        <main className="mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-800 shadow-md fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50">
      {/* Mobile: Hamburger Menu */}
      <div className="md:hidden flex items-center w-full justify-between">
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-gray-800 text-2xl mr-3"
          >
            ☰
          </button>
          <span className="text-xs font-semibold text-gray-800">
            SMKN NEGERI 1 <br />
            KOTA BEKASI
          </span>
        </div>
        <Image src="/images/smk1logo.png" alt="Logo Sekolah" width={30} height={30} />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center">
        <Image src="/images/smk1logo.png" alt="Logo Sekolah" width={50} height={50} className="mr-4" />
        <span className="text-sm font-semibold text-gray-800">
          SMKN NEGERI 1 <br />
          KOTA BEKASI
        </span>
      </div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex space-x-6 text-gray-800 relative">
        {menuItems.map((item) => (
          <li key={item.label} className="relative group">
            {/* Jika tidak ada subItems, langsung ke link utama */}
            {!item.subItems ? (
              <Link
                href={item.href}
                className="relative hover:text-blue-500 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-500"
              >
                {item.label}
              </Link>
            ) : (
              <span className="relative hover:text-blue-500 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-500 cursor-pointer">
                {item.label}
              </span>
            )}

            {/* Submenu tetap muncul selama kursor berada di dalamnya */}
            {item.subItems && (
              <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-md border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:block transition-all duration-300">
                {item.subItems.map((subItem) => (
                  <li key={subItem.href} className="border-b last:border-none">
                    <Link
                      href={subItem.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition"
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Sidebar Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-gray-800 shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform md:hidden z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <button onClick={() => setIsOpen(false)} className="text-2xl text-gray-800">
            ✕
          </button>
        </div>
        <ul className="p-4 text-gray-800">
          {menuItems.map((item) => (
            <li key={item.label}>
              {/* Jika tidak ada submenu, langsung tampilkan link */}
              {!item.subItems ? (
                <Link
                  href={item.href}
                  className="block py-2 hover:bg-gray-200 transition-all duration-300 ease-in-out"
                >
                  {item.label}
                </Link>
              ) : (
                <div>
                  <span className="block py-2 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                    {item.label}
                  </span>
                  {/* Submenu Mobile */}
                  <ul className="ml-4 mt-1">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          href={subItem.href}
                          className="block py-1 pl-2 text-gray-600 hover:text-gray-900"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay untuk menutup sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={() => setIsOpen(false)}></div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#2d9042] text-white py-12 w-full px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Informasi Sekolah dan Alamat */}
        <div className="md:col-span-2 md:px-4"> {/* Menambahkan md:px-4 untuk padding horizontal */}
          <div className="flex items-center mb-4">
            <img
              src="/images/logosmk.png"
              alt="Logo SMKN 1 Kota Bekasi"
              className="w-8 h-8 mr-2"
            />
            <h3 className="font-semibold text-lg">SMK NEGERI 1 KOTA BEKASI</h3>
          </div>
          <p className="text-sm">
            Jl. Bintara VIII No.2, RT.005/RW.003, Bintara, Kec. Bekasi Barat,
            <br />
            Kota Bks, Jawa Barat 17134.
          </p>
        </div>

        {/* Media Sosial */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Media Sosial</h3>
          <ul className="text-sm">
            <li className="flex items-center mb-2">
              <a
                href="https://www.facebook.com/SMKN1KOTABEKASI"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 flex items-center"
              >
                <img
                  src="/images/facebook.png"
                  alt="Facebook Logo"
                  className="w-5 h-5 mr-2"
                />
                SMKN 1 KOTA BEKASI
              </a>
            </li>
            <li className="flex items-center mb-2">
              <a
                href="https://www.instagram.com/smk1bks"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 flex items-center"
              >
                <img
                  src="/images/instagram.png"
                  alt="Instagram Logo"
                  className="w-5 h-5 mr-2"
                />
                @smk1bks
              </a>
            </li>
            <li className="flex items-center mb-2">
              <a
                href="https://www.youtube.com/@smknegeri1kotabekasi153"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 flex items-center"
              >
                <img
                  src="/images/youtube.png"
                  alt="YouTube Logo"
                  className="w-5 h-5 mr-2"
                />
                SMKN 1 KOTA BEKASI
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Kontak</h3>
          <ul className="text-sm">
            <li className="flex items-center mb-2">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (021) 88951151
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.224 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@smkn1kotabekasi.sch.id
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 border-t border-white pt-4">
        <p className="text-white text-sm mt-4"> 
          © 2025 by Rekayasa Perangkat Lunak SMKN 1 Kota Bekasi
        </p>
      </div>
    </footer>
  );
}