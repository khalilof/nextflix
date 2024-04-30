import getCollection from '@/app/firebase/getCollection';
const watchListCollection = 'khalil-watchlist';

export async function getWatchList() {
    const { result, error } = await getCollection(watchListCollection);

    if (error) {
         console.log(error);
    }
    return {result, error};
}