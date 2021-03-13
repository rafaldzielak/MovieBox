import React from "react";
import Form, { Input, Button } from "../elements/SearchInput";
import { GoSearch } from "react-icons/go";
const SearchComponent = ({ keyword, setKeyword, submitHandler, top }) => {
  return (
    <>
      <Form top={top} onSubmit={submitHandler}>
        <Input
          placeholder='Enter Text'
          type='text'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}></Input>
        <Button type='submit'>
          <GoSearch style={{ verticalAlign: "middle" }} />
        </Button>
      </Form>
    </>
  );
};

export default SearchComponent;
