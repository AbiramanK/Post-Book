import React, { Component } from 'react';

import {
    productsList,
    getCarts,
    storeCarts
} from './../../actions/FechActions/FechActions';
import {
    RTSuccess,
    RTWarn,
    RTError
} from './../../utilities/NotificationUtilities/NotificationUtilities';
import {
    ProductItem,
    AppBar
} from './../../components';

class Products extends Component {

    constructor(props) {
        super(props)

        this.state = {
            productsList: []
        };
        this.addProducts = this.addProducts.bind(this);
        this.minusProducts = this.minusProducts.bind(this);
    };


    componentDidMount = () => {
        this.initialLoad();
    };

    initialLoad = () => {
        let { branch } = this.props.location.state;

        productsList(branch).then((res) => {
            if (res.STATUS == "Success") {
                RTSuccess("Products loaded successfully");

                // let products = res.DATA ;

                // products.map((items, index) => {
                //     items.count = 0 ;
                // })

                this.setState({
                    productsList: res.DATA
                })
            }
        })
    }

    addProducts = (item) => {
        let getProducts = getCarts();
        let carts = getProducts == null ? [] : getProducts;

        if (carts.length > 0) {
            let isExist = false;
            carts.map((items, index) => {
                if (item.brand_id == items.brand_id) {
                    let count = items.count + 1;
                    carts[index].count = count;

                    isExist = true;
                }
            })

            if (!isExist) {
                carts.push({
                    ...item,
                    count: 1
                })
            }
        } else {
            carts.push({
                ...item,
                count: 1
            })
        }

        storeCarts(carts)
    }

    minusProducts = (item) => {
        let getProducts = getCarts();
        let carts = getProducts == null ? [] : getProducts;

        if (carts.length > 0) {
            carts.map((items, index) => {
                if (item.brand_id == items.brand_id) {
                    let count = items.count;
                    if (count > 0) {
                        count--;
                    }
                    carts.splice(index, 1);
                    carts.push({
                        ...item,
                        count
                    })

                    storeCarts(carts)
                }
            })
        }
    }


    render() {
        return (
            <div>
                <AppBar
                    history={this.props.history}
                    backArrowVisible
                />
                {this.state.productsList.length > 0 && this.state.productsList.map((items, index) => {
                    return (
                        <ProductItem
                            productName={items.brand_name}
                            count={items.product_count}
                            img={items.logo}
                            data={items}
                            id={items.brand_id}
                            item={items}
                            addProducts={this.addProducts}
                            minusProducts={this.minusProducts}
                            cartsCount={items.count}
                        />
                    )
                })}
                {this.state.productsList.length <= 0 &&
                    <div style={{ textAlign: 'center', marginTop: 30 }}>
                        <span style={{ fontSize: 20, textAlign: 'center' }}>No Products Found</span>
                    </div>
                }
            </div>
        )
    }
}

export default Products
