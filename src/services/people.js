import {api} from './api'

export default{
  index:()=> api.get('/people'),
  show:({id})=> api.get(`/people/${id}`),
  showAvatar:({id})=> fetch(`https://picsum.photos/id/${id}/300`)
}