import {create} from 'zustand';

interface movies  {
    id: number;
    title: string;
    watched: boolean;
}

interface StroreState {
    Movies: movies[];
    toggleWatched: (id: number) => void;
}

export const useMovieStore = create<StroreState>((set) => ({
    Movies: [
        {id:1, title: 'Intersteller', watched: true},
        {id:2, title: 'Dead Poets Society', watched: true},
        {id:3, title: 'Pride & Prejudice', watched: false},
        {id:4, title: 'Wonder', watched: false},
    ],

    toggleWatched: (id) =>
        set((state) => ({
            Movies: state.Movies.map((movies) =>
                movies.id === id ?
                {...movies, watched: !movies.watched} : movies
            ),
        })),
}));