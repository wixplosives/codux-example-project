export interface IPrice {
    dollars: number;
    cents: number;
    extraInfo: string;
}

export interface IProduct {
    imageUrl: string;
    modelName: string;
    productId: string;
    productTitle: string;
    price: string;
    reviewsAverageRating?: number;
    reviewsCount?: number;
    isNew?: boolean;
}
