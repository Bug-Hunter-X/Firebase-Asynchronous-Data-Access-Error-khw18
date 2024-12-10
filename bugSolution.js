```javascript
async function getData() {
  try {
    const docRef = doc(db, "collections", "docId");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().someField);
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```