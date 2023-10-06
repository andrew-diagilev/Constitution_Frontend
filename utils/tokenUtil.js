import { useSelector } from 'react-redux';
import { selectToken } from '../redux/authSelectors';

export async function getToken() {
    const token = await useSelector(selectToken);
    return token;
}