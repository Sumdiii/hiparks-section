'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight, Calendar } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

const mockData = [
  {
    id: 1,
    title: 'Warehousing Beyond Logistics: Can Facilities Function as Battery Banks?',
    date: '25 June 2026',
    image: '/images/card-1.png',
    category: 'Blog',
  },
  {
    id: 2,
    title: 'Supply Chain Disruptions 2026: Building Logistics Infrastructure Resilience',
    date: '12 May 2026',
    image: '/images/scd-header-new.png',
    category: 'News',
  },
  {
    id: 3,
    title: 'Staff Accommodation in Industrial Parks: The Missing Link to Manufacturing Productivity and Scale',
    date: '7 May 2026',
    image: '/images/horizon-residences.png',
    category: 'Press Release',
  },
  {
    id: 4,
    title: 'object object',
    date: '28 April 2026',
    image: '/images/card-1.png',
    category: 'Blog',
  },
];

const tabs = ['Case Studies', 'Blog', 'News', 'Events', 'Press Release'];

export default function LatestFromGround() {
  const [activeTab, setActiveTab] = useState('Blog');

  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="leading-none">
              <span className="text-5xl lg:text-6xl font-bold text-black">
              Latest From
              </span>
              <br />
              <span className="text-5xl lg:text-6xl font-light text-black mb-6">
              THE GROUND
              </span>
            </h2>
            {/* Gradient bar */}
            <div className="h-2 w-40 bg-gradient-to-r from-purple-600 via-purple-400 to-orange-500 rounded-full"></div>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Catch up on what's happening across Horizon's parks - from new projects and fresh collaborations to stories shaping India's supply chain growth. Stay tuned for the latest milestones, insights, and on-ground developments driving our journey forward.
            </p>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
            <div className="flex w-full overflow-hidden rounded-[22px] border border-gray-300">            {tabs.map((tab) => (
            <button
              key={tab}
                onClick={() => setActiveTab(tab)}
                  className={`flex-1 flex items-center justify-between px-8 py-6 border-r border-gray-300 last:border-r-0 transition-all ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white"
                    : "bg-white text-black hover:bg-gray-50"
                  }`}
                >
                  <span>{tab}</span>

                    {activeTab === tab && <ArrowUpRight size={22} />}
            </button>
            ))}
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative mb-8"
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-8"
          >
            {mockData.map((item) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col h-80">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar size={16} />
                      <span>{item.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight flex-grow">
                      {item.title}
                    </h3>

                    {/* Read More Link */}
                    <motion.a
                      href="#"
                      whileHover={{ x: 4 }}
                      className="text-purple-600 font-medium flex items-center gap-2 mt-auto group"
                    >
                      Read More
                      <ArrowUpRight
                        size={16}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </motion.a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex gap-3 items-center justify-between mt-8">
            <div className="flex gap-3">
              <button className="swiper-button-prev-custom bg-white border-2 border-gray-300 hover:border-gray-400 p-3 rounded-lg transition-all hover:shadow-md">
                <ChevronLeft size={24} className="text-gray-700" />
              </button>
              <button className="swiper-button-next-custom bg-white border-2 border-gray-300 hover:border-gray-400 p-3 rounded-lg transition-all hover:shadow-md">
                <ChevronRight size={24} className="text-gray-700" />
              </button>
            </div>

            {/* View All Button */}
            <motion.a
              href="/insights"
              whileHover={{ x: 4 }}
              className="bg-black text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 group hover:bg-gray-900 transition-colors"
            >
              VIEW ALL
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
