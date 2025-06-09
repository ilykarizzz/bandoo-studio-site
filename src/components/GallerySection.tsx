'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  title?: string;
  description?: string;
}

export function GallerySection() {
  const [index, setIndex] = useState(-1);
  
  // Sample studio images - replace these with actual studio images
  const images: GalleryImage[] = [
    {
      src: "/gallery/studio-1.jpg",
      width: 1200,
      height: 800,
      alt: "Mikser w studio nagraniowym Bandoo",
      title: "Konsola mikserska",
      description: "Profesjonalna konsola mikserska używana do produkcji muzyki"
    },
    {
      src: "/gallery/studio-2.jpg",
      width: 1200,
      height: 800,
      alt: "Pomieszczenie do nagrywania wokalu",
      title: "Pomieszczenie do nagrań",
      description: "Akustycznie przygotowane pomieszczenie do nagrań wokalnych i instrumentalnych"
    },
    {
      src: "/gallery/studio-3.jpg",
      width: 1200,
      height: 800,
      alt: "Mikrofonowy setup w Bandoo Studio",
      title: "Setup mikrofonowy",
      description: "Profesjonalny zestaw mikrofonowy dla wokalistów i instrumentalistów"
    },
    {
      src: "/gallery/studio-4.jpg",
      width: 1200,
      height: 800,
      alt: "Sala kontrolna w Bandoo Studio",
      title: "Sala kontrolna",
      description: "Pomieszczenie kontrolne z monitorami studyjnymi i sprzętem audio"
    },
    {
      src: "/gallery/studio-5.jpg",
      width: 1200,
      height: 800,
      alt: "Instrumenty muzyczne w Bandoo Studio",
      title: "Instrumenty muzyczne",
      description: "Dostępne w studio instrumenty muzyczne dla naszych klientów"
    },
    {
      src: "/gallery/studio-6.jpg",
      width: 800,
      height: 1200,
      alt: "Mikrofon studyjny Bandoo Studio",
      title: "Mikrofon studyjny",
      description: "Najwyższej jakości mikrofon używany przy nagraniach wokalnych"
    },
  ];

  const slides = images.map(({ src, title, description }) => ({
    src,
    title,
    description,
  }));

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Nasze Studio</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Zobacz profesjonalne wyposażenie i przestrzeń, gdzie tworzymy najlepsze brzmienia. 
            Bandoo Studio to miejsce stworzone z myślą o idealnych nagraniach.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-video overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setIndex(i)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold">{image.title}</h3>
                <p className="text-gray-200 text-sm">{image.description}</p>
              </div>
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={i < 4}
              />
            </motion.div>
          ))}
        </motion.div>

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={slides}
          plugins={[Zoom, Captions]}
          captions={{ descriptionTextAlign: "center" }}
          className="bg-black/95"
        />
      </div>
    </section>
  );
}
