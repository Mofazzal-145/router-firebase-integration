import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>Hey who are you??</h2>
            <h5>{user ? user.displayName: 'tui kada'}</h5>
        </div>
    );
};

export default Products;