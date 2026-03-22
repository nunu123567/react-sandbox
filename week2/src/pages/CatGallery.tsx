import React, {useState, useEffect} from 'react';

interface Cat {
    id: string;
    url: string;
}

export function CatGallery(){
    const [cats, setCats] = useState<Cat[]>([]);

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then((response) => response.json())
        .then((data) => setCats(data))
        .catch((error) => console.log(error));
    },[]);

    return(
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {cats.map((cat) => (
                <img key = {cat.id}
                src={cat.url}
                alt="Cat" />
            ))}
        </div>
    )
}