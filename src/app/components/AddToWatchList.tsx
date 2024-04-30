'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddToWatchList({movieId}: {movieId: string}) {
    const router = useRouter();
    const [saving, setSaving] = useState(false);


    const create = async() => {
        setSaving(true);
        await fetch('/api/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              new_movie: movieId
            }),
        });
        setSaving(false);
        router.refresh();
    }

    return (
        <button disabled={saving} onClick={ create } className="watch-list-button"
                type="submit">Add to My Watch List </button>
    )
}