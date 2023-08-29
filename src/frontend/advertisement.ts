export type Ad = {
    title: string;
    url: string;
};

export const withAds = async <T>(stories: (T)[]): Promise<(T & Ad)[]> => {
    const ads: Ad[] = await fetch('http://localhost:3000/').then(r => r.json());
    return stories.reduce((xs, x, i) => {
        if (i % 3 === 0) {
          return xs.concat(ads.pop(), x);
        }
        return xs.concat(x);
    }, []);
}
