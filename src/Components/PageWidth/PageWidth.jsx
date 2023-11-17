
import PropTypes from 'prop-types';

const PageWidth = ({children}) => {
    return (
        <div className='max-w-6xl mx-auto'>
            {children}
        </div>
    );
};

PageWidth.propTypes = {
    children: PropTypes.node
};

export default PageWidth;