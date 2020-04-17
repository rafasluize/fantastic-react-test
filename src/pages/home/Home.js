import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './home.scss'
import { fetchPublications, fetchAuthor } from '../../actions/HomeAction';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { FaSearch, FaTimes } from 'react-icons/fa';
import moment from 'moment';

export default function Home() {
    const [ listAuthor, setListAuthor ] = useState([]);
    const [ listPublication, setListPublication ] = useState([]);
    const [ listPublicationFilter, setListPublicationFilter ] = useState([]);

    const [ filter, setFilter ] = useState('');
    const [ responseFilter, setResponseFilter ] = useState(false);
      const dispatch = useDispatch();
  
    const fetchPublicationsAction = async () => dispatch(await fetchPublications());
    const fetchAuthorsAction = async () => dispatch(await fetchAuthor());
  
    useEffect(() => {
        buildPage();
    }, []);

    
    async function buildPage() {
      const response = await fetchPublicationsAction();
      const responseAuthor = await fetchAuthorsAction();
      if(response) {
        setListPublication(response.data);
      }
      if(responseAuthor){
        setListAuthor(responseAuthor.data)
      }
    }

    function onFilter(){
        if(filter){
            filter.toLowerCase()
            let filterAuthor = listAuthor.filter((a) => {
                return a.name.toLowerCase().includes(filter);
            });
            if(filterAuthor.length > 0){
                setResponseFilter(false)
                let filterPublications = [];
                filterAuthor.map(function(item){
                    let result = listPublication.filter((pub) => pub.metadata.authorId === item.id)
                    filterPublications.push(...result)
                    
                 });
                 if(!filterPublications.length > 0){
                     setResponseFilter(true);
                 }
                 setListPublicationFilter(filterPublications)
            } else {
                setResponseFilter(true);
            }
            
        } else {
            setListPublicationFilter([])
            setResponseFilter(false)
        }
    }

    function onClean() {
        setListPublicationFilter([])
        setFilter('')
        setResponseFilter(false)
    }
  
    return (
        <>
            {
				listPublication.length > 0 ?
                <div className="container">
                    <div className="search d-flex">
                        <div className="d-flex ">
                            <div className="input-group mr-5">
                                <input type="text" placeholder="Search for author" maxLength="30" onChange={ e => setFilter(e.target.value)} value={filter} name="date" />
                                {
                                    responseFilter &&
                                    <span className="no-results d-block text-grey"><small>No results</small></span>
                                }
                            </div>
                            <Button styleType="secondary" click={() => onFilter()} icon={<FaSearch/>}/>
                            {
                                listPublicationFilter.length > 0 &&
                                    <Button
                                    styleType="link"
                                    click={() => onClean()}
                                    icon={ <FaTimes/>}
                                    />
                            }
                        </div>
                    </div>
                    <div className="list-publications d-flex">
                        {
                            listPublicationFilter.length > 0 ?
                                listPublicationFilter.map((item, index) => 
                                    <div key={ index } className="px-20 my-20 d-flex flex-column">
                                        <Card
                                            author={  listAuthor.find(a => a.id === item.metadata.authorId) }
                                            data={ item } 
                                            index={index}
                                    />
                                    </div>
                                )
                            :
                            listPublication.map((item, index) => 
                                <div key={ index } className="px-20 my-20 d-flex flex-column">
                                    <Card
                                    author={  listAuthor.find(a => a.id === item.metadata.authorId) }
                        
                                    data={ item } 
                                    index={index}
                                />
                                </div>
                            )
                        }
                    </div>
                </div>
                :
                <div className="container text-center">
                    <small>Nenhum registro encontrado</small>
                </div>
			}
        </>
    )
}
