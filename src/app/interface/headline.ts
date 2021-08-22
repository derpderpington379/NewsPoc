import { Article } from './article';

// Headline interface that stores all current articles that are considered 'headlines'
export interface Headline {
    status: string,
    totalResults: number,
    articles: Article[],
}
