import { v4 as uuidv4 } from 'uuid';

export class Citizen {
    id;
    lists;

    constructor(name, lastName, userName,birthDate, phone, type, email, password,membership) {
        this.id=uuidv4();
        this.name = name;
        this.lastName = lastName;
        this.userName = userName;
        this.birthDate = birthDate;
        this.phone = phone;
        this.type = type;
        this.email = email;
        this.password = password;
        this.membership = membership;
        this.lists = {
            favorites: [],
            watchLater: []
    };
}}