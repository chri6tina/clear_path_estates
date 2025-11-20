export default function Footer() {
  return (
    <footer className="border-t border-[#eee] bg-white py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-[#666] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Clear Path Estates. All rights reserved.</p>
        <p>Jacksonville • Ponte Vedra • St. Johns • Amelia Island</p>
      </div>
    </footer>
  );
}

