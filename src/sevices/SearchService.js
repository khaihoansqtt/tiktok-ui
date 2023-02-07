import httpRequest from '~/utils/httpRequest'

export async function search(debounce) {
    try {
        const res = await httpRequest.get(`/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
