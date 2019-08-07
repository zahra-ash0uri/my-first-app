import React from 'react';
import List from './List'
import MyModal from './MyModal';


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
            AddModal: false,
            EditModal: false,
        };
        this.onChange = this.onChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.onShowAddModal = this.onShowAddModal.bind(this);
        this.onHideModal = this.onHideModal.bind(this);
        this.onShowEditModal = this.onShowEditModal.bind(this);
    }

    componentWillMount() {
        this.load();
    }


    addItem(person) {

        const { list } = this.state;
        const newList = [...list, person];
        this.setState(
            {
                list: newList,
                AddModal: false,
            }
        );
        this.save(newList);

    }

    removeItem(item) {

        if (!window.confirm('Are you sure?')) return;
        const { list } = this.state;
        // changed
        const newList = list.filter(e => e !== item);
        this.setState(
            {
                list: newList,
            }
        );
        this.save(newList);

    }

    save(list) {
        window.localStorage.myList = JSON.stringify(list);
    }

    onChange(prop, value) {
        const {newItem}=this.state;
        this.setState(state => ({
            newItem: {
                ...newItem,
                [prop]: value,
            }
        }));
    }

    onShowAddModal() {
        this.setState({
            AddModal: true,
            firstName: '',
            lastName: '',
            Age: '',
        });

    }

    onShowEditModal() {
        this.setState({
            EditModal: true,
            // firstName: '',
            // lastName: '',
            // Age: '',
        });
    }

    onHideModal() {
        
        this.setState(
            {
                AddModal: false,
            }
        );
    }

    load() {
        const { myList } = window.localStorage;
        if (myList) {
            const list = JSON.parse(myList);
            this.setState({
                list,
            });
        }
    }

    render() {
        const { list, newItem, AddModal } = this.state;
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
                />
                <MyModal
                    modal={AddModal}
                    person={newItem}
                    onChange={this.onChange}
                    addItem={this.addItem}
                    onDismiss={this.onHideModal}
                />
                
                
            </div>

        );

    }
}

export default NamePages;