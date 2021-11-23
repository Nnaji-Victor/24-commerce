import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

export const makeRequest: AxiosInstance = axios.create({
    baseURL: "/graphql",
});

makeRequest.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => response,
    (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
);

export const getCategories = async () => {
    try {
        const response = await makeRequest.post("", {
            query: `{
            categories(ids: "156126", locale: de_DE) {
                childrenCategories {
                    name
                    urlPath
                    image
                }
            }
        }`,
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const getProducts = async () => {
    try {
        const response = await makeRequest.post('', {
            query: `{
            categories(ids: "1561267", locale: de_DE) {
                name
                articleCount
            categoryArticles(first: 50) {
            articles {
                name
                variantName
                prices {
                currency
                regular {
                    value
                }
                }
                images(
                format: WEBP
                maxWidth: 200
                maxHeight: 200
                limit: 1
                ) {
                path
                }
            }
            }
        }
        }`,
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}
