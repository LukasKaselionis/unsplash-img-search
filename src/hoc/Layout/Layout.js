import React, { Component } from 'react';
import axios from 'axios';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../containers/Toolbar/Toolbar';
import ImageList from '../../containers/ImageList/ImageList';
import QueryList from '../../containers/QueryList/QueryList';
import classes from './Layout.css';

class Layout extends Component {
    state = {
        images: [],
        query: ''
    }

    onSearchSubmit = (term) => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 9Q-ZukN98-1d_JaDZh2JH3MP1Z-mxxZ7ZKgXHcQ12Ts'
            }
        })
            .then(response => {
                console.log(response);
                console.log(response.data)
                this.setState({images: response.data.results,  query: response.config.params.query });
            })
            .catch(err => {
                if (err.response) {
                    console.log(err.response);
                }
            })
    }

    render() {
        return (
            <Auxiliary>
                <div className={classes.Layout}>
                    <div className={classes.PageWrapper}>
                        <Toolbar userSubmit={this.onSearchSubmit} />
                        <ImageList foundImages={this.state.images} />
                        <QueryList />
                    </div>
                </div>
            </Auxiliary>
        )
    }
}

export default Layout;