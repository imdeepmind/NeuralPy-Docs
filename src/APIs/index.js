import Axios from "axios";

export const getRepoData = async () => {
    try {
        const url = "https://api.github.com/repos/imdeepmind/NeuralPy";

        const result = await Axios.get(url);

        if (result) {
            const data = {
                'stars': result.watchers_count,
                'open_issues': result.open_issues,
                'license': result.license.spdx_id
            }

            return data;
        } 

        throw new Error("");
    } catch (err) {
        console.log(err);
        // throw new Error("Not able to load the Repository data");
    }
}