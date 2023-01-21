export function changeUser(data) {
  return {
    type: 'SET_USER',
    payload: data,
  };
}
export function clearUser(){
  return{
    type:'CLEAR_USER'
  }
}
