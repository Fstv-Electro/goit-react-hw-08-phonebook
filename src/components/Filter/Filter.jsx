import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteButton from "components/DeleteButton";
import { Input, FilterWrapper, Label } from "./Filter.styled";
import * as selectors from "redux/selectors";
import { setFilter, resetFilter } from "redux/filterSlice";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectors.getFilter);

    const onChange = e => dispatch(setFilter(e.target.value));

    return (
        <>
            <Label htmlFor="filter">Find contact</Label>
            <FilterWrapper>
                <Input type="text" name="filter" value={filter} onChange={onChange} />
                {filter && (
                    <DeleteButton
                        color="black"
                        type="button"
                        aria-label="Clear filter"
                        onClick={() => dispatch(resetFilter())}
                    >
                        Clear
                    </DeleteButton>
                )}
            </FilterWrapper>
        </>
    );
};

export default Filter;
