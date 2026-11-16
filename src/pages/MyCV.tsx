export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="hidden sm:block">
        <embed src="IECV_Jose_Izarra.pdf" width="700px" height="800px" type="application/pdf" />
      </div>
      <div className="block sm:hidden">
        <embed src="IECV_Jose_Izarra.pdf" width="400px" height="550px" type="application/pdf" />
      </div>
    </main>
  );
}
