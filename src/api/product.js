import instance from "./instance";

export const getAll = () => {
    const url = "/products";
    return instance.get(url);
};
export const remove = (id) => {
    const url = "/products/" + id;
    return instance.delete(url);
};