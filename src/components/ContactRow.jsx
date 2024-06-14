/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const TableRow = styled.tr`
  cursor: pointer;
  background-color: #f0f0f0;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 64, 255, 0.5);
    background-color: #e0e0e0;
  }

  td {
    padding: 10px;
  }
`;

export default function ContactRow({ setSelectedContactId, contact }) {
  const handleClick = () => {
    setSelectedContactId(contact.id);
  };

  return (
    <TableRow onClick={handleClick}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </TableRow>
  );
}
