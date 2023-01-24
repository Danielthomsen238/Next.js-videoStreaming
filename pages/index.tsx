import type { NextPage } from "next";

import VideoUpload from "../components/VideoUpload";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <VideoUpload />
      </main>
    </div>
  );
};

export default Home;
