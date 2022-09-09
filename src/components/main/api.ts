import axios from 'axios';

export async function fetchData() {
    const {data} = await axios.get(
        'https://infinite-oasis-91350.herokuapp.com/http://test.api.mainstack.io',
        {
            headers: {'Content-Type': 'application/json'},
        },
    );
    return data;
}
