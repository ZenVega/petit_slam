export const deleteItemFromFirebase = (ref, itemId) => {
  ref.get().then((snapshot) => {
    ref.set(snapshot.exists()
    ?snapshot.val().filter(id => id != itemId)
    :[])
  })
}

export const addItemToFirebase = (ref, itemId) => {
  ref.get().then((snapshot) => {
    const newRefValue = snapshot.val()
      ref.set(snapshot.exists()
      ?[...newRefValue,itemId]
      :[])
  })
}