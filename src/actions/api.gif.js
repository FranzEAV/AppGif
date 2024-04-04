export const getCategoryGif = async(category) => {
    //0ptHvQ3bb4Zm0YLQLfavoUIawxVyW9vM
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=0ptHvQ3bb4Zm0YLQLfavoUIawxVyW9vM&q=${category}&limit=10`)
    const data = await response.json()
    return data
}