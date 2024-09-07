import { ReactComponent as Logo } from "../logo.svg";

export default function Header() {
  return (
    <div className="flex justify-center items-center h-20 pt-10">
      <Logo className="absolute left-10 w-14" />
      <div className="align-middle p-0 text-3xl">SATURN</div>
    </div>
  );
}
