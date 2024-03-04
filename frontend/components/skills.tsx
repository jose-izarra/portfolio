"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import skills from '../json/skills.json';

export default function Skills({  }) {

    return (
        <div id='skills-container' className='flex items-center justify-center mx-2 sm:mx-0 overflow-hidden'>
            <div className=''>
                {
                    skills.slice(0, 5).map((skill) => {
                        return (
                            <SkillIcon key={skill.name} skill={skill} />
                        )
                    })
                }
            </div>
            <div className=''>
                {
                skills.slice(5, 10).map((skill) => {
                    return (
                        <SkillIcon key={skill.name}  skill={skill} />
                    )
                    }) 
                }
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl leading-[1.125em] max-w-[40%] mx-5">My<br/>Frameworks<br/>&<br/>Languages</h2>
            <div className=''>
                {
                    skills.slice(10, 15).map((skill) => {
                        return (
                            <SkillIcon key={skill.name} skill={skill} />
                        )
                    })
                }
            </div>
            <div className=''>
                {
                    skills.slice(15, 20).map((skill) => {
                        return (
                            <SkillIcon key={skill.name} skill={skill} />
                        )
                    })
                }
            </div>
        </div>
    )
    
}




function SkillIcon({ skill }) {
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
        <div ref={containerRef} className='skills-icon-container'>
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

/*
    const dragItem = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setIsDragging(true);
        const rect = dragItem.current.getBoundingClientRect();
        console.log('e.clientX', e.clientX, 'rect.left', rect.left, 'e.clientY', e.clientY, 'rect.top', rect.top)
        console.log('x', e.clientX - rect.left, 'y', e.clientY - rect.top)
        setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const newX = e.clientX - dragOffset.x + 50;
            const newY = e.clientY - dragOffset.y + 50;
            setPosition({ x: newX, y: newY });
            dragItem.current.style.transform = `translate(${newX}px, ${newY}px)`;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragOffset]);
        */