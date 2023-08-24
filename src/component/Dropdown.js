import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BasicButtonExample() {
    return (
        <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
        </DropdownButton>
    );
}

export default BasicButtonExample;