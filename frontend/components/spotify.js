import { useEffect, useState } from 'react';



// const SpotifySongs = ({ data }) => {
//     const [ favoriteTracks, setFavoriteTracks ] = useState(data);

//     useEffect(() => {
//         const fetchSongs = async () => {
//             try {
//                 const res = await fetch("/api/spotify/songs/recents");
//                 const data = await res.json();

//                 setFavoriteTracks(data);
//                 console.log(favoriteTracks)
//             } catch (e) {
//                 console.error("Error fetching songs: ", e);
//             }
//         };

//         fetchSongs();
//     });

//     return (
//         <>
//             <div className='flex'>
//                 {/* spotify logo */}
//                 <div className='flex flex-col items-center justify-center'>
//                     <h3 className='text-xl'>Recently Listened To:</h3>
//                     <pre>{JSON.stringify(favoriteTracks)}</pre>
//                 </div>
//             </div>
//         </>
//     )

// };



// SpotifySongs.getStaticProps = async () => {
//     // fetch data on express
//     const res = await fetch("http://localhost:3000/api/spotify/songs/recents");
//     const data = await res.json();

//     return { data };
// }

// export default SpotifySongs;
