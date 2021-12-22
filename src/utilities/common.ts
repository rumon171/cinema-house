export const movieIdFromUrl = (): number => {
    return Number(document.URL.split('/').pop());
}