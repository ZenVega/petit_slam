export const deleteItemFromFirebase = (ref, itemId) => {
  ref.get().then((snapshot) => {
    ref.set(snapshot.exists()
    ?snapshot.val().filter(id => id != itemId)
    :[])
  })
}