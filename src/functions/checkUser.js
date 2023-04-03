import axios from 'axios';

export default async function checkUser(token, boolean){
    const res = await axios.get('http://localhost/api/user/access/admin/' + token);
    try {
        if(res.status !== 200 && boolean){
            window.location.href = '/blog';
        } else if( res.status === 200 ) {
            return true;
            }
    } catch (err) {
        console.log(err);
    }
}