import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => {
    return (
        <header>
            {children}

            <style jsx>{`
              header {
                letter-spacing: -.025em;
                font-weight: 800;
                font-size: 1rem;
                line-height: 2rem;
              }
            `}</style>
        </header>
    )
};

Header.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Header;
