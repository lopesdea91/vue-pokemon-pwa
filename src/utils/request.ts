export const request = async (url: string) => {
    return fetch(url).then((r) => r.json())
}