export const getGifs =async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=2BOBlQf46gK4JdqpqWOlUzGqFq6CB5st`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map(img => {
        return {
            id : img.id,
            title:img.title,
            url : img.images?.downsized_medium
        }
    })
    console.log(gifs)
    // setImages(gifs)
    return gifs
}