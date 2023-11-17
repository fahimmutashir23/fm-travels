import { Helmet } from "react-helmet-async";
import PropTypes from 'prop-types';


const PageTitle = ({title}) => {
    return (
        <Helmet><title>FM Travels | {title}</title></Helmet>
    );
};

PageTitle.propTypes = {
    title: PropTypes.node
};

export default PageTitle;