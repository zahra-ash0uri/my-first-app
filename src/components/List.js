import React from 'react';


class List extends React.Component {
    
    

        render() {
        const { list, removeItem, onShow } = this.props;
        return (
            <table className="table table-dark table-hover table-sm mt-2">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Age</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.Age}</td>
                            <td><button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => removeItem(item)}
                            >
                                {'Remove'}
                            </button></td>
                            <td><button
                                type="button"
                                className="btn btn-primary btn-secondary"
                                // check later!
                                onClick={()=>onShow(item)}
                            >
                                {'Edit'}
                            </button></td>
                            

                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

}

export default List;