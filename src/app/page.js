import Navbar from "../component/Navbar";
import Image from "next/image";

export default function Page() {
  return (
    <div>

      <video
        width="400"
        autoPlay
        muted
        loop
        className="aspect-video rounded-lg home-bg"
      >
        <source src="/trans.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Image className="scrollicon" src="/icon.png" alt="icon" width={40} height={40} />
    </div>
  );
}