`REACT 18 + REACT-ROUTER-DOM + TYPESCRIPT + FIREBASE`

# Firebase

[How to activate Cloud Firestore](https://medium.com/@krishnabhdas3/this-project-is-set-up-to-use-cloud-firestore-in-datastore-mode-f09ba48b53bc)

[How to fix firestore: PERMISSION_DENIED: Missing or insufficient permissions](https://stackoverflow.com/questions/46590155/firestore-permission-denied-missing-or-insufficient-permissions)

[How to use Cloud Firestore in React](https://www.freecodecamp.org/news/how-to-use-the-firebase-database-in-react/)

# React-Router-Dom

```js
const ProtectedRoute = ({ children }: { children: any }) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

return (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route
          index // index means default path
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
```
