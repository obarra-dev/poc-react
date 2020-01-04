import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom';

const CustomerListItem = ({name,urlPath, deleteAction, editAction}) => {
    return (
        <div>
            <div className="customer-listitem">
                <div className="field">
                    <Link to={`${urlPath}/${name}`}>{name}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}/${name}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}/${name}/delete`}>{deleteAction}</Link>
                </div>
            </div>

        </div>
    );
};

CustomerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    deleteAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerListItem;