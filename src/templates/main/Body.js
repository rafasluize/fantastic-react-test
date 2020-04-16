import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import './scss/main.scss';
import { useDispatch } from 'react-redux';


export function Body({ children }) {
	const dispatch = useDispatch();

	useEffect(() => {
		onCheckDevice();
		window.addEventListener('resize', onCheckDevice);
		return () => window.removeEventListener('resize', onCheckDevice);
		
	}, []);

	function onCheckDevice() {
		let width = document.body.clientWidth;
		if(width <= 1199.98) {
			dispatch({ type: 'RESIZE_REDUCER', data: 'MOBILE' })
		} else {
			dispatch({ type: 'RESIZE_REDUCER', data: 'DESKTOP' })
		}
	}

	return (
		<main className="fantastic-test">
			<Header />
			{ children }
		</main>
	)

}
// class Body extends Component {
	
  
// }

const DefaultLayoutRoute = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={matchProps => (  
      <Body>  
        <Component {...matchProps} />  
      </Body>  
    )} />  
  )  
};

export default DefaultLayoutRoute;