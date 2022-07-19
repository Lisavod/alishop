const token = '{token}';
fetch('https://{company}.pipedrive.com/api/v1/deals:(id,title,value,currency)?api_token={token}', {
        headers: {
            Authorization: `token ${token}`
        }
    })
    .then(res => res.json())
    .then(json => {
        const { data } = json;
        const firstUser = data[0];
        console.log(firstUser.title);

    })


const token = '{token}';

const results = fetch('https://{company}.pipedrive.com/api/v1/deals:(id,title,value,currency)?api_token={token}', {
        headers: {
            Authorization: `token ${token}`
        }
    })
    .then(res => res.json())
    .then(json => {
        const { data } = json;
        //console.log(data);
        const users = data;
        users.map(el => {
            console.log(el.title)
        });
        return (users);
    });


const response = await fetch('https://{comapny}.pipedrive.com/api/v1/deals:(id,title,value,currency)?api_token={token}')
const data = await response.json();
const users = data.data;
const userSearch = users.find((user) => user.id == "10");
console.log(userSearch);


const myAsyncFunction = async() => {
    const response = await fetch('https://{comapny}.pipedrive.com/api/v1/deals:(id,title,value,currency)?api_token={token}');
    const data = await response.json();
    const secondUser = data.data[2];
    console.log(secondUser);
}