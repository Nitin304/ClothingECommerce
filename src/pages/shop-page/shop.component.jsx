import React from 'react';

import shopData from './shop.data';
import PreviewCollection from '../../components/preview-Collection/preview-collection.component';


class Shop extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections:shopData              
        }
    }
    render(){
        const {collections}=this.state;
        return (
            <div className="shop-page">
            {
                collections.map(({id,...otherCollectionProp})=>(
                    <PreviewCollection key={id} {...otherCollectionProp}></PreviewCollection>
                ))
            }
            </div>
        )
    }
}

export default Shop;