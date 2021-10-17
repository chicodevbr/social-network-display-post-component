import moment from 'moment';

import Post from './components/Post';
import data from './data/data';

export default function App() {
  return (
    <div>
      <header>
        <div className="bg-blue-700 mx-auto p-4 ">
          <h1 className="text-center font-semibold text-xl text-white">
            Social NetWork Post
          </h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4 flex flex-col justify-center items-center">
          {data.map((item) => (
            <Post
              key={item.id}
              name={item.name}
              date={moment(item.date).fromNow()}
              content={item.content}
              image={item.image}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
