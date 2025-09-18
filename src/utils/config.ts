interface EnvConfig {
    NEWS_API_KEY: string;
}

export const env: EnvConfig = {
    NEWS_API_KEY: process.env.REACT_APP_NEWS_API_KEY!,
};