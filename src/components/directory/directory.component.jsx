import './directory.styles.scss';
import React from 'react';
import DirectoryItem from '../directory-item/directory-item.component';

const Directory = () => {
    const categories = [{
        "id": 1,
        "title": "alive",
        "imageUrl": "https://assets.ldscdn.org/c2/8c/c28c6b64518861faf1a3e8453a1b6619998df2e2/creation.jpeg",
        "route": "shop/alive"
      },
      {
        "id": 2,
        "title": "nature",
        "imageUrl": "https://live.staticflickr.com/2845/10754840824_b74fa98dd2_b.jpg",
        "route": "shop/nature"
      },
      {
        "id": 3,
        "title": "world",
        "imageUrl": "https://i.insider.com/5b9137e10ce5f5b27e8b4a0c?width=1067&format=jpeg",
        "route": "shop/world"
      }
    ]

    return (
        <div className = "directory-container" > {
            categories.map((category) => ( 
                <DirectoryItem key={category.id} category={category} />
            ))
        } 
        </div>
    )


}

export default Directory;
