import * as React from 'react';
import { ISearchProps } from './ISearchProps';
import { SearchBox } from 'office-ui-fabric-react';

const Search: React.FC<ISearchProps> = ({ ...props }) => {
    return (
        <SearchBox
          {...props}
          placeholder='Search name, department, job title or phone number'
          onChange={props.onChange}
          onClear={props.onClear}
          onSearch={props.onSearch}
          value={props.value}
        />
    );
}

export default Search;
