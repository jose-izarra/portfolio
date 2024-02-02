import axios from 'axios';




const API_URL = 'https://api.unsplash.com/search/photos';
const categories = [ 'space', 'technology', 'code', 'music', 'football stadium', 'gym weights']

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

export default async function handler(req, res) {
    try {
        const result = await axios.get(`${API_URL}?query=${categories[Math.floor(Math.random() * 7)]}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${UNSPLASH_ACCESS_KEY}`)
        // const data = await res.json();

        res.status(200).json({ message: result.data.results[0].urls.raw});
        
    } catch (e) {
        console.log('Error fetching image from Unsplash: ', e);
        res.status(500).json({ message: 'Error fetching image from Unsplash: ', e});
        
    }
};
    

