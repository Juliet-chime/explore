import { Input } from "reactstrap";
import styled from "styled-components";

export const CustomInput = styled(Input)`
width: 100%;
height: 1.875rem;
border: none;
background-color: transparent;
outline: none;
color: ${props => props.color ? props.color : 'white'} !important;
`