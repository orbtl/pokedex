import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Normal</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Fighting</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Flying</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Poison</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Ground</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Rock</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Bug</Dropdown.Item>
        <Dropdown.Item href="#/action-8">Ghost</Dropdown.Item>
        <Dropdown.Item href="#/action-9">Steel</Dropdown.Item>
        <Dropdown.Item href="#/action-10">Fire</Dropdown.Item>
        <Dropdown.Item href="#/action-11">Water</Dropdown.Item>
        <Dropdown.Item href="#/action-12">Grass</Dropdown.Item>
        <Dropdown.Item href="#/action-13">Electric</Dropdown.Item>
        <Dropdown.Item href="#/action-14">Psychic</Dropdown.Item>
        <Dropdown.Item href="#/action-15">Ice</Dropdown.Item>
        <Dropdown.Item href="#/action-16">Dragon</Dropdown.Item>
        <Dropdown.Item href="#/action-17">Dark</Dropdown.Item>
        <Dropdown.Item href="#/action-18">Fairy</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default DropDown;
