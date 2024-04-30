'use client';
import { addToWatchlistAction } from '@/app/add-to-watchlist-action';
import { useFormStatus } from 'react-dom';
export default function AddToWatchList2({movieId}: {movieId: string}) {

    return (
        <form action={addToWatchlistAction}>
            <input type="hidden" name='movieId' value={movieId}/>
            <SubmitButton />
        </form>
    )
}

function SubmitButton() {
    const {pending} = useFormStatus();
    return <button disabled={ pending } className="watch-list-button" type="submit">
        { pending ? 'Adding...' : 'Add to My Watch List' }
    </button>
}