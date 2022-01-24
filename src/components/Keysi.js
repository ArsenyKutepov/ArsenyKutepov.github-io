import React from 'react'
import '../App.scss'

import { Button } from './Button';
import './Keysi.scss';
import {KeysiItems} from './KeysiItems';

function Keysi() {
    return (
        <div className="Keysi" id="work">
            <div className="Keysi__container">
                <h1 className="Keysi__title">Последние кейсы</h1>
                <div className="Keysi__items">
                {KeysiItems.map((item, index) => {
                return (
                        <div className="Keysi__item-box"  key={index}>
                        <img src={item.img} alt={item.alt} className={item.classImg} />
                        <div className={item.className}>{item.title}</div>
                        <div className={item.classDat}>{item.dat}</div>
                        <div className="Keysi__item-text">{item.text}</div>
                        </div>
                );
                    })}
                </div>
                <div className="Keysi__btn">
                <Button className="Keysi__btn" buttonStyle="btn--primary" buttonSize="btn--medium">Показать ещё</Button>
                </div>
            </div>
        </div>
    )
}

export default Keysi
