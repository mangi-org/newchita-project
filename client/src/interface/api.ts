interface AboutProjectAPI {
    id: number;
    title: string;
    color?: string;
    description: string;
    image?: string;
    createdAt?: string;
    updatedAt?: string;
    address?: string;
    latitude: number;
    longitude: number;
}

export type { AboutProjectAPI }