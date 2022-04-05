import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import './SingleCharacter.css';
import Header from '../ui/Header';
import Spinner from '../ui/Spinner';

const Card = (prons) => {
    return (

        <div className="scard">
            <div className="stop">
                <h2 className="sname">{prons.name}</h2>
                <img className="scircle-img" src={prons.img} alt="avatar_img" />
            </div>
            <div className="sbottom">
                <p className="sinfo">Date of Birth:  {prons.birthday}</p>
                <p className="sinfo">Status: {prons.status}</p>
                <p className="sinfo">Occupation: {prons.occupation}</p>
                <p className="sinfo">Status: {prons.status}</p>
                <p className="sinfo">Category: {prons.category}</p>
                <p className="sinfo">Appearance in: {prons.appearance}</p>
            </div>
        </div>
    );
}

const SingleCharacter = () => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters/${id}`);

            console.log(result.data);
            setItem(result.data);
            setIsLoading(false);
        }

        fetchItems();
    }, [id])


    console.log("item", item);


    return isLoading ? (<Spinner />) : (
        <div className='container'>
            <Header />
            {item.map(item => (
                <>
                    <Card
                        id={item.char_id}
                        key={item.char_id}
                        name={item.name}
                        nickname={item.nickname}
                        img={item.img}
                        birthday={item.birthday}
                        status={item.status}
                        occupation={item.occupation[0]}
                        category={item.category}
                        appearance={item.appearance}
                    />

                </>
            ))}
        </div>
    )
}

export default SingleCharacter