import styled from "@emotion/styled";

export const Contact = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    width: 90%;
`;

export const Container = styled.div`
    margin-right: 24px;
    display: flex;
    align-items: center;
`;

export const ContactName = styled.span`
    flex-grow: 1;
    text-transform: capitalize;
    font-size: 18px;
    margin-left: 8px;
`;

export const ContactNumber = styled.span`
    margin-right: 80px;
    margin-left: 8px;
    font-size: 18px;
`;