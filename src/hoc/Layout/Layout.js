import React, { Component } from 'react';
import axios from 'axios';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../containers/Toolbar/Toolbar';
import ImageList from '../../containers/ImageList/ImageList';
import QueryList from '../../containers/QueryList/QueryList';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Layout.css';

class Layout extends Component {
    state = {
        images: [],
        query: '',
        loading: false
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
                this.setState({ loading: true });
                console.log(response);
                console.log(response.data)
                setTimeout(() => {
                    this.setState({ images: response.data.results, query: response.config.params.query, loading: false });
                }, 2000);
            })
            .catch(err => {
                if (err.response) {
                    console.log(err.response);
                }
            })
    }

    render() {
        let mainContent = <Backdrop />;
        if (!this.state.loading) {
            mainContent = (
                <div className={classes.PageWrapper}>
                    <Toolbar userSubmit={this.onSearchSubmit} />
                    <ImageList query={this.state.query} foundImages={this.state.images} />
                    <QueryList />
                </div>
            )
        }

        return (
            <Auxiliary>
                <div className={classes.Layout}>
                    {mainContent}
                </div>
            </Auxiliary>
        )
    }
}

export default Layout;