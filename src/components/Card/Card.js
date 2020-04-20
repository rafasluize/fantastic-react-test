import React, {useEffect} from 'react'
import './card.scss'
import moment from 'moment';
import Button from '../Button/Button';
import { FaChevronRight } from 'react-icons/fa';

export default function Card({data, index, className, author, onView}) {
    return (
        <div className={`card p-20 d-flex flex-column ${className ? className : ''}`}>
            <h4 className="mb-5">{
                data.title} -
                {
                    author &&
                        <small className="text-default"> {author.name}</small>
                }
            </h4>
            
            <div className="d-flex justify-content-space-between align-items-center mt-auto">
                <small className="time-light">{ moment(data.metadata.publishedAt).format('DD/MM/YYYY HH:mm')}</small>
                <Button
                    styleType="link"
                    text="See more"
                    click={ () => onView(data, author) }
                    icon={ <FaChevronRight  size={10} />}
                />
            </div>

        </div>
    )
}
