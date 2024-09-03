"use client";

import { Metadata } from "next";
import PageHeader from "@/app/shared/page-header";
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// SEO metadata
export const metadata: Metadata = {
  title: "Welcome | Le Siam",
};

const pageHeader = {
  title: "Welcome to Le Siam App Kit",
  breadcrumb: [
    {
      href: "/",
      name: "Home",
    },
    {
      name: "Welcome Page",
    },
  ],
};

const slideImages = [
  { src: '/picslideshow/picslide1.png'},
  { src: '/picslideshow/picslide2.png'},
  { src: '/picslideshow/picslide3.png'},
];

export default function WelcomeDashboard() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      />
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1 style={{ color: '#2c3e50', marginBottom: '10px' }}>Create Quotations, Deliveries, and Invoices for Free</h1>
        <h5 style={{ color: '#7f8c8d', marginBottom: '20px' }}>We do not store your data.</h5>
        {/* <img src="https://www.lsiam.com/assets/img/bgHomex2y1.jpg" alt="Your Image Description" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} /> */}
      </div>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              
                <div style={{ backgroundImage: `url(${slideImage.src})`,maxWidth: '100%', height: '600px' ,borderRadius: '10px' }}>
                </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="card" style={{ margin: '20px auto', padding: '20px', maxWidth: '400px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#3498db' }}>Go to Main Site</h3><br />
        <p style={{ color: '#7f8c8d' }}>Click the button below to visit our main site.</p><br />
        <a href="https://www.lesiam.ca" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#3498db', color: '#fff', borderRadius: '10px', textDecoration: 'none' }}>Visit Main Site</a>
      </div>
      
    </>
  );
}
