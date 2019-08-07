import React from 'react';
import EditModal from './EditModal';


const List = ({ list, removeItem }) => {
    return (
        <table className="table table-striped table-sm mt-2">
            <thead>
                <tr>
                    <th>#</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.Age}</td>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => removeItem(item)}
                        >
                            {'Remove'}
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary btn-secondary"
                            onClick={() => removeItem(item)}
                        >
                            {'Edit'}
                        </button>
                    </tr>
                ))}


            </tbody>
        </table>
    );
}

export default List;