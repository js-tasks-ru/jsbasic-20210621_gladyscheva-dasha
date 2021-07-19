function makeFriendsList(friends) {
  let unorderedList = document.createElement('ul');
   
   for (let friend of friends) {
     unorderedList.innerHTML += `<li>${friend.firstName} ${friend.lastName}</li>`;
   }
  
   return unorderedList;
}
