import React from 'react';
import { InputGroup, InputGroupAddon } from 'reactstrap';

const InputList = ({ name, onChange, addItem }) => {
    return (
        <form onSubmit={e => addItem(e)}>
            <InputGroup>
                <input
                    type="text"
                    className="form-control"
                    placeholder="name"
                    value={name}
                    onChange={e => onChange(e.target.value)}
                />
                <InputGroupAddon addonType="append">
                    <button type="submit"
                        className="btn btn-primary"
                        onClick={() => addItem()}
                        disabled={!name || name.length < 3}
                    >
                        {'Add'}
                    </button>
                </InputGroupAddon>
            </InputGroup>
        </form>
    )
}



export default InputList;