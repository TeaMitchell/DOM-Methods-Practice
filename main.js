let bodyElement = document.querySelector('body')


let myMain = document.createElement('main')
bodyElement.append(myMain)

let newButton = document.createElement('button')
newButton.append('remove')
bodyElement.append(newButton)
newButton.addEventListener('click', function(){
  myMain.remove()
})

let newImg = document.createElement('img')
newImg.className = 'image'
newImg.src ='https://lh3.googleusercontent.com/proxy/Kqq4HG20QVJvnl9Q1VxNXLbLBdXKYhfLcUV3iUQ3WzY3_PAlaba-06xKnJ1PVlbIJkONAmFqLve7YzudV5yx8V182E6iVtCaBp6EIsZeXili4lPz-vZG4NTiFgtVkKhckdpYcweUj_tFMjbFJoJoP1hyfQ'
myMain.append(newImg)

let newAnchor = document.createElement('a')
newAnchor.className = 'link'
newAnchor.append('git connected link')
newAnchor.href = 'https://levelup.gitconnected.com/the-best-programming-memes-b435d1bf918d'
myMain.append(newAnchor)