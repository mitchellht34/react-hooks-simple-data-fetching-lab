// create your App component here
import React, { useEffect, useState } from "react";

function App() {
    const [dogImage, setDogImage] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setDogImage(data.message);
                setIsLoaded(true);
            })
    }, [])

    if (!isLoaded) return <h3>Loading...</h3>;

    return (
        <div>
            <img src={dogImage} alt="A Random Dog" />
        </div>
    );
}

export default App;