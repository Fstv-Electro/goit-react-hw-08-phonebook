import styled from "@emotion/styled";
import { Field } from "formik";

export const Label = styled.label`
    margin: 8px;
    font-size: 20px;
`;

export const Input = styled(Field)`
    margin: 4px;
    padding: 8px;
    width: 200px;
    outline: none;
    border: 1px solid #2a2a2a;
    border-radius: 4px;
`;

export const FormField = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    margin-right: 30%;
`;