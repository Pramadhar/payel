
import PropTypes from 'prop-types'; // ES6



const Link = ({route}) => {
 
        return (
            <li className="px-24 py-2 hover:text-blue-500">
                <a href={route.path}>{route.name}</a>
            </li>
        );
    };
    

    Link.propTypes = {
        route: PropTypes.object
    }


export default Link;