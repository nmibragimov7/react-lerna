export interface Good {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number
}

export interface GoodsSchema {
    data: Good[];
    isLoading: boolean;
    error?: string;
}

export interface User {
    username: string;
    firstname: string;
    lastname: string;
    role: string;
}

export interface UserSchema {
    data: User | null;
    isLoading: boolean;
    error?: string;
}
