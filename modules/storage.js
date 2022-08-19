import StorageAvailable from './storage-available';
import addBooktoHTML from './add-to-html';

const getStorage = () => {
  if (new StorageAvailable('localStorage')) {
    const dataFromStorage = JSON.parse(localStorage.getItem('storageBooks'));
    const books = (dataFromStorage === null) ? [] : dataFromStorage;
    books.forEach((book) => {
      addBooktoHTML(book.title, book.author);
    });
  }
};

export default getStorage;