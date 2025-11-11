import React from 'react';

const RatingStars = () => {
  // Koordinat path untuk Bintang (digunakan berulang)
  const starPath = "M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z";
  const halfStarPath = "M9 13.4525L13.635 16.25L12.405 10.9775L16.5 7.43L11.1075 6.9725L9 2L6.8925 6.9725L1.5 7.43L5.595 10.9775L4.365 16.25L9 13.4525Z";

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Bintang Penuh ke-1 */}
      <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d={starPath} fill="#FCE91B" />
      </svg>
      
      {/* Bintang Penuh ke-2 */}
      <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d={starPath} fill="#FCE91B" />
      </svg>

      {/* Bintang Setengah (2.5) */}
      <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
        <mask id="mask0_6852_823" style={{ maskType: 'alpha' }} x="0" y="0" width="18" height="19">
          <path d={halfStarPath} fill="black" />
        </mask>
        <g mask="url(#mask0_6852_823)">
          {/* Bagian kuning (Setengah) */}
          <rect y="0.5" width="9" height="18" fill="#FCE91B" /> 
          {/* Bagian abu-abu (Sisa Setengah) */}
          <rect x="9" y="0.5" width="9" height="18" fill="#3A3541" fillOpacity="0.12" /> 
        </g>
      </svg>
      
      {/* Bintang Kosong ke-4 */}
      <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
        <path d={halfStarPath} fill="#3A3541" fillOpacity="0.12" />
      </svg>
      
      {/* Bintang Kosong ke-5 */}
      <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
        <path d={halfStarPath} fill="#3A3541" fillOpacity="0.12" />
      </svg>
    </div>
  );
};

export default RatingStars;