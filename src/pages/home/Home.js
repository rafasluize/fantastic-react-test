import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './home.scss'
import useReactRouter from 'use-react-router';
import { fetchPublications } from '../../actions/HomeAction';
import Card from '../../components/Card/Card';


export default function Home() {

    const [ listPublication, setListPublication ] = useState({});
  
    const dispatch = useDispatch();
  
    const { history } = useReactRouter();
  
    const fetchPublicationsAction = async () => dispatch(await fetchPublications());
  
    useEffect(() => {
        buildPage();
    }, []);

    
    async function buildPage() {
      const response = await fetchPublicationsAction();
      if(response) {
        setListPublication(response.data);
      }
    }
  
    return (
        <>
            {
				listPublication.length > 0 ?
                <div className="container list-publications d-flex">
                    {
                        listPublication.map((item, index) => 
                            <div key={ index } className="px-20 my-20 d-flex flex-column">
                                <Card
                                
								data={ item } 
								index={index}
                            />
                            </div>
                        )
                    }
                </div>
                :
                <div className="container text-center">
                    <small>Nenhum registro encontrado</small>
                </div>
			}
        </>
    )
}
