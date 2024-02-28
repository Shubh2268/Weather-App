import React from 'react';
import './description.css';
import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

const Description = () => {

    const cards = [
        {
            id: 1,
            icon: <FaArrowDown />,
            title: "min",
            data: '20',
            unit: '℃'
        }, {
            id: 2,
            icon: <FaArrowUp />,
            title: "max",
            data: '20',
            unit: ''
        },
        {
            id: 3,
            icon: <BiHappy />,
            title: "feels like",
            data: '19',
            unit: '℃'
        },
        {
            id: 4,
            icon: <MdCompress />,
            title: "pressure",
            data: '1013',
            unit: "hPa",
        },
        {
            id: 5,
            icon: <MdOutlineWaterDrop />,
            title: "humidity",
            data: '24%',
            unit: "%",
        },
        {
            id: 6,
            icon: <FaWind />,
            title: "wind speed",
            data: '3',
            unit: 'm/s',
        }
    ];

    return (
        <div className="section section__descriptions">
            {cards.map(({ id, icon, title, data, unit }) => (

                <div key={id} className="card">
                    <div className="description__card-icon">
                        {icon}
                        <small>{title}</small>
                    </div>
                    <h2>{`20 C`}</h2>
                </div>

            ))}
        </div>
    )
}

export default Description;
