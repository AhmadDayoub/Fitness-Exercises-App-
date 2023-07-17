export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2110105e45msh7b4320c907010a6p1478dbjsn78bacf2f9874',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
 export const youtubeOptions = {
  method: 'GET',
  params: {
    id: 'UCE_M8A5yxnLfW0KghEeajjw'
  },
  headers: {
    'X-RapidAPI-Key': '2110105e45msh7b4320c907010a6p1478dbjsn78bacf2f9874',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData =  async (url,options) =>{
    const response = await fetch(url, options)
    const data = await response.json();

    return data
}