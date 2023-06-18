import Dashboard from "../components/dashboard";


export default function AccountDetails() {
    return (
        <>
        <main className="flex w-full">
        <section className='flex flex-left'>
      <Dashboard />
      </section>
            <section className="w-full flex float-right">
                <div className="p-8">
                   <h1 className="text-primary text-2xl font-bold">Account Details</h1> 
                </div>
                <div className="flex justify-center">
                <div className="h-auto">
                    
                </div>
                </div>
            </section>
        </main>
        </>
    )
}