import React from 'react';
import List from './List'
import MyModal from './MyModal';
import EditModal from './EditModal';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/api';

class NamePages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            newItem: {
                firstName: '',
                lastName: '',
                Age: '',
            },
            selectedItem: {
                _id: null,
                firstName: '',
                lastName: '',
                Age: '',
            },
            AddModal: false,
            Emodal: false,
        };
        this.onChange = this.onChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.onShowAddModal = this.onShowAddModal.bind(this);
        this.onHideAddModal = this.onHideAddModal.bind(this);
        this.onShowEditModal = this.onShowEditModal.bind(this);
        this.onHideEditModal = this.onHideEditModal.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onAddEdited = this.onAddEdited.bind(this);

    }

    componentWillMount() {
        this.load();
    }

    addItem(person) {

        axios.post(`${apiUrl}/people`, person)
            .then(resp => resp.data)
            .then((item) => {
                const { list } = this.state;
                const newList = [...list, item];
                this.setState({
                    list: newList,
                    modal: false
                });
            })
            .catch((err) => {
                console.log('Error !', err);
            });

    }

    removeItem(item) {

        if (!window.confirm('Are you sure?')) return;
        axios.delete(`${apiUrl}/people/${item._id}`)
            .then(() => {
                const { list } = this.state;
                const newList = list.filter(e => e._id !== item._id);
                this.setState({
                    list: newList,
                });
            })
            .catch((err) => {
                console.log('Error! ', err)
            });
    }




    save(list) {
        window.localStorage.myList = JSON.stringify(list);
    }

    onChange(prop, value) {
        const { newItem } = this.state;
        this.setState(state => ({
            newItem: {
                ...newItem,
                [prop]: value,
            }
        }));
    }

    onEdit(prop, value) {
        const { selectedItem } = this.state;
        this.setState(state => ({
            selectedItem: {
                ...selectedItem,
                [prop]: value,
            }
        }));

    }

    onShowAddModal(e) {

        this.setState({
            AddModal: true,
            newItem: {
                firstName: '',
                lastName: '',
                Age: '',
            },
        });

    }

    onShowEditModal(item) {
        this.setState(
            {
                Emodal: true,
                selectedItem: {
                    _id: item._id,
                    firstName: item.firstName,
                    lastName: item.lastName,
                    Age: item.Age,
                },

            }
        );

    }



    onHideAddModal() {

        this.setState(
            {
                AddModal: false,
            }
        );
    }

    onHideEditModal() {

        this.setState(
            {
                Emodal: false,
            }
        );
    }

    load() {
        axios.get(`${apiUrl}/people`)
            .then(res => res.data)
            .then((people) => {
                this.setState({
                    list: people,
                });
            })
            .catch((err) => {
                console.log('Error:‌ ', err);
            });
    }

    onAddEdited(item) {

        console.log(item);
        axios.put(`${apiUrl}/people/${item._id}`, item)
            .then(() => {
                const { list } = this.state;
                const newList = list.map((e) => (
                    (e._id === item._id ? { ...item } : e)
                ));
                this.setState({
                    list: newList,
                    Emodal: false,
                });

            })
            .catch((err) => {
                console.log('Error: ', err);
            });

    }


    render() {
        const { list, newItem, AddModal, Emodal, selectedItem } = this.state;
        return (
            <div>

                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.onShowAddModal()}
                >
                    {'Add Person'}
                </button>
                <List
                    list={list}
                    removeItem={this.removeItem}
                    onShow={this.onShowEditModal}

                />
                <MyModal
                    modal={AddModal}
                    person={newItem}
                    onChange={this.onChange}
                    addItem={this.addItem}
                    onDismiss={this.onHideAddModal}
                />
                <EditModal
                    modal={Emodal}
                    person={selectedItem}
                    onChange={this.onEdit}
                    addItem={this.onAddEdited}
                    onDismiss={this.onHideEditModal}
                />


            </div>

        );

    }
}

export default NamePages;