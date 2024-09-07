import { ReactComponent as Logo } from "../logo.svg";

export default function Header() {
  return (
    <div className="flex justify-center items-center h-20">
      <Logo className="absolute left-10 top-10 h-6" />
      <div className="align-middle p-0">SATURN</div>
    </div>
  );
}
