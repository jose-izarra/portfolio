"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
//

interface Skill {
    name: string;
    path: string;
    link: string;
}

export default function SkillIcon({ skill }: { skill: Skill }) {
    const imgRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const img = imgRef.current;
        const container = containerRef.current;

        if (!img || !container) return;

        const onMouseDown = (e: MouseEvent) => {
            e.preventDefault();
            // Record the initial mouse position and the image's starting position
            const startX = e.clientX;
            const startY = e.clientY;
            const startLeft = img.offsetLeft;
            const startTop = img.offsetTop;

            // Define the mousemove handler dynamically inside mousedown
            const onMouseMove = (moveEvent: MouseEvent) => {
                // Calculate new position of the image
                const nextX = moveEvent.clientX - startX + startLeft;
                const nextY = moveEvent.clientY - startY + startTop;

                img.style.left = `${nextX}px`;
                img.style.top = `${nextY}px`;
                img.style.transition = 'none';
            };

            // Attach the mousemove and mouseup listeners to document to ensure wide coverage
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', () => {
                // Remove listeners when mouse is released
                document.removeEventListener('mousemove', onMouseMove);

                // Calculate the "floor" position based on the container's height
                const containerHeight = container.clientHeight;
                const containerWidth = container.clientWidth;
                const imgHeight = img.clientHeight;
                const imgWidth = img.clientWidth;
                const floorPosition = containerHeight - imgHeight;
                const rightPosition = containerWidth - imgWidth;

                // Animate the fall
                img.style.top = `${floorPosition}px`;
                img.style.left = `${rightPosition}px`;
                img.style.transition = 'top 1s ease-out, left 1s ease-out';

            }, { once: true }); // Use the `{ once: true }` option to auto-remove the listener

        };

        // Attach the mousedown listener to the image
        img.addEventListener('mousedown', onMouseDown);

        // Cleanup function to remove event listeners when the component unmounts
        return () => {
            img.removeEventListener('mousedown', onMouseDown);
        };
    }, []);


    return (
        <div ref={containerRef} className=''>
            <Image
                ref={imgRef}
                src={skill.path}
                width={60} height={60}
                className=''
                alt={skill.name}
            />
        </div>
    )
}
