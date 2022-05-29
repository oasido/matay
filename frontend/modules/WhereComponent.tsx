import { Input, MultiSelect, Text } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import axios from 'axios';
import { useEffect, useState } from 'react';

const WhenComponent = (props) => {
  const { form } = props;
  const [results, setResults] = useState([]);
  let searchResults = [];
  const [debouncedLocation] = useDebouncedValue(location, 300);

  const handleLocationInput = (e) => {
    setLocation(e);
  };

  const handleSearch = async () => {
    const options = {
      method: 'GET',
      url: 'https://trueway-places.p.rapidapi.com/FindPlaceByText',
      params: { text: debouncedLocation, language: 'he' },
      headers: {
        'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com',
        'X-RapidAPI-Key': '5d184f4bebmsh6418304ef432175p111c0ejsn7614b9380f74',
      },
    };

    axios.request(options).then((response) => {
      response.data.results &&
        response.data.results.forEach((result) => {
          searchResults.push(result.address);
        });
      setResults(searchResults);
    });
    // .catch(function (error) {
    //   console.error(error);
    // });
  };

  useEffect(() => {
    location && handleSearch();
  }, [debouncedLocation]);

  console.log(results);

  return (
    <>
      <div className="mb-24">
        {/* <MultiSelect
          size="lg"
          classNames={{ input: 'font-medium' }}
          placeholder="(אופציונאלי) מיקום"
          searchable
          maxSelectedValues={1}
          // onSearchChange={(e) => {
          //   handleLocationInput(e);
          // }}
          nothingFound="לא נמצאו תוצאות"
          data={results}
          {...form.getInputProps('location')}
        /> */}
        <Input
          size="lg"
          classNames={{ input: 'font-medium' }}
          placeholder="(אופציונאלי) מיקום"
          {...form.getInputProps('location')}
          onChange={(e) => {
            form.setFieldValue('location', e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default WhenComponent;
