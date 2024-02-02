import { useEffect, useState } from 'react';
import Image from 'next/image';






export default function BackgroundImage({ imageUrl, width, top, left, zIndex }) {
    
    const imageStyle = `absolute w-[${width}] top-[${top}] left-[${left}] z-[${zIndex}] rounded-sm p-2 overflow-hidden`;

    return (
        <div className={imageStyle}>
            <Image
                key={`${imageUrl}`}
                src={imageUrl}
                width={0}
                height={0}
                sizes="100vh"
                style={{ width: '100%', height: 'auto' }} 
                alt="Image from Unsplash"
                />
        </div>
      );
};


