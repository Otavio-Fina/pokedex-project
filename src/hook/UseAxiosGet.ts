import axios from "axios";

export default async function pegandoData(url: string) {
    try {
        const resp = await axios.get(url)
        //console.log(resp.data)
        return resp.data
    } catch (err) {
        console.error(err)
    }
}