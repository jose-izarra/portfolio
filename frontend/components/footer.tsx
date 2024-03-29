import socials from '../json/socials.json';


export default function Footer() {

    return (
        <footer className="flex items-center justify-center text-center my-5">     
            {/* <SpotifySongs /> */}
            <div className="flex items-center ">       
                <h2 className="text-3xl">Socials</h2>
            </div>
            <ul className="">
            {
                        socials.map((current) => {
                            return (
                                <li key={current.name} className="inline-block mx-4 py-6 px-[50px]">
                                    <a href={current.link} className="flex justify-center" target="_blank" 
                                      aria-label={`Learn more about Jose's contact information, exploring his ${current.name}`}>
                                      <svg xmlns={current.xmlns} x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24" className='rounded-lg'>
                                          <path d={current.d} className="fill-cool"/>
                                      </svg>                                    
                                    </a>
                                    <h3 className="text-sm pt-2">{current.name}</h3>
                                </li>
                            )
                        })
                    }
            </ul>
        </footer>
    )
}


/*
Code
JS
JavaScript
// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQBwEr2srQhZkxHgLCXYL4Yd3JcELpnG7pn6l9wPM2_qxgETntIj23Lm5yn-SOEHSjOn_suOSZqnun2HQoNV7N7xX6lvjocFhIZOXLeOtccVc_vbs6lu5o-Uq_itXdo2543vy9-aNjGJXuKWY1O8Fs1wxvYkmsXCNCNESmp1v51YXJ9_yW92KDSJwET_sFN2eo6xnnlh4RKeFh5iXdE4F0Qn4PmxU7Oa1u0zfVOdgMHdhEpmyGz2eDIjhStC7194SoGT';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);

*/