import { ReactComponent as Logo } from "../logo.svg";

export default function Header() {
  return (
    <div className="flex justify-between items-center h-20 pt-10 mx-8">
      <img src="/logo_new.png" alt="SATURN" className="w-32 w-fit"/>
      {/* <img src="/hamburger.png" alt="hamburger" className="w-8"/> */}
      {/* <div className="align-middle p-0 text-3xl">SATURN</div> */}
    </div>
  );
}
