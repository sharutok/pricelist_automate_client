const url = "http://localhost"
const port="8111"
export const  endpoints = {
    generate_token: `${url}:${port}/app/auth/v1/toket-get`,
    get_data_based_on_pricelist_name: `${url}:${port}/app/price-list/v1/data/by/pricelist`,
    get_header_based_on_pricelist_name: `${url}:${port}/app/price-list/v1/get/header/pricelist`
}