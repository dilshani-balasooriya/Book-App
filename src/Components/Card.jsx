import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState(null);

    return (
        <>
            {book.map((item, index) => {
                let thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
                let amount = item.saleInfo?.listPrice?.amount;
                let saleability = item.saleInfo?.saleability;

               
                if (thumbnail) {
                    return (
                        <div key={index} className="card" onClick={() => { setShow(true); setItem(item); }}>
                            <img src={thumbnail} alt={item.volumeInfo.title} />
                            <div className="bottom">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                                <p className="amount">
                                    {saleability === "FOR_SALE" && amount ? `₹${amount}` : "Not for Sale"}
                                </p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}

            {show && bookItem && (
                <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
            )}
        </>
    );
};

export default Card;

