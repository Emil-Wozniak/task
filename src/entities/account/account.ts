export interface IUser {
    login: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
}

export const defaultUser: IUser = {
    login: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: ""
}