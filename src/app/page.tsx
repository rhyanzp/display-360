import Image from "next/image";
import Displayer from "../../components/displayer";
export default function Home() {
  return (
    <main>
      <div className="text-center m-5">
        <h1>Title - Display 360 Video</h1>
        <Displayer></Displayer>
      </div>
    </main>
  );
}
