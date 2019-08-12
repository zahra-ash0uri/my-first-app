import React from 'react';
import Axios from 'axios';
import GetPostsModal from './GetPostsModal';

class ApiCalls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            posts: [],
            error: '',
            postModal: false,

        };
        this.getPosts = this.getPosts.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

    }

    componentWillMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((result) => {
                this.setState(
                    {
                        users: result.data,

                    }
                );
            })
            .catch((error) => {
                this.setState(
                    {
                        error,
                    }
                )
            });
    }

    getPosts(index) {
        Axios.get(`https://jsonplaceholder.typicode.com/users/${index}/posts`)
            .then((result) => {
                this.setState(
                    {
                        posts: result.data,

                    }
                );
            })
            .catch((error) => {
                this.setState(
                    {
                        error,
                    }
                )
            });
        this.setState(
            {
                postModal: true,
            }
        );
        console.log(this.state.postModal)
    }

    showModal() {
        this.setState(
            {
                postModal: true,
            }
        );
    }

    hideModal() {
        this.setState(
            {
                postModal: false,
            }
        );
    }

    render() {
        const { users, postModal, posts } = this.state;

        return (
            <>
                <table className="table table-striped table-sm mt-2">
                    <thead>
                        <tr>
                            <th>{'#'}</th>
                            <th>{'User'}</th>
                            <th>{'Posts'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-primary sm"
                                        onClick={() => this.getPosts(item.id)}
                                    >
                                        {'Click to see their posts'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

                <GetPostsModal
                    modal={postModal}
                    postsList={posts}
                    onDismiss={() => this.hideModal()}
                />

            </>
        );

    }


}

export default ApiCalls;

