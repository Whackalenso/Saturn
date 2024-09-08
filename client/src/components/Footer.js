export default function Footer({socialCreditScore}) {
  return (
    <div className="bg-blue-50 p-5 flex justify-center gap-4">
      <p className="text-3xl font-black">{socialCreditScore}</p><div className="italic text-xs font-light"><b>Predicted<br/>Score</b></div>
    </div>
  );
}
