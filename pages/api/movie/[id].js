import { apiKey, apiUrl} from '../../../lib/tmdb';

export default async (req, res) => {
    const result = await fetch(`${apiUrl}movie/${req.query.id}?api_key=${apiKey}&language=pt-BR`);
    const json = await result.json();

    res.status(200).json({  
        list: json
    })
}
  