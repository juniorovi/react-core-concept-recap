import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <div className='bivag'>
        <District name='Noahkhali' speciality='Darmik & Language'></District>
        <District name='B. Baria' speciality='Maramari & Money'></District>
        <District name='Kumilla' speciality='Dakati & Brave'></District>
      </div>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h2 style={{textAlign:'center'}}>Total Posts: {posts.length}</h2>

      <div className='posts'>

        {
          posts.map(post => <Post
            title={post.title}
            body={post.body}
          ></Post>)
        }
      </div>
    </div>
  )
}

function Post(props) {
  return (
    <div className='post'>
      <h3>Title: {props.title}</h3>
      <p>Body: {props.body}</p>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'skyblue',
  margin: '20px',
  padding: '10px'
}

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => setPower(power * 2)
  return (
    <div style={districtStyle} className='district'>
      <h3>Name: {props.name}</h3>
      <p>Speciality: {props.speciality}</p>
      <h3>Ratting: {power}</h3>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )

}

export default App;
